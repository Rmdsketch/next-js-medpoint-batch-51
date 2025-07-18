import ProfilePage from '@/app/profile/page';
import { render } from '@testing-library/react';

jest.mock('@/lib/supabase/server', () => ({
  createClient: jest.fn().mockImplementation(() => ({
    auth: {
      getUser: jest.fn().mockImplementation(() => ({
        data: {
          user: {
            email: 'test@test.com',
          },
        },
      })),
    },
  })),
}));

describe('Profile Page', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render', async () => {
    const Profile = await ProfilePage();
    const { getByText } = render(Profile);
    expect(getByText('Email')).toBeInTheDocument();
  });
});
