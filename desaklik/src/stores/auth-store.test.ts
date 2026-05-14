import { describe, it, expect, beforeEach, vi } from 'vitest';
import { useAuthStore } from './auth-store';

// Mock the auth functions before they are used
vi.mock('@/lib/auth', () => ({
  mockLogin: vi.fn((email, password) => {
    if (password === 'password') {
      return {
        id: 'U001',
        name: 'Pak Lurah',
        email: email,
        role: 'admin',
        tenantId: 'T001',
      };
    }
    return null;
  }),
}));

describe('Auth Store', () => {
  beforeEach(() => {
    // Reset the store to initial state before each test
    useAuthStore.setState({ user: null, isAuthenticated: false });
  });

  it('should have initial state', () => {
    const state = useAuthStore.getState();
    expect(state.user).toBeNull();
    expect(state.isAuthenticated).toBe(false);
  });

  it('should set state on successful login', () => {
    const { login } = useAuthStore.getState();
    const success = login('lurah@desaklik.id', 'password');

    expect(success).toBe(true);

    const state = useAuthStore.getState();
    expect(state.isAuthenticated).toBe(true);
    expect(state.user).toEqual({
      id: 'U001',
      name: 'Pak Lurah',
      email: 'lurah@desaklik.id',
      role: 'admin',
      tenantId: 'T001',
    });
  });

  it('should not set state on failed login', () => {
    const { login } = useAuthStore.getState();
    const success = login('lurah@desaklik.id', 'wrong-password');

    expect(success).toBe(false);

    const state = useAuthStore.getState();
    expect(state.isAuthenticated).toBe(false);
    expect(state.user).toBeNull();
  });

  it('should reset state on logout', () => {
    // Set initial state as logged in
    useAuthStore.setState({
      user: {
        id: 'U001',
        name: 'Pak Lurah',
        email: 'lurah@desaklik.id',
        role: 'admin',
        tenantId: 'T001',
      },
      isAuthenticated: true
    });

    const { logout } = useAuthStore.getState();
    logout();

    const state = useAuthStore.getState();
    expect(state.isAuthenticated).toBe(false);
    expect(state.user).toBeNull();
  });
});
