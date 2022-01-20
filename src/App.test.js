import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// add tests here
describe('Should render all Form items correctly on the page', () => {
    it('should display the labels for the r, g and b values', () => {
        render(<App/>);

        expect(screen.getByTestId('r')).toBeInTheDocument();
        expect(screen.getByTestId('g')).toBeInTheDocument();
        expect(screen.getByTestId('b')).toBeInTheDocument();
    });

    it('should render input boxes for the r, g and b values', () => {
        render(<App/>);

        expect(screen.getByTestId('rInput')).toBeInTheDocument();
        expect(screen.getByTestId('gInput')).toBeInTheDocument();
        expect(screen.getByTestId('bInput')).toBeInTheDocument();
    });

    it('should display the hex value and colour preview elements', () => {
        render(<App/>);

        expect(screen.getByTestId('hex')).toBeInTheDocument();
        expect(screen.getByTestId('preview')).toBeInTheDocument();    
    });
});

describe('Test the colour preview elements', () => {
    it('should display the correctly converted rgb to hex value as a colour', () => {
        render(<App/>);

        expect(screen.getByTestId('preview')).toHaveStyle({backgroundColor: '#000000'});

        fireEvent.change(screen.getByTestId('rInput'), {target: {value: '255'}});
        expect(screen.getByTestId('preview')).toHaveStyle({backgroundColor: '#ff0000'});

        fireEvent.change(screen.getByTestId('rInput'), {target: {value: '0'}});
        fireEvent.change(screen.getByTestId('gInput'), {target: {value: '255'}});

        expect(screen.getByTestId('preview')).toHaveStyle({backgroundColor: '#00ff00'});

        fireEvent.change(screen.getByTestId('rInput'), {target: {value: '0'}});
        fireEvent.change(screen.getByTestId('gInput'), {target: {value: '0'}});
        fireEvent.change(screen.getByTestId('bInput'), {target: {value: '255'}});

        expect(screen.getByTestId('preview')).toHaveStyle({backgroundColor: '#0000ff'});

        fireEvent.change(screen.getByTestId('gInput'), {target: {value: '255'}});
        fireEvent.change(screen.getByTestId('bInput'), {target: {value: '255'}});

        expect(screen.getByTestId('preview')).toHaveStyle({backgroundColor: '#00ffff'});

        fireEvent.change(screen.getByTestId('rInput'), {target: {value: '51'}});
        fireEvent.change(screen.getByTestId('gInput'), {target: {value: '8'}});
        fireEvent.change(screen.getByTestId('bInput'), {target: {value: '190'}});

        expect(screen.getByTestId('preview')).toHaveStyle({backgroundColor: '#3308be'});
    });

    it('should default to 255 if an r, g or b value entered is higher than 255', () => {
        render(<App/>);

        expect(screen.getByTestId('preview')).toHaveStyle({backgroundColor: '#000000'});

        fireEvent.change(screen.getByTestId('rInput'), {target: {value: '1000'}});
        expect(screen.getByTestId('preview')).toHaveStyle({backgroundColor: '#ff0000'});

        fireEvent.change(screen.getByTestId('gInput'), {target: {value: '256'}});
        expect(screen.getByTestId('preview')).toHaveStyle({backgroundColor: '#ffff00'});

        fireEvent.change(screen.getByTestId('bInput'), {target: {value: '490'}});
        expect(screen.getByTestId('preview')).toHaveStyle({backgroundColor: '#ffffff'});
    });
});

