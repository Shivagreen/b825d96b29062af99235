import React from 'react';

const Pagination = ({potsPerPage, totalPosts, paginate}) => {
    const pageNumbers =[];

    for(let i=0;i<=Math.ceil(totalPosts/ postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav>
        <ul>
           {pageNumbers.map(number => (
               <li key={number} >
                   <a onClick={() => paginate(number)} href='' >
                       {number}
                   </a>
               </li>
           ))}
        </ul>
        </nav>
    )
}
export default Pagination;