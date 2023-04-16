
function MobileOs(){

    let oslistitem=["Android","Blackberry","iPhone","Windows Phone"]

    let ositem=oslistitem.map((el)=>{
        return <li>{el}</li>;
    })

    let manulist=["Samsung","HTC","Micromax","Apple"]

    let mnitem=manulist.map((el)=>{
        return <li>{el}</li>
    })

    // console.log(ositem)
     return <div>
                <div>
                    <h1 >Mobile Operating System
                    
                    </h1>   
                    <ul data-testid ="os-list">{ositem}</ul>

                    
                </div>
                <div>
                    <h1 >Mobile Manufacturers
                    </h1>
                    <ul data-testid ="manufacturers-list">{mnitem}</ul>
                    
                    
                </div>
     </div>
}





export default MobileOs