import { greeting } from "../utils/greeting"


export const Greeting = () => {
    return (
        <div>
            <h1 data-testid='greet-id'>{greeting()}</h1>
        </div>
    )
}