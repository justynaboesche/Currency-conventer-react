import "./style.css";
import { useEffect, useState } from "react";

export const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId)
        };
    }, []);

    return (
        <p className="date">
            Dzisiaj jest{" "}
            {date.toLocaleString(undefined, {
                weekday: "long",
                day: "numeric",
                month: "long"
            })}
            {", "}
            {date.toLocaleTimeString()}
        </p>
    );
};