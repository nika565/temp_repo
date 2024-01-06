import { render, screen } from "@testing-library/react";
import { TextInput } from "./index";
import userEvent from "@testing-library/user-event";

describe('<TextInput />', () => {

    it('should have a value of searchValue', () => {

        const fn = jest.fn();

        render(<TextInput handleChange={fn} searchValue={'Testando'} />)

        const input = screen.getByPlaceholderText(/type your search/i);

        expect(input).toBeInTheDocument();

        expect(input.value).toBe('Testando');

    });

    it('should call handleChange function on each key pressed', async () => {

        const fn = jest.fn();

        render(<TextInput handleChange={fn} />)

        const input = screen.getByPlaceholderText(/type your search/i);
        
        const value = "o valor";
        
        await userEvent.type(input, value);

        expect(input.value).toBe(value);

        expect(fn).toHaveBeenCalledTimes(value.length);

    });

    it ('should match snapshot', () => {

        const fn = jest.fn();
        const { container } = render(<TextInput handleChange={fn} searchValue="Teste" />);

        expect(container.firstChild).toMatchSnapshot();

    });

});
