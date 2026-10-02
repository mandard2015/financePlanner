import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Life Insurance route content for nested browser URLs', () => {
  window.history.pushState({}, '', '/services/life-insurance');

  render(<App />);

  expect(screen.getByRole('heading', { level: 1, name: /Life Insurance \/ LIC/i })).toBeInTheDocument();
});
