// Write code related to dashboard page here

let userdata=JSON.parse(localStorage.getItem("task-list"));
let priority_list=JSON.parse(localStorage.getItem("priority-list"))||[];
let tbody=document.getElementById("dashboard_user_table");
let taskcount=document.getElementById("task-count");
let dofilter=document.getElementById("filter");
dofilter.addEventListener("change",filterby);
function filterby(){
    let value=dofilter.value;
    userdata=JSON.parse(localStorage.getItem("task-list"));
    if(value=="Low"){
        userdata=userdata.filter((user)=> user.priority=="Low")
        showuser()
    }
    else if(value=="High"){
        userdata=userdata.filter((user)=> user.priority=="High")
        showuser()
    }else if(value=="Meduim"){
        userdata=userdata.filter((user)=> user.priority=="Medium")
        showuser()
    }else{
        userdata=JSON.parse(localStorage.getItem("task-list"));
        showuser()
    }
}

function showuser(){
    taskcount.textContent=userdata.length;
    tbody.innerHTML="";
    userdata.map((user,index)=>{
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
            priority_list.push(user);
            localStorage.setItem("priority-list",JSON.stringify(priority_list));
            userdata.splice(index,1);
            localStorage.setItem("task-list",JSON.stringify(userdata));
        showuser()    
        });
        userrow.append(name,description,startdate,enddate,priority,add);
        tbody.append(userrow);
    });
}
showuser()