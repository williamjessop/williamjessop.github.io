import { render, screen } from '@testing-library/react';
import Home from '../Home';

test('Title banner displays', () => {
    render(<Home/>);
    const title = screen.getByText(/my homepage/i);
    
    expect(title).toBeInTheDocument();
});


