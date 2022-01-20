import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// add tests here
describe('Should render all Form items correctly on page', () => {
    it('should check for value entered', () => {
        render(<App/>);

        expect(screen.getByTestId('r')).toBeInTheDocument();
        expect(screen.getByTestId('g')).toBeInTheDocument();
        expect(screen.getByTestId('b')).toBeInTheDocument();

        expect(screen.getByTestId('hex')).toBeInTheDocument();
        expect(screen.getByTestId('preview')).toBeInTheDocument();

        expect(screen.getByTestId('rInput')).toBeInTheDocument();
        expect(screen.getByTestId('gInput')).toBeInTheDocument();
        expect(screen.getByTestId('bInput')).toBeInTheDocument();

        fireEvent.change(screen.getByTestId('rInput'), {target: {value: '24'}})
    });
});
