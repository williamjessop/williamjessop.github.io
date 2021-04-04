import { render, screen } from '@testing-library/react';
import Projects from '../Projects';

test('Title banner display', () => {
    render(<Projects/>);
    const title = screen.getByText(/projects page/i);
    
    expect(title).toBeInTheDocument();
});


