// Write code for the Progress page here 
let priority_list=JSON.parse(localStorage.getItem("priority-list"))||[];
let tbody=document.getElementById("progress_user_table");
let donelist=JSON.parse(localStorage.getItem("done-list"))||[];
function showuser(){
    tbody.innerHTML="";
    priority_list.map((user,index)=>{
        let userrow=document.createElement("tr");
        let name=document.createElement("td");
        let description=document.createElement("td");
        let startdate=document.createElement("td");
        let enddate=document.createElement("td");
        let priority=document.createElement("td");
        let add=document.createElement("td");
        name.textContent=user.name;
        description.textContent=user.description;
        startdate.textContent=user.startdate;
        enddate.textContent=user.enddate;
        priority.textContent=user.priority;
        add.textContent="Add";
        add.addEventListener("click",()=>{
            donelist.push(user);
            localStorage.setItem("done-list",JSON.stringify(donelist));
            priority_list.splice(index,1);
            localStorage.setItem("priority-list",JSON.stringify(priority_list));
        showuser()    
        });
        userrow.append(name,description,startdate,enddate,priority,add);
        tbody.append(userrow);
    });
}
showuser()