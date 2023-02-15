import { StyledClock } from './styled.js';
import { useCurrentDate } from "./useCurrentDate";

export const Clock = () => {
    const date = useCurrentDate();

    return (
        <StyledClock>
            Dzisiaj jest{" "}
            {date.toLocaleString(undefined, {
                weekday: "long",
                day: "numeric",
                month: "long"
            })}
            {", "}
            {date.toLocaleTimeString()}
        </StyledClock>
    );
};