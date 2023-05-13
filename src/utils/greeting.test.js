import {render, screen} from "@testing-library/react"
import { Greeting } from "../components/Greeting"

test("greeting should be rendered", () => {
    render(<Greeting />)
})

test('greeting should render "Good morning"', () => {
  const currentTime = new Date('2023-05-13T00:00:00');
  const originalDate = global.Date;
  global.Date = jest.fn(() => currentTime);

  render(<Greeting />);
  const greetingElement = screen.getByText(/Good morning/i);
  expect(greetingElement).toBeInTheDocument();

  global.Date = originalDate;
});

test('greeting should render "Good afternoon"', () => {
    const currentTime = new Date('2023-05-13T13:00:00');
    const originalDate = global.Date;
    global.Date = jest.fn(() => currentTime);
    
    render(<Greeting />);
    const greetingElement = screen.getByText(/Good afternoon/i);
    expect(greetingElement).toBeInTheDocument();
    
    global.Date = originalDate;
});

test('greeting should render "Good evening"', () => {
    const currentTime = new Date('2023-05-13T16:00:00');
    const originalDate = global.Date;
    global.Date = jest.fn(() => currentTime);
    
    render(<Greeting />);
    const greetingElement = screen.getByText(/Good evening/i);
    expect(greetingElement).toBeInTheDocument();
    
    global.Date = originalDate;
});

test('greeting should render "Good night"', () => {
    const currentTime = new Date('2023-05-13T22:00:00');
    const originalDate = global.Date;
    global.Date = jest.fn(() => currentTime);
    
    render(<Greeting />);
    const greetingElement = screen.getByText(/Good night/i);
    expect(greetingElement).toBeInTheDocument();
    
    global.Date = originalDate;
});
