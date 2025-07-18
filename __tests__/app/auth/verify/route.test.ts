/**
 * @jest-environment node
 */

import { GET } from '@/app/auth/verify/route';
import { redirect } from 'next/navigation';
import { NextRequest } from 'next/server';

describe('Auth/Verify Route', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should redirect to error page', async () => {
    const requestObj = {
      url: 'http://localhost:3000/auth/verify?token_hash=dG9rZW5faGFzaAo=&type=email',
      nextUrl: {
        searchParams: new URLSearchParams({ token_hash: 'dG9rZW5faGFzaAo=', type: 'email' }),
      },
    };
    await GET(requestObj as NextRequest);

    // expect to redirect to error page
    expect(redirect).toHaveBeenCalledWith('/error');
  });
});
