import * as React from 'react';
import { render, screen } from '@testing-library/react';
import SunriseSunsetDataView from './';

test('renders base data component with less than 5 list items', () => {
  const props = [
    {
      latitude: '35.994034',
      longitude: '78.898621',
      sunrise: '06:45',
      sunset: '18:57',
    },
  ];
  render(<SunriseSunsetDataView timeData={props} />);
  expect(screen.getByTestId('data-container-header')).toBeInTheDocument();
  expect(screen.getByTestId('data-container-image')).toBeInTheDocument();
  expect(screen.queryByTestId('results-container')).not.toBeInTheDocument();
});

test('render result list with 5 list items', async () => {
  const props = [
    {
      latitude: '35.994034',
      longitude: '78.898621',
      sunrise: '06:45',
      sunset: '18:57',
    },
    {
      latitude: '36.043547',
      longitude: '-78.898621',
      sunrise: '07:17',
      sunset: '19:28',
    },
    {
      latitude: '36.043547',
      longitude: '78.898621',
      sunrise: '06:45',
      sunset: '18:57',
    },
    {
      latitude: '35.994034',
      longitude: '78.898621',
      sunrise: '06:45',
      sunset: '18:57',
    },
    {
      latitude: '35.994034',
      longitude: '78.898621',
      sunrise: '06:45',
      sunset: '18:57',
    },
  ];
  render(<SunriseSunsetDataView timeData={props} />);
  expect(screen.getByTestId('results-container')).toBeInTheDocument();
  expect(screen.getByTestId('results-list')).toBeInTheDocument();
  expect(screen.getAllByTestId('result-item')).toHaveLength(5);
});
