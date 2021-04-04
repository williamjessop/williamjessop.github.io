import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Rules from '../Rules';

test('Closed rules dropdown works', () => {
    render(<Rules/>);
    const rulesDropdown = screen.getByText('Rules');
    expect(rulesDropdown).toBeInTheDocument();
});

test('Rules dropdown will open', async () => {
    render(<Rules/>);
    const rulesDropdown = screen.getByText('Rules');

    fireEvent.click(rulesDropdown);

    await waitFor(() => {
        expect(screen.getByText(/to play/i).parentElement).toHaveClass("show");
    }) 
});
