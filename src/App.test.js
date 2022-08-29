import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// 📝: SIMPLE TEST FOR WORKING UI
test('check to see if login form renders', () => {
  render(<App />);
  const loginElement = screen.getByTestId('login-form');

  const googleButton = screen.getByTestId('goog');
  const facebookButton = screen.getByTestId('face');

  expect(loginElement).toBeInTheDocument();
  expect(googleButton).toBeInTheDocument();
  expect(facebookButton).toBeInTheDocument();
});
