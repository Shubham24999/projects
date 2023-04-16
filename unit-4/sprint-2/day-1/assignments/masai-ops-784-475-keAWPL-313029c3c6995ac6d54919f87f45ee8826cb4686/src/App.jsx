import "./App.css";
import React from "react";
import Post from "./Components/Post"
function App() {
  const [post,setPost]=React.useState([]);

  function handle(){
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res)=>{
        return (res.json())
      })
      .then((data)=>{
        // console.log(data)
        setPost(data)
      })
      .catch((error)=>{
        console.log(error)
      })

  }

  console.log(post)
  return (
    <div className="App" data-testid="app">
      <button onClick={handle}
        id="get-posts-btn"
      >
        GET POSTS
      </button>
      <div id="post-container">
          {post ?post.map((elm)=>{
            return <Post key={elm.id} title={elm.title} body={elm.body}/>
          }) 
          :""}
        
      </div>
    </div>
  );
}

export default App;
