import { render, screen } from '@testing-library/react';
import MyApp from './App';

test('renders sadness button', () => {
  render(<MyApp />);
  const btnElement = screen.getByText(/button/i);
  expect(btnElement).toBeInTheDocument();
});
