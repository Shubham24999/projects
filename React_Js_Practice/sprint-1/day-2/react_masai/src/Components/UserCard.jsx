import { useState } from "react"

function UserCard({name,avatar,posts,followers,address}){
    const [status,setstatus]=useState(true)

    function handleClick(){
        let value=status?false:true
        console.log(status)
        setstatus(value)
    }
    return <div>
        <div><img src={avatar} alt={name} style={{"borderRadius":"50%","width":"200","height":"200"}} /></div>
        <div>
            <div>
            <h2 data-testid="user_name">{name}</h2>
            <p data-testid = "user_address">{address}</p>
            <div>
                <div>
                <h3>Posts</h3>
                <p data-testid = "user_posts">{posts}</p>
                </div>
                <div>
                <h3>Followers</h3>
                <p data-testid = "user_followers">{followers}</p>
                </div>

            </div>
            </div>
        </div>
        <div><button onClick={handleClick}>{status?"follow":"following"}</button></div>
    </div>
}

export default UserCard
