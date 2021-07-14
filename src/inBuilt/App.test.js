import { render, screen } from '@testing-library/react';
import Mappings from '../components/Mappings';

test('renders learn react link', () => {
  render(<Mappings />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
