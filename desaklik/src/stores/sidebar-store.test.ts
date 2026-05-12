import { describe, it, expect, beforeEach } from 'vitest';
import { useSidebarStore } from './sidebar-store';

describe('useSidebarStore', () => {
  beforeEach(() => {
    // Reset the store state before each test
    useSidebarStore.setState({ expanded: true });
    // Also clear localStorage since we use persist middleware
    window.localStorage.clear();
  });

  it('should have initial state expanded: true', () => {
    const { expanded } = useSidebarStore.getState();
    expect(expanded).toBe(true);
  });

  it('should toggle expanded state from true to false', () => {
    const store = useSidebarStore.getState();
    store.toggle();

    expect(useSidebarStore.getState().expanded).toBe(false);
  });

  it('should toggle expanded state from false to true', () => {
    useSidebarStore.setState({ expanded: false });

    const store = useSidebarStore.getState();
    store.toggle();

    expect(useSidebarStore.getState().expanded).toBe(true);
  });

  it('should set expanded state to specific value', () => {
    const store = useSidebarStore.getState();

    store.setExpanded(false);
    expect(useSidebarStore.getState().expanded).toBe(false);

    store.setExpanded(true);
    expect(useSidebarStore.getState().expanded).toBe(true);
  });
});
