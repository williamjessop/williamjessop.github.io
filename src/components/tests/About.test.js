import { render, screen } from '@testing-library/react';
import About from '../About';

test('Title banner displays', () => {
    render(<About/>);
    const title = screen.getByText(/want to learn about/i);
    
    expect(title).toBeInTheDocument();
});


