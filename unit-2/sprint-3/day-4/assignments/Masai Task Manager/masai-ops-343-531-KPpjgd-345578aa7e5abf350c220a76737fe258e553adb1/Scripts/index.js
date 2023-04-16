// Write code related to Home page here 
let userdata=JSON.parse(localStorage.getItem("task-list"))||[];


let user_form=document.getElementById("user_form");

user_form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let name=document.getElementById("name").value;
    let description=document.getElementById("desc").value;
    let startdate=document.getElementById("start").value;
    let enddate=document.getElementById("end").value;
    let priority=document.getElementById("priority").value;
    let user={name,description,startdate,enddate,priority};
    userdata.push(user);
    // console.log(user);
    localStorage.setItem("task-list",JSON.stringify(userdata));

});

