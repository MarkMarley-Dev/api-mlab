import React from 'react';
import { useGetPosts } from './lib/api-hooks';

import { FetchState } from './types';
import './app.css';

function App() {
  const [posts, fetchState, getPosts] = useGetPosts();

  return (
    <div className="app">
      <h1 className="posts-title">
        Welcome to Mlabs Tech Challange.. Brought to you by Mark Marley
      </h1>
      {fetchState === FetchState.DEFAULT && (
        <>
          <p className="posts-text">Please click to load the blog posts</p>
          <button className="posts-button" onClick={getPosts}>
            {' '}
            Load Posts
          </button>
        </>
      )}{' '}
      {fetchState === FetchState.LOADING && <p>Fetching posts...</p>}
      {fetchState === FetchState.ERROR && (
        <>
          <p className="posts-text">Something went wrong please try again!</p>
        </>
      )}
      {fetchState === FetchState.SUCCESS && (
        <>
          <p className="posts-text">Blog Posts: </p>

          <ul className="posts-list">
            {posts.map((post) => (
              <li key={post.id} className="post">
                <img
                  className="post-img"
                  src="https://picsum.photos/200"
                  alt="Profile Picture"
                />
                <h3 className="posts-title">
                  {post.id} - {post.title}
                </h3>
                <p className="posts-text">{post.body}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default App;

//  {
//    fetchState === FetchState.SUCCESS && (
//      <>
//        <p className="posts-text">Heres the list: </p>
//        <ul className="posts-list">
//          {posts.map((post) => (
//            <li key={post.id} className="post">
//              <h3 className="posts-title">
//                {post.id} - {post.title}
//              </h3>
//              <p className="posts-text">{post.body}</p>
//            </li>
//          ))}
//        </ul>
//      </>
//    );
//  }
