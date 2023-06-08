export default function BookCard(props) {
  const {img,title,price,year,author}=props
  console.log(props)
  return (
    <div data-testid='book-card'>
        <img src={img} alt={""} />
        <b><div data-testid='book-card-title'>{title}<span>({year})</span></div></b>
        <div data-testid='book-card-author'>{author}</div>
        <div data-testid='book-card-price'>{price}</div>
    </div>
  )
}
