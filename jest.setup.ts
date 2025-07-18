import '@testing-library/jest-dom';

// If you need to add more setup options before each test,
// you can add them here
jest.mock('next/headers', () => ({
  cookies: jest.fn().mockImplementation(() => ({
    getAll: jest.fn(),
    set: jest.fn(),
  })),
}));

jest.mock('next/navigation', () => ({
  redirect: jest.fn(),
}));
