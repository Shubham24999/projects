export function RestaurantCard({
    name,
    rating,
    type,
    number_of_votes,
    price_starts_from,
    id
}){
    return (
        <tr data-testid="item" key={id}>
            <td>
            <Link  data-testid = 'name' >{name}</Link>
            </td>
            <td data-testid="rating">{rating}
            </td>
            <td data-testid="type">{type}
            </td>
            <td data-testid="votes">{number_of_votes}
            </td>
            <td data-testid="price">{price_starts_from}
            </td>
        </tr>
    )
}
