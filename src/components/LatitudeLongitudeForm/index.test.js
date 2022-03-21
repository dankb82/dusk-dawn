import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LatitudeLongitudeForm from './';

test('render form for latitude and longitude', () => {
  render(<LatitudeLongitudeForm />);
  expect(screen.getByTestId('lat-long-form')).toBeInTheDocument();
  expect(screen.getByTestId('latitude-input-field')).toBeInTheDocument();
  expect(screen.getByTestId('longitude-input-field')).toBeInTheDocument();
  expect(screen.getByTestId('longitude-input-field')).toBeInTheDocument();
  expect(screen.getByTestId('lat-long-submit-button')).toBeInTheDocument();
});

test('submit button is disabled', () => {
  render(<LatitudeLongitudeForm />);
  expect(screen.getByText('Add Location')).toBeInTheDocument();
  expect(screen.getByText('Add Location')).toBeDisabled();
});
