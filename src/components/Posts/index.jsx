import { PostCard } from "../PostCard";
import './styles.css';

export const Posts = ({ posts }) => (
    <div className='posts'>
        
          {posts.map(post => (
            
            // Passando as propriedades dos posts retornados da API para o componente
            <PostCard
              key={post.id}
              title={post.title}
              cover={post.cover}
              id={post.id}
              body={post.body}
            />

          ))}

        </div>
);