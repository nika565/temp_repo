import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from './index';

/*
    Describe serve para agrupar uma suite de testes, nesse caso 
    estamos testando um componente <Button /> 
*/
describe('<Button />', () => {

    // Deveria renderizar um botão com o texto "Load more"
    it('should render the button with the text "Load more"', () => {

        // "Renderizando" o botão
        render(<Button text="Load more"/>);
        
        // Código que espera ocorre uma asserção (Testando o seu teste)
        expect.assertions(1);

        /*
            função getByRole é usada para selecionar um elemento na interface do usuário com 
            base no papel (role) atribuído a ele, seguindo as práticas de acessibilidade.
        */
        const button = screen.getByRole('button', { name: /load more/i });

        // Espero que esse botão esteja no documento
        expect(button).toBeInTheDocument()

    });

    // Deveria chamar uma função quando clica no botão
    it('should call function on button click', () => {

        // Craindo um mock básico com jest
        const fn = jest.fn();

        render(<Button text="load more" onClick={fn} />);

        // Selecionando o botão
        const button = screen.getByRole('button', { name: /load more/i });

        // Disparando o evento
        fireEvent.click(button);

        expect(fn).toHaveBeenCalled();

    });

    // Deveria desabilitar o botão com "disabled" for "true"
    it('should be disabled when disabled is true', () => {

        render(<Button text="Load more" disabled={true} />);

        const button = screen.getByRole('button', { name: /load more/i });

        userEvent.click(button);

        // Verificando se o botão esta desativado
        expect(button).toBeDisabled();


        /*
            Verificando se o botão está ativado
            expect(button).toBeEnabled();
        */ 

    });

});