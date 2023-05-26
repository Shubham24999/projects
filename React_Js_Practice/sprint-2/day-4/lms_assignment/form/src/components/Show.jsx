


function Show({username,userage,useraddress,department,salary,isMarried,imgurl}){
    return (<div>
        <table>
            <thead>
                <tr>
                    <th>USER NAME</th>
                    <th>USER AGE</th>
                    <th>USER ADDRESS</th>
                    <th>DEPARTMENT</th>
                    <th>SALARY</th>
                    <th>MARITAL STATUS</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{username}</td>
                    <td>{userage}</td>
                    <td>{useraddress}</td>
                    <td>{department}</td>
                    <td>{salary}</td>
                    <td>{isMarried}</td>
                    <td>{imgurl}</td>
                </tr>
            </tbody>
        </table>
    </div>)
}

export default Show