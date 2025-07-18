import LoginPage from '@/app/auth/login/page';
import { render } from '@testing-library/react';

jest.mock('@/app/auth/login/actions', () => ({
  loginAction: jest.fn(),
}));

describe('Auth/Login Page', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render', async () => {
    const { getByText } = render(await LoginPage());
    expect(getByText('Sign in')).toBeInTheDocument();
  });
});
