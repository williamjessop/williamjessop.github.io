import { render, screen } from '@testing-library/react';
import HomeRow from '../HomeRow';

test('HomeRow renders title correctly', () => {
    render(<HomeRow
        title="Test Title"
    />);
    const title = screen.getByText(/test title/i);
    
    expect(title).toBeInTheDocument();
});

test('HomeRow renders card title correctly', () => {
    render(<HomeRow
        cardTitle="Test Title"
    />);
    const title = screen.getByText(/test title/i);
    
    expect(title).toHaveClass("card-header");
});

test('HomeRow renders card body correctly', () => {
    render(<HomeRow
        cardBody="Test Title"
    />);
    const body = screen.getByText(/test title/i);
    
    expect(body).toHaveClass("card-body");
});

test('HomeRow renders card Link correctly', () => {
    render(<HomeRow
        cardLink="https://www.coloradomesa.edu/computer-science/index.html"
        cardLinkText="cmu"
    />);
    const body = screen.getByText(/cmu/i);
    
    expect(body).toHaveClass("card-link");
});
