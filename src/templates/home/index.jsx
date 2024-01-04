import { Component, useState } from 'react'
import './styles.css'
import { loadPosts } from '../../utils/loadPosts'
import { Posts } from '../../components/Posts/index'
import { Button } from '../../components/Button'
import { TextInput } from '../../components/TextInput'

class Home extends Component {

  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 2,
    searchValue: ''
  }


  // Método executado quando meu componente é montado
  async componentDidMount() {

    const { page, postsPerPage } = this.state;

    const postsAndPhotos = await loadPosts()
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
    });
  }

  loadMorePosts = () => {
    const {
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state

    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    this.setState({ posts, page: nextPage });
  }

  handleChange = (event) => {
    const { value } = event.target;

    this.setState({ searchValue: value });
  }


  render() {

    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;

    const noMorePosts = page + postsPerPage >= allPosts.length;

    const filteredPosts = !!searchValue ? allPosts.filter(post => {
      return post.title.toLowerCase().includes(searchValue.toLowerCase());
    })

      : posts;

    return (

      <section className='container'>

        <div className='search-container'>
          
          {searchValue && (
            <h1>Search Value: {searchValue}</h1>
          )}

          <TextInput searchValue={searchValue} handleChange={this.handleChange} />

        </div>

        {filteredPosts.length > 0 && (
          <Posts posts={filteredPosts} />
        )}

        {filteredPosts.length === 0 && (
          <p>Não existem posts</p>
        )}

        <div className="button-container">
          {!searchValue && (
            <Button text="Load more posts" onClick={this.loadMorePosts} disabled={noMorePosts} />
          )}

        </div>

      </section>

    )
  }
}

// function Home() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/Home.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

export default Home