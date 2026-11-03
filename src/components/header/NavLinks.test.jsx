import {test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import './../../plugins/i18n';
import NavLinks from './NavLinks';

test('renders all five navigation links', () => {
  render(<MemoryRouter><NavLinks /></MemoryRouter>);
  expect(screen.getAllByRole('link')).toHaveLength(5);
  expect(screen.getByRole('link', { name: /inicio/i })).toHaveAttribute('href', '/');
});
