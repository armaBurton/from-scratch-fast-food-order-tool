import { render, screen } from '@testing-library/react';
import App from './App';

test('Fast Food Ordering Tool', () => {
  render(<App />);
  const linkElement = screen.getByText(/Food Ordering/i);
  expect(linkElement).toBeInTheDocument();
});
