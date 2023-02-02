import "./App.css";
import React, { useEffect } from "react";
import Post from "./Components/Post";
function App() {
  const [post, setPost] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [maxpage, setmaxPage] = React.useState(1);
  var showitem = 10,
    totalpost = [];

  useEffect(() => {
    handle();
  }, [page]);

  function handle() {
    fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${showitem}&_page=${page}`
    )
      // _limit=${showitem}
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data)
        setPost(data);
        totalpost = data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  fetch(`https://jsonplaceholder.typicode.com/posts`)
    // _limit=${showitem}
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      totalpost = data;
      setmaxPage(Math.ceil(totalpost.length / showitem));
      // console.log(maxpage);
    });

  function handleChange(val) {
    setPage(page + val);
  }
  console.log(post);
  return (
    <div className="App" data-testid="app">
      <h1 style={{ color: "black" }}>Fetching Post's Data from random API </h1>
      <hr />
      <div id="post-container">
        {post
          ? post.map((elm) => {
              return (
                <Post
                  key={elm.id}
                  id={elm.id}
                  title={elm.title}
                  body={elm.body}
                />
              );
            })
          : ""}
      </div>
      <div>
        <button
          disabled={page === 1}
          onClick={() => {
            handleChange(-1);
          }}
        >
          Previous
        </button>
        <button>{page}</button>
        <button
          disabled={page === maxpage}
          onClick={() => {
            handleChange(1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
