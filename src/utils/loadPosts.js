export const loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');

    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos')

    const [posts, photos] = await Promise.all([postsResponse, photosResponse])

    const postsJson = await posts.json();
    const pothosJson = await photos.json();

    /*
      Juntando os dados de photos e posts, como exitem muito mais photos do que posts,
      colocamos dentro de um map para pegar a url de cada photo baseado no index de cada post.
    */
    const postsAndPhotos = postsJson.map((post, index) => {
      return { ...post, cover: pothosJson[index].url }
    });

    return postsAndPhotos
}