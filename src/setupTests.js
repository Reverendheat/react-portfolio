import '@testing-library/jest-dom/vitest';

// jsdom has no IntersectionObserver; timeline component uses it in tests.
globalThis.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  takeRecords() {
    return [];
  }
  unobserve() {}
};
