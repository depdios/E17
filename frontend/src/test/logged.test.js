import { Logeado } from '../components/logeado';
import { render, screen } from '@testing-library/react';

// hacemos test de Logeado
// comprobamos que existe la pagina
describe('Logeado', () => {
    test('should render the Name', () => {
        const { getByLabelText } = render(<Logeado />);
        const childElement = getByLabelText("Has iniciado sesión correctamente");
        expect(childElement).toBeTruthy();
    });
});