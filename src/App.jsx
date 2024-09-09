import { useEffect, useState } from "react";
import useFetch from "./hooks/useCounter";

function App() {
  const posts = useFetch("https://jsonplaceholder.typicode.com/posts");
  const users = useFetch("https://jsonplaceholder.typicode.com/users");
  const comments = useFetch("https://jsonplaceholder.typicode.com/comments");
  // console.log(data);
  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <div>
        <h1>Users</h1>
        <hr />
        <ul>
          {users.loading && <p>loading...</p>}
          {users.error && <p>{users.error}</p>}
          {users.data?.map((user) => {
            return (
              <li key={users.id}>
                {user.name} - {user.email}
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h1>Posts</h1>
        <hr />
        <ul>
          {posts.loading && <p>loading...</p>}
          {posts.error && <p>{posts.error}</p>}
          {posts.data?.map((post) => {
            return <li key={post.id}>{post.title}</li>;
          })}
        </ul>
      </div>
      <div>
        <h1>Comments</h1>
        <hr />
        <ul>
          {comments.loading && <p>loading...</p>}
          {comments.error && <p>{comments.error}</p>}
          {comments.data?.map((comment) => {
            return <li key={comment.id}>{comment.body}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
