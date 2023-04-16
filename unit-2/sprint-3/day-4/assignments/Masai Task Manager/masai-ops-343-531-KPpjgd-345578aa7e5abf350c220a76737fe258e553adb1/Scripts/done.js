
let tbody=document.getElementById("done_user_table");
let donelist=JSON.parse(localStorage.getItem("done-list"))||[];

function showuser(){
    tbody.innerHTML="";
    donelist.map((user,index)=>{
        let userrow=document.createElement("tr");
        let name=document.createElement("td");
        let description=document.createElement("td");
        let startdate=document.createElement("td");
        let enddate=document.createElement("td");
        let priority=document.createElement("td");
        name.textContent=user.name;
        description.textContent=user.description;
        startdate.textContent=user.startdate;
        enddate.textContent=user.enddate;
        priority.textContent=user.priority;
        userrow.append(name,description,startdate,enddate,priority);
        tbody.append(userrow);
    });
}
showuser()