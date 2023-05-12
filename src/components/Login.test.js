import { screen, render } from "@testing-library/react";
import { Login } from "./Login";

test("username input should be rendered", () => {
    render(<Login />);
    const usernameInput = screen.getByPlaceholderText(/username/i);
    expect(usernameInput).toBeInTheDocument();
});

test("password input should be rendered", () => {
    render(<Login />);
    const passwordInput = screen.getByPlaceholderText(/password/i);
    expect(passwordInput).toBeInTheDocument();
});

test("button input should be rendered", () => {
    render(<Login />);
    const buttonEl = screen.getByRole('button');
    expect(buttonEl).toBeInTheDocument();
});