let dashboardData=JSON.parse(localStorage.getItem("registraion"))||[];
let vaccinatedData=JSON.parse(localStorage.getItem("vaccinated"))||[];
console.log(vaccinatedData);
let mainsection=document.getElementById("dashboard-cont");
let totalspan=document.getElementById("cart-total");
showDetails(dashboardData)


// uid,name,age,designation,priority,vaccinetype
function showDetails(data){
    totalspan.innerText=data.length;
    mainsection.innerHTML="";
        data.forEach((element,index) => {
          let card = document.createElement("div");
          card.setAttribute("class","card")

          let uniqueID = document.createElement("h3");
          uniqueID.innerText=element.uniqueID;
          uniqueID.setAttribute("class","card-item")
  
          let name = document.createElement("h3");
          name.innerText=element.name;
          name.setAttribute("class","card-item")

          let age = document.createElement("h3");
          age.innerText=element.age;
          age.setAttribute("class","card-item")

  
          let designation = document.createElement("h3");
          designation.innerText=element.designation;
          designation.setAttribute("class","card-item")
  
          let priority = document.createElement("h3");
          priority.innerText=element.priority;
          priority.setAttribute("class","card-item")

          let vaccinetype = document.createElement("h3");
          vaccinetype.innerText=element.vaccinetype;
          vaccinetype.setAttribute("class","card-item")

          let deletecard =document.createElement("button");
          deletecard.setAttribute("class","red");
          deletecard.innerText="Delete";
          deletecard.addEventListener("click",()=>{
            mainsection.innerHTML="";
            let final_list= data.filter((el,ind)=>{
              if(index==ind){
                return false;
              }
              else{
                return true;
              }
            })
            data=final_list;
            localStorage.setItem("registraion",JSON.stringify(data));
            showDetails(final_list);
          })
          let vaccinatedcard=document.createElement("button")
          vaccinatedcard.setAttribute("class","green")
          vaccinatedcard.innerText="Vaccinate"
          vaccinatedcard.addEventListener("click",()=>{
            let present=false;
            for(let i=0;i<vaccinatedData.length;i++){
                if(vaccinatedData[i].uniqueID==element.uniqueID){
                    present=true;
                    break;
                }
            }
            if(present==true){
                alert("You have got your vaccine")
            }else{
                vaccinatedData.push(element)
                localStorage.setItem("vaccinated",JSON.stringify(vaccinatedData))
                alert("Congrats You have got Your Vaccine")
            }
            
          })

          card.append(uniqueID,name,age,designation,priority,vaccinetype,deletecard,vaccinatedcard);
          mainsection.append(card);
        });
}
