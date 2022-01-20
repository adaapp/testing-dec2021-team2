import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// add tests here
describe('Should render all Form items correctly on page', () => {
    it('should...', () => {
        render(<App/>);

        expect(screen.getByTestId('r')).toBeInTheDocument();
        expect(screen.getByTestId('g')).toBeInTheDocument();
        expect(screen.getByTestId('b')).toBeInTheDocument();

        expect(screen.getByTestId('hex')).toBeInTheDocument();
        expect(screen.getByTestId('preview')).toBeInTheDocument();
    });
});