import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import Login from "./Login";


jest.mock("axios" , () => ({

    __esModule:true,

    default: {
        get:() =>({
            data:{ id:1, name:'Junny'}
        })
    }
}))

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


test("username input should be empty", () => {
    render(<Login />);
    const usernameInput = screen.getByPlaceholderText(/username/i);
    expect(usernameInput.value).toBe("");
});

test("password input should be empty", () => {
    render(<Login />);
    const passwordInput = screen.getByPlaceholderText(/password/i);
    expect(passwordInput.value).toBe("");
});

test("button should be disabled", () => {
    render(<Login />);
    const buttonEl = screen.getByRole('button');
    expect(buttonEl).toBeDisabled()
});

test("loading should not be render", () => {
    render(<Login />);
    const buttonEl = screen.getByRole('button');
    expect(buttonEl).not.toHaveTextContent(/loading ..../i);
});

test("error message should not be visible", () => {
    render(<Login />);
    const errorEl = screen.getByTestId('error-id');
    expect(errorEl).not.toBeVisible();
});

test("username input should change", () => {
    render(<Login />);
    const usernameInput = screen.getByPlaceholderText(/username/i);
    const testValue = "test value";

    fireEvent.change(usernameInput, { target: { value: testValue } });
    expect(usernameInput.value).toBe(testValue);
});

test("password input change", () => {
    render(<Login />);
    const passwordInput = screen.getByPlaceholderText(/password/i);
    const testValue = "test value";
    fireEvent.change(passwordInput, { target: { value: testValue } });
    expect(passwordInput.value).toBe(testValue);
});

test("button should not be disabled when input exists", () => {
    render(<Login />);
    const buttonEl = screen.getByRole('button');

    const usernameInput = screen.getByPlaceholderText(/username/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);

    const testValue = "test value";


    fireEvent.change(passwordInput, { target: { value: testValue } });

    fireEvent.change(usernameInput, { target: { value: testValue } });

    expect(buttonEl).not.toBeDisabled()
});


test("loading should be render when clicked", () => {
    render(<Login />);
    const buttonEl = screen.getByRole('button');

    const usernameInput = screen.getByPlaceholderText(/username/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);

    const testValue = "test value";

    fireEvent.change(passwordInput, { target: { value: testValue } });
    fireEvent.change(usernameInput, { target: { value: testValue } });
    fireEvent.click(buttonEl);

    expect(buttonEl).toHaveTextContent(/loading ..../i);
});


test("loading should not be rendered after fetching", async () => {
    render(<Login />);
    const buttonEl = screen.getByRole('button');

    const usernameInput = screen.getByPlaceholderText(/username/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);

    const testValue = "test value";

    fireEvent.change(passwordInput, { target: { value: testValue } });
    fireEvent.change(usernameInput, { target: { value: testValue } });
    fireEvent.click(buttonEl);

    await waitFor(() => expect(buttonEl).not.toHaveTextContent(/loading ..../i))
});

test("user should  be rendered after fetching", async () => {
    render(<Login />);
    const buttonEl = screen.getByRole('button');

    const usernameInput = screen.getByPlaceholderText(/username/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);

    const testValue = "test value";

    fireEvent.change(passwordInput, { target: { value: testValue } });
    fireEvent.change(usernameInput, { target: { value: testValue } });
    fireEvent.click(buttonEl);

    const userEl = await screen.findByText(/junny/i);
    expect(userEl).toBeInTheDocument();
});