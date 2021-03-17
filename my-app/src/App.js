import React,{useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const[posts,setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://hn.algolia.com/api/v1/search_by_date?tags=story&page=0')
    .then(res => {
      console.log(res);
      setPosts(res.data)
    })
    .catch(err => {
      console.log(err);
    },[])
  })
  return (
    <div >
      {posts.hits[0].created_at}
      {posts.hits[0].title}
      {posts.hits[0].author}
      {posts.hits[0].url.url}
       
    </div>
  );
}

export default App;
