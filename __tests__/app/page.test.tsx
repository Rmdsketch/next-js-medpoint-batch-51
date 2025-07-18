import HomePage from '@/app/page';
import { render } from '@testing-library/react';

describe('HomePage', () => {
  it('should render', () => {
    const { getByText } = render(<HomePage />);
    expect(getByText('Landing Page')).toBeInTheDocument();
  });
});
