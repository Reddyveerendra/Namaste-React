import { screen, render } from "@testing-library/react"
import Header from "../src/Header"
test('should have cart', () => {
    render(<Header />);
    const cart = screen.getByDisplayValue("");
    expect(cart).toBeInTheDocument();
});