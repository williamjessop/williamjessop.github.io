import { render, screen } from '@testing-library/react';
import Header from '../Header';

test('Header renders title correctly', () => {
    render(<Header
            title="Test Title"
            description="Test Description"
    />);
    const title = screen.getByText(/test title/i);
    
    expect(title).toBeInTheDocument();
});

test('Header renders description correctly', () => {
    render(<Header
            title="Test Title"
            description="Test Description"
    />);
    const description = screen.getByText(/test description/i);
    
    expect(description).toBeInTheDocument();
});
