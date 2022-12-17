import { Login } from '../components/Login';
import { render, screen } from '@testing-library/react';

// hacemos test de Login
// comprobamos que existe la pagina
describe('Login', () => {
    test('should render the Email', () => {
        const { getByLabelText } = render(<Login />);
        const childElement = getByLabelText("Email");
        expect(childElement).toBeTruthy();
    });
    test('should render the Password', () => {
        const { getByLabelText } = render(<Login />);
        const childElement = getByLabelText("Password");
        expect(childElement).toBeTruthy();
    });
});