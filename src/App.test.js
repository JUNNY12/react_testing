import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByTestId('learn-link');
  expect(linkElement).toBeInTheDocument();
});

test('url is correct', () =>{
  render(<App />);
  const linkElement = screen.getByTestId('learn-link');
  expect(linkElement.href).toContain('junny.com')
})

test('renders 3 list items', () =>{
  render(<App />);
  const listItems = screen.getAllByRole("listitem");
  expect(listItems).toHaveLength(3)
})

test('renders title', () =>{
  render(<App />);
  const title = screen.getByTestId('mytestid')
  expect(title).toBeInTheDocument()
})

test('sum should be 6', () =>{
  render(<App />);
  const sum = screen.getByTitle('sum')
  expect(sum.textContent).toBe('6')
})