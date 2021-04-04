import { render, screen } from '@testing-library/react';
import Game from '../Game';

test('Title shows', () => {
    render(<Game/>);
    const title = screen.getByText('Welcome to Hangman!');
    expect(title).toBeInTheDocument();
});

test('Check button shows', () => {
    render(<Game/>);
    const checkButton = screen.getByText('Check!');
    expect(checkButton).toBeEnabled();
});

test('Reset button shows', () => {
    render(<Game/>);
    const resetButton = screen.getByText('Reset');
    expect(resetButton).toBeEnabled();
});

test('Guess box shows', () => {
    render(<Game/>);
    const rulesDropdown = screen.getByPlaceholderText('Put Your Guess Here');
    expect(rulesDropdown).toBeInTheDocument();
});
