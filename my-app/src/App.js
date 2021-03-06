import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Posts from './components/Posts';
import Pagination from './components/Pagination'
import './App.css';

function App() {

  const[posts,setPosts] = useState([]);
 const [currentPage, setCurrentPage] = useState(1);
 const [postsPerPage] = useState(10);

  // const item = () => {
  //   posts.push(newPost);
  //   setPosts([...posts]);
    
  // }

  useEffect(() => {
    axios.get('https://hn.algolia.com/api/v1/search_by_date?tags=story&page=0')
    .then(res => {
      console.log(res.data.hits[0].title)
      console.log(res.data.hits[0].author)
      console.log(res.data.hits[0].url)
      console.log(res.data.hits[0].created_at)
      setPosts(res.data)
    })
    .catch(err => {
      console.log(err);
    },[])
  })

const indexofLastPost = currentPage * postsPerPage;
const indexofFirstPost = indexofLastPost - postsPerPage;
const currentPosts = posts.slice(indexofFirstPost,indexofLastPost);

const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
    <div >
      {/* {posts.hits[0].created_at}
      {posts.hits[0].title}
      {posts.hits[0].author}
      {posts.hits[0].url.url}
        */}
        <ul>
          {posts.map(post => {
            return (
            <li key={post.objectID}>
              {post.hits[0].title}
              {post.hits[0].author}
              {post.hits[0].created_at}
              {post.hits[0].url}
            </li>

            )
          })}
        </ul>
    </div>
    <div>
      <Posts posts ={currentPosts} />
      <Pagination 
      postsPerPage ={postsPerPage} 
      totalPosts ={posts.length}
      paginate = {paginate}
      />

    </div>
    </div>
  );
}

export default App;
