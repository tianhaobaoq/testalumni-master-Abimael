import { render, screen } from "@testing-library/react";
import TextBox2 from "../components/TextBox2";
import userEvent from "@testing-library/user-event";

describe('TextBox componente', () => {
    let box;
    let button;
    beforeEach(() => {
    render(<TextBox2 />);
    box = screen.getByRole('caja', {name: 'es una caja'});
    button = screen.getByRole('button');
    });

    //Caja en el documento
    test('La caja está en el documento', () => {
        expect(box).toBeInTheDocument();
    });

    //El texto tiene un color inicial rosa
    test('El texto tiene un color inicial', () => {
        expect(box).toHaveStyle({
            color: 'pink'
        });
    });

    //Al pulsar el botón se cambia el color del texto
    test('Al pulsar el botón se cambia el color del texto', async () => {
        const user = userEvent.setup()
        await user.click(button);
        expect(box).toHaveStyle({
            color:'black'
        });
    });
});