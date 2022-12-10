import { Register } from '../components/register';
import { render, screen } from '@testing-library/react';

import sum from './sum.js';

it('sums numbers', () => {
  expect(sum(1, 2)).toEqual(3);
  expect(sum(2, 2)).toEqual(4);
});

// hacemos test de Register
// comprobamos que existe la pagina
describe('Register', () => {
    test('should render the Name', () => {
        const { getByLabelText } = render(<Register />);
        const childElement = getByLabelText("Name");
        expect(childElement).toBeTruthy();
    });
    // hacemos teste para todos los campos
    test('should render the Email', () => {
        const { getByLabelText } = render(<Register />);
        const childElement = getByLabelText("Email");
        expect(childElement).toBeTruthy();
    });
    test('should render the Phone', () => {
        const { getByLabelText } = render(<Register />);
        const childElement = getByLabelText("Phone");
        expect(childElement).toBeTruthy();
    });
    test('should render the Password', () => {
        const { getByLabelText } = render(<Register />);
        const childElement = getByLabelText("Password");
        expect(childElement).toBeTruthy();
    });
    test('should render the Retype Password', () => {
        const { getByLabelText } = render(<Register />);
        const childElement = getByLabelText("Retype password");
        expect(childElement).toBeTruthy();
    });
});