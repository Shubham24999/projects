let vaccinatedData=JSON.parse(localStorage.getItem("vaccinated"))||[];
let container=document.getElementById("container");
console.log(vaccinatedData)


let vaccine=`
<div class="item">
${vaccinatedData.map((elm) => {
   return showcard(elm.uniqueID,elm.name,elm.designation,elm.priority,elm.vaccinetype,elm.age);
}).join(" ")}
</div>
`

container.innerHTML=vaccine;
function showcard(id,name,desig,prio,vacctype,age){
    let card=`
    <div class="card">
    <div class="id">
        <h3>${id}</h3>
    </div>
    <div class="name">
        <h3>${name}</h3>
    </div>
    <div class="name">
        <h3>${age}</h3>
    </div>
    <div class="desig">
        <h3>${desig}</h3>
    </div>
    <div class="prio">
        <h3>${prio}</h3>
    </div>
    <div class="vctype">
        <h3>${vacctype}</h3>
    </div>
    </div>
    `

    return card;
}
