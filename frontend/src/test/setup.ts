import '@testing-library/jest-dom';
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

// Runs a cleanup after each test case
afterEach(() => {
  cleanup();
}); 