describe('Test the functionality of the RGB conversion', () => {

    it('should display the r value entered by the user if it is between 0 and 255', () => {
        render(<App/>);

        expect(screen.getByTestId('rInput').value).toBe('0');
        fireEvent.change(screen.getByTestId('rInput'), {target: {value: '24'}});
        expect(screen.getByTestId('rInput').value).toBe('24');

        fireEvent.change(screen.getByTestId('rInput'), {target: {value: '1'}});
        expect(screen.getByTestId('rInput').value).toBe('1');

        fireEvent.change(screen.getByTestId('rInput'), {target: {value: '255'}});
        expect(screen.getByTestId('rInput').value).toBe('255');

        fireEvent.change(screen.getByTestId('rInput'), {target: {value: '230'}});
        expect(screen.getByTestId('rInput').value).toBe('230');

        fireEvent.change(screen.getByTestId('rInput'), {target: {value: '0'}});
        expect(screen.getByTestId('rInput').value).toBe('0');
    });

    it('should display the g value entered by the user if it is between 0 and 255', () => {
        render(<App/>);

        expect(screen.getByTestId('gInput').value).toBe('0');
        fireEvent.change(screen.getByTestId('gInput'), {target: {value: '190'}});
        expect(screen.getByTestId('gInput').value).toBe('190');

        fireEvent.change(screen.getByTestId('gInput'), {target: {value: '1'}});
        expect(screen.getByTestId('gInput').value).toBe('1');

        fireEvent.change(screen.getByTestId('gInput'), {target: {value: '255'}});
        expect(screen.getByTestId('gInput').value).toBe('255');

        fireEvent.change(screen.getByTestId('gInput'), {target: {value: '64'}});
        expect(screen.getByTestId('gInput').value).toBe('64');

        fireEvent.change(screen.getByTestId('gInput'), {target: {value: '0'}});
        expect(screen.getByTestId('gInput').value).toBe('0');
    });

    it('should display the b value entered by the user if it is between 0 and 255', () => {
        render(<App/>);

        expect(screen.getByTestId('bInput').value).toBe('0');
        fireEvent.change(screen.getByTestId('bInput'), {target: {value: '25'}});
        expect(screen.getByTestId('bInput').value).toBe('25');

        fireEvent.change(screen.getByTestId('bInput'), {target: {value: '1'}});
        expect(screen.getByTestId('bInput').value).toBe('1');

        fireEvent.change(screen.getByTestId('bInput'), {target: {value: '81'}});
        expect(screen.getByTestId('bInput').value).toBe('81');

        fireEvent.change(screen.getByTestId('bInput'), {target: {value: '0'}});
        expect(screen.getByTestId('bInput').value).toBe('0');

        fireEvent.change(screen.getByTestId('bInput'), {target: {value: '255'}});
        expect(screen.getByTestId('bInput').value).toBe('255');
    });

    it('should change input value to 255 if the user enters an r value greater than 255', () => {
        render(<App/>);

        expect(screen.getByTestId('rInput').value).toBe('0');

        fireEvent.change(screen.getByTestId('rInput'), {target: {value: '256'}});
        expect(screen.getByTestId('rInput').value).toBe('255');

        fireEvent.change(screen.getByTestId('rInput'), {target: {value: '255.1'}});
        expect(screen.getByTestId('rInput').value).toBe('255');
    });

    it('should change input value to 255 if the user enters an r value lower than 0', () => {
        render(<App/>);

        expect(screen.getByTestId('rInput').value).toBe('0');

        fireEvent.change(screen.getByTestId('rInput'), {target: {value: '-1'}});
        expect(screen.getByTestId('rInput').value).toBe('255');

        fireEvent.change(screen.getByTestId('rInput'), {target: {value: '-100'}});
        expect(screen.getByTestId('rInput').value).toBe('255');
    });

    it('should remove any extra symbols or letters from the g value input', () => {
        render(<App/>);

        expect(screen.getByTestId('gInput').value).toBe('0');

        fireEvent.change(screen.getByTestId('gInput'), {target: {value: '91a'}});
        expect(screen.getByTestId('gInput').value).toBe('91');

        fireEvent.change(screen.getByTestId('gInput'), {target: {value: '255--'}});
        expect(screen.getByTestId('gInput').value).toBe('255');
    });
});
