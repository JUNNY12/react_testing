import { formatCurrency } from "../utils/formatCurrency"
export const Currency = ({ amount }) => {
    return (
        <div>
            <h1 data-testid='currency-id'>{formatCurrency(amount)}</h1>
        </div>
    )
}