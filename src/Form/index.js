import {
  StyledForm,
  Header,
  Label,
  Field,
  LoadingText,
  ErrorText,
  Info,
  StyledDate
} from "./styled";
import { useState } from "react";
import { Result } from "./Result";
import { Buttons } from "./Buttons";
import { Clock } from "./Clock";
import { useRatesData } from "./useRatesData";

export const Form = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("EUR");
  const [result, setResult] = useState("");
  const ratesData = useRatesData();

  const calculateResult = (amount, currency) => {
    const rate = ratesData.rates[currency];

    setResult({
      initialAmount: +amount,
      finalAmount: amount * rate,
      currency,
    });
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amount, currency);
  };

  const onResetClick = () => {
    setAmount("");
    // setCurrency("EUR");
    setResult("");
  };

  return (
    <StyledForm
      onSubmit={onFormSubmit}>
      <Clock />
      <Header>
        Kalkulator walut
      </Header>
      {ratesData.status === "loading" ? (
        <LoadingText>
          Zaczekaj chwilę... <br /> Trwa pobieranie danych z Europejskiego
          Banku Centralnego...
        </LoadingText>
      )
        : (
          ratesData.status === "error" ? (
            <ErrorText>
              Coś poszło nie tak... <br />
              Sprawdź, czy masz połączenie z internetem!
            </ErrorText>
          ) : (
            <>
              <p>
                Pola wymagane oznaczone są *.
              </p>
              <p>
                <label>
                  <Label>
                    Kwota w PLN*:
                  </Label>
                  <Field
                    value={amount}
                    onChange={({ target }) => setAmount(target.value)}
                    type="number"
                    min="0.01"
                    step="0.01"
                    required
                    placeholder="Wpisz kwotę w PLN"
                  />
                </label>
              </p>
              <p>
                <label>
                  <Label>
                    Wybierz walutę*:
                  </Label>
                  <Field
                    as="select"
                    value={currency}
                    onChange={({ target }) => setCurrency(target.value)}
                  >
                    {Object.keys(ratesData.rates).map((currency => (
                      <option
                        key={currency}
                        value={currency}
                      >
                        {currency}
                      </option>
                    )))}
                  </Field>
                </label>
              </p>
              <Buttons onResetClick={onResetClick} />
              <Result result={result} />
              <Info>Kursy walut pobierane są z Europejskiego Banku Centralnego.<br />Aktualne na dzień:
                <StyledDate>
                  {ratesData.date}
                </StyledDate>
              </Info>
            </>
          ))
      }
    </StyledForm>
  );
};
