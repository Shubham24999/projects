let uid;
let desig;
let vaccinetype;
let username;
let age;
let priority;
let userData=JSON.parse(localStorage.getItem("registraion"))||[];


function submit(){
    uid=new Date().getTime().toString();
    let formname=document.getElementById("name").value;
    username=formname
    age=document.getElementById("age").value;
    var rd1=document.getElementById("r1")
    var rd2=document.getElementById("r2")
    let selectvaccine=document.getElementById("Vaccine")
    vaccinetype=selectvaccine.options[selectvaccine.selectedIndex].value
    let selectpriority=document.getElementById("priority")
    priority=selectpriority.options[selectpriority.selectedIndex].value
    
    if((username!="" && username.length>=4) && (age>=18 && age<=40) && (rd1.checked || rd2.checked) && (vaccinetype!="AllVaccine") &&(priority!="Priority")){
        if(rd1.checked==true){
            desig=rd1.value;
        }else if(rd2.checked==true){
            desig=rd2.value;
        }
        console.log(uid,username,+age,desig,vaccinetype,priority);
        let obj={
            uniqueID:uid,
            name:username,
            age:+age,
            designation:desig,
            priority:priority,
            vaccinetype:vaccinetype
        }
        console.log(obj)
        userData.push(obj)
        localStorage.setItem("registraion",JSON.stringify(userData));
        alert("Succesfully Registered");

    }else{
        if(username=="" || username.length<4){
            alert("ENTER THE NAME WITH MORE THAN 4 CHARACTER")
        }else if(age<18 && age>40){
            alert("YOU ARE NOT ELIGIBLE FOR VACCINATION")
        }else if(desig=="undefined"){
            alert("SELECT YOUR DESIGNATION")
        }else if(priority="Priority"){
            alert("SELECT YOUR PRIORITY")
        }else if(vaccinetype="AllVaccine"){
            alert("SELECT TYPE OF VACCINE")
        }
    }
    
}