const Card=({data=[]})=>{
    console.log(data)
    return (
        <div data-testid="data-list">
            {data.map((item)=>{
                return(
                    <div key={item.name} data-testid="superhero-list">
                        {/*All the content of the card has to be added over here*/}
                        <h1 >{item.name}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export default Card;
