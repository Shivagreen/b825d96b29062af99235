import React from 'react';

const Posts = ({posts}) => {
    return (
        <ul>
            {posts.map(post => (
                <li key={post.objectID}>
                    {post.hits[0].title}
              {post.hits[0].author}
              {post.hits[0].created_at}
              {post.hits[0].url}
                </li>
            ))}
        </ul>
    )
}
export default Posts;