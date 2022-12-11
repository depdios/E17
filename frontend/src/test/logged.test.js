//import { Logeado } from '../components/logeado';
import { Logeado } from '/home/usuario/E17/frontend/src/components/Logeado.jsx';
import { render, screen } from '@testing-library/react';

// hacemos test de Logeado
// comprobamos que existe la pagina
describe('Logeado', () => {

    test('should render the Name', () => {
        const view = render(<Logeado />);
        view.getByText("Has iniciado sesión correctamente");
    });

});