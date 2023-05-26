import data from "../fiction.json"

import BookCard from "./BookCard";


export default function Fiction() {
  console.log(data)
  return (
    <div data-testid='books-fiction'>
      <h1 data-testid='books-container-title'>Fictional Boooks</h1>

      <div className="books-container">
        {data.map((elm)=>{
          return <BookCard img={elm.img} title={elm.title} price={elm.title} year={elm.year} author={elm.author} />
        })}
      </div>
    </div>
  );
}
