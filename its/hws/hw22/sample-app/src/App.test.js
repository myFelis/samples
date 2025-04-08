import { render, screen } from '@testing-library/react';
import MyApp from './App';

test('renders learn react link', () => {
  render(<MyApp />);
  const btnElement = screen.getByText(/button/i);
  expect(btnElement).toBeInTheDocument();
});
