import DashboardPage from '@/app/dashboard/page';
import { render } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import SupabaseProvider from '@/lib/supabase/SupabaseProvider';
import messages from '../../../messages/en.json';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

jest.mock('@/actions/auth', () => ({
  logoutAction: jest.fn(),
}));

jest.mock('@/actions/locale', () => ({
  getUserLocale: jest.fn().mockImplementation(() => 'en'),
}));

jest.mock('@/actions/theme', () => ({
  getTheme: jest.fn().mockImplementation(() => 'light'),
}));

jest.mock('@/lib/supabase/server', () => ({
  createClient: jest.fn().mockImplementation(() => ({
    auth: {
      getUser: jest.fn().mockImplementation(() => ({
        data: {
          user: {
            id: 1,
          },
        },
      })),
    },
  })),
}));

describe('Dashboard Page', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render', async () => {
    const Dashboard = await DashboardPage();
    const { getByText } = render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <SupabaseProvider
          supabaseUrl={supabaseUrl}
          supabaseKey={supabaseKey}
        >

          {Dashboard}
        </SupabaseProvider>
      </NextIntlClientProvider>
    );
    expect(getByText('Dashboard')).toBeInTheDocument();
  });
});
