import "./BookCard.css"

export default function BookCard({img,title,price,year,author}) {
  // const {img,title,price,year,author}=props
  // console.log()
  return (
    <div data-testid='book-card' className="bookcard">
        <div className="cardimg"><img src={img} alt={title} /></div>
        <div data-testid='book-card-title'><b>Title:-{title}</b><span>({year})</span></div>
        <div data-testid='book-card-author'><b>Author:-</b> {author}</div>
        <div data-testid='book-card-price'><b>Price:- Rs.</b>{price}</div>
    </div>
  )
}

