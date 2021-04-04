import { render, screen } from '@testing-library/react';
import Navigation from '../Navigation';

test('Brand renders correctly', () => {
    render(<Navigation/>);
    const brand = screen.getByText(/will j/i);
    expect(brand).toHaveClass("navbar-brand");
});

test('About link renders correctly', () => {
    render(<Navigation/>);
    const link = screen.getByText(/about/i);
    expect(link).toHaveClass("nav-link");
});

test('Projects link renders correctly', () => {
    render(<Navigation/>);
    const link = screen.getByText(/projects/i);
    expect(link).toHaveClass("nav-link");
});
