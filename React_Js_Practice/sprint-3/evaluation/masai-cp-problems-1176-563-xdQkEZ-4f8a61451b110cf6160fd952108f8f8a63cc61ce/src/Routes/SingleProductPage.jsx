
function SingleProductPage({elm}){

    return (
        <div data-testid="products-container">   
            <div>
                <h3 data-testid="product-brand">{elm.brand}</h3>
            </div>
            <div >
            <img data-testid="product-image" src={elm.img}/>
            </div>
            <div data-testid="product-category">{elm.category}
            </div>
           
            <div data-testid="product-details">{elm.details}
            </div>
            <div data-testid="product-price">{elm.price}
            </div>

            </div>
    )
}
export default SingleProductPage