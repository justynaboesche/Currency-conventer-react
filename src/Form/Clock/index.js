import "./style.css";
import { useCurrentDate } from "./useCurrentDate";

export const Clock = () => {
    const date = useCurrentDate();

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