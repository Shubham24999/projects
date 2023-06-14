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


  return (
    <div className="App" data-testid="app">
      <button style={{"background":"teal"}}
        id="get-posts-btn"
        onClick={handle}
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
