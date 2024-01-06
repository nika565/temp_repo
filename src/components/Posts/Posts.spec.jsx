const { render, screen } = require("@testing-library/react");
import { Posts } from  './index'

const props = {
    posts: [
        {
            id: 1,
            title: 'title 1',
            body: 'body 1',
            cover: 'img/img1.png'
        },

        {
            id: 2,
            title: 'title 2',
            body: 'body 2',
            cover: 'img/img2.png'
        },

        {
            id: 3,
            title: 'title 3',
            body: 'body 3',
            cover: 'img/img3.png'
        },
    ]
}

describe('<Posts />', () => {

    it('should render posts', () => {

        // renderizando a o componente e passando dados mockados
        render(<Posts {...props}/>);

        // Selecionando os titulos do meu componente
        expect(screen.getAllByRole('heading', { name: /title/i })).toHaveLength(3);

        // Selecionando as imagens do meu componente
        expect(screen.getAllByRole('img', { name: /title/i })).toHaveLength(3);
       
        // Selecionando os parágrafos do meu componente
        expect(screen.getAllByText(/body/i)).toHaveLength(3);

        // Pegando uma imagem específica e verificando o seu atributo
        expect(screen.getByRole('img', { name: 'title 3' })).toHaveAttribute('src', 'img/img3.png');

    });

    it('should not render posts', () => {

        render(<Posts/>);

        expect(screen.queryByRole('heading', { name: /title/i })).not.toBeInTheDocument();

    })

    it('should match snapshot', () => {

        const { container } = render(<Posts {...props}/>);

        expect(container.firstChild).toMatchSnapshot();

    })

});