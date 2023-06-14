import data from "../nonfiction.json"
import BookCard from "./BookCard";


export default function NonFiction() {
  return (
    <div data-testid='books-nonfiction'>
      <h1 data-testid='books-container-title'>Non-Fiction Books</h1>

      <div className="books-container">
        {data.map((elm)=>{
          return <BookCard img={elm.img} title={elm.title} price={elm.title} year={elm.year} author={elm.author} />
        })}
      </div>
    </div>
  );
}
