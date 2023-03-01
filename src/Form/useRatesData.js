import axios from "axios";
import { useState, useEffect } from "react";

export const useRatesData = () => {
  const [ratesData, setRatesData] = useState({
    status: "loading",
  });

  const url = "https://api.exchangerate.host/latest?base=PLN";

  // const url = "data.json";

  useEffect(() => {
    const getRatesData = async () => {
      try {
        console.log("getting" + url);
        const response = await axios.get(url);

        console.log(response);
        setRatesData({
          status: "success",
          rates: response.data.rates,
          date: response.data.date,
        });

      } catch {
        setRatesData({
          status: "error",
        });
      }
    };

    setTimeout(getRatesData, 2000);
  }, []);

  return ratesData;
};