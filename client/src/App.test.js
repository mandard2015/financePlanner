import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Life Insurance route content for nested browser URLs', () => {
  window.history.pushState({}, '', '/services/life-insurance');

  render(<App />);

  expect(screen.getByRole('heading', { name: /Life Insurance \/ LIC/i })).toBeInTheDocument();
});
