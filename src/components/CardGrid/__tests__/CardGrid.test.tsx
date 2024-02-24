import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest'
import CardGrid from '../CardGrid';
import CountryCard from '../CountryCard/CountryCard'; // Assuming CountryCard is also a component

// Mocked country data
const mockCountries: Country[] = [
  { name: 'France', flag: { large: 'https://flagcdn.com/fr.svg' }, capital: 'Paris', population: 65273511, region: 'Europe' },
  { name: 'Canada', flag: { large: 'https://flagcdn.com/ca.svg' }, capital: 'Ottawa', population: 37742154, region: 'North America' },
];

test('renders the "No countries found" message when no countries are provided', () => {
  render(<CardGrid countries={[]} />);
  const noCountriesMessage = screen.getByText('No countries found');
  expect(noCountriesMessage).toBeInTheDocument();
});

test('renders a CountryCard for each country in the countries prop', () => {
  render(<CardGrid countries={mockCountries} />);

  mockCountries.forEach((country) => {
    const countryCard = screen.getByText(country.name);
    expect(countryCard).toBeInTheDocument();

    // Additionally, test for other card content
    expect(screen.getByText(country.capital)).toBeInTheDocument();
    expect(screen.getByText(country.population.toString())).toBeInTheDocument();
    expect(screen.getByText(country.region)).toBeInTheDocument();
    // Assuming CountryCard renders the flag:
    expect(screen.getByAltText(country.name + ' flag')).toBeInTheDocument();
  });
});

test('renders the correct number of CountryCards based on the grid layout', () => {
  render(<CardGrid countries={mockCountries} />);

  const countryCards = screen.getAllByRole('article'); // Assuming CountryCard uses the article role
  expect(countryCards).toHaveLength(mockCountries.length);

  // Check for grid layout (adapt selectors based on your implementation)
  expect(countryCards[0]).toHaveStyle('grid-column: 1 / span 2'); // First card spans 2 columns on small screens
  expect(countryCards[1]).toHaveStyle('grid-column: 3 / span 2'); // Second card spans 2 columns on small screens
});
