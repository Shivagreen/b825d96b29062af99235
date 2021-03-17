import React,{useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const[posts,setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");

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
  return (
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
  );
}

export default App;
