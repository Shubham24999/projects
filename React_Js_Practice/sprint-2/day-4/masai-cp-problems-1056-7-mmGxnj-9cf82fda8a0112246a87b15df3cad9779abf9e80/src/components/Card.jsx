const Card=({data=[]})=>{

    console.log(data)

    return (
        <div data-testid="data-list" style={{"display":"grid","gridTemplateColumns":"1fr 1fr"}}>
            {data.map((item)=>{
                return(
                    <div data-testid="superhero-list" key={Math.random()*10+Date.now()} style={{"border":"1px solid black","height":"200px","width":"300px","boxShadow": "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
                        <h3>Hero Name:{item.Name}</h3>
                        <h5>Height:{item.Height}</h5>
                        <h5>Weight:{item.Weight}</h5>
                        <h5>Power Level:{item.Power}</h5>
                    </div>
                )
            })}
        </div>
    )
}

export default Card;
