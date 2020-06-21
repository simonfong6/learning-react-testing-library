// __tests__/fetch.test.js
import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Toggle from '../components/Toggle';

test('toggle is on by default', async () => {
  render(<Toggle />)

  // fireEvent.click(screen.getByText('Load Greeting'))

  // await waitFor(() => screen.getByRole('heading'))

  expect(screen.getByRole('button')).toHaveTextContent('On')
  // expect(screen.getByRole('button')).toHaveAttribute('disabled')
});

test('toggle is off after click', async () => {
  render(<Toggle />)

  fireEvent.click(screen.getByText('On'));

  expect(screen.getByRole('button')).toHaveTextContent('Off')
  // expect(screen.getByRole('button')).toHaveAttribute('disabled')
});