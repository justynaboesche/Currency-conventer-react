import "./style.css";

const Form = (props) => (
  <form className="form">
    <fieldset className="form__fieldset">
      <h1 className="form__header">Kalkulator walut</h1>
      <p>
        Pola wymagane oznaczone są *.
      </p>
      <p>
        <label>
          <span className="form__label">
            Kwota w PLN*:
          </span>
          <input
            className="form__field"
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
          <span className="form__label">
            Wybierz walutę*:
          </span>
          <select className="form__field" name="currency">
            <option value="EUR" selected>EUR (euro)</option>
            <option value="USD">USD (dolar amerykański)</option>
            <option value="GBP">GBP (funt szterling)</option>
          </select>
        </label>
      </p>
      <p>
        <button className="form__button">Przelicz</button>
      </p>
      <p>
        Wynik: <strong className="form__result">N/A</strong>
      </p>
      <p>
        <button type="reset" className="form__button">Wyczyść</button>
      </p>
    </fieldset>
  </form>
);

export default Form;