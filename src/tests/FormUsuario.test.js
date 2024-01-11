import { render, screen } from "@testing-library/react";
import FormUsuario from "../components/FormUsuario";
import userEvent from "@testing-library/user-event";

describe('FormUsuario componente', () => {
    let button
    let form
    let textfield
    let h2

    beforeEach(() => {
        render(<FormUsuario />);

        form = screen.getByRole('input');
        textfield = screen.getByLabelText('Nombre');
        button = screen.getByRole('button',{name:'Submit'});
        h2 = screen.getByRole('heading', {level: 2});
        });

        //Se renderiza el boton
        test ('Comprobar que se renderiza botón', () => {
            
            expect(button).toBeInTheDocument();        
        });

        //Se renderiza el formulario
        test ('Comprobar que se renderiza el campo de texto', () => {

            expect(textfield).toBeInTheDocument(); 
        });

        //Se renderiza el h2
        test ('Comprobar que se renderiza el h2', () => {

             expect(h2).toBeInTheDocument();
        });

        //Usuario pulsa el botón y se borra el campo de texto
        test ('Usuario pulsa el botón y se borra el campo de texto', async () => {
            const user = userEvent.setup()
            await user.type(textfield, 'Abimael');
            await user.click(button);
            expect(textfield).toHaveValue('');
        });
    });