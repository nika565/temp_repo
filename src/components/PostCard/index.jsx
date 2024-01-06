/*
    Meu componente PostCard recebendo os valores das propriedades que 
    vieram do seu componente pai

    Pegando as propriedades via desestruturação
*/
import './styles.css'
export const PostCard = ({ title, cover, body, id }) => (

    <div className='post'>
        <img src={cover} alt={title} />
        <div className='post-content'>
            <h2> {id}- {title}</h2>
            <p>{body}</p>
            <p>Oi</p>
        </div>
    </div>
);