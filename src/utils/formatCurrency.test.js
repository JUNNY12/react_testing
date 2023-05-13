import {render, screen} from "@testing-library/react"
import { Currency } from "../components/Currency"

test('should be format as USD currency', () => {
    render(<Currency amount={1000} />)
    const currencyElement = screen.getByTestId('currency-id')
    expect(currencyElement.textContent).toBe('$1,000.00')

})
