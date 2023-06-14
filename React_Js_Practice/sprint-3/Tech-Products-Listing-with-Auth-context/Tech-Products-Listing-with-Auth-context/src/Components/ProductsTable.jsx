function ProductsTable({data}){
    return (
            <table border="1px">
                <thead>
                    <tr>
                        <th>Sno</th>
                        <th>Brand</th>
                        <th>Category</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {[data].map((item) => {
                        return <tr>
                            <td>{item.id}</td>
                            <td>{item.brand}</td>
                            <td>{item.category}</td>
                            <td>{item.price}</td>
                        </tr>
                    })}
                </tbody>
            </table>
    )
}

export default ProductsTable