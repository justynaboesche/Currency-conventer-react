import axios from "axios";
import { useState, useEffect } from "react";

const apiUrl = "https://api.exchangerate.host/latest?base=PLN";

export const useRatesData = () => {
  const [ratesData, setRatesData] = useState({
    status: "loading",
  });

  useEffect(() => {
    const getRatesData = async () => {
      try {
        const { data: { rates, date } } = await axios.get(apiUrl);

        setRatesData({
          status: "success",
          rates,
          date,
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