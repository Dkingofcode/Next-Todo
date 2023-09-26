import React from 'react';
 import { render, screen, fireEvent } from '@testing-library/react';
 import Home from '../app/page';  // Import your component


 test('renders TODO app correctly', () => {
    render(<Home />);
    const linkElement = screen.getByText(/TODO/i);
    expect(linkElement).toBeInTheDocument();
 });



