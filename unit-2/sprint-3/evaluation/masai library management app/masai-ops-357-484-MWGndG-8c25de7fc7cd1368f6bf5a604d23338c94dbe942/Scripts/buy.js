// you can write your js code here
let buylist=JSON.parse(localStorage.getItem("buy-list"));
let tbody=document.getElementById("buy-table");
function showuser(buylist){
    tbody.innerHTML="";
    buylist.map((user,index)=>{
        let tr=document.createElement("tr");
        let td1=document.createElement("td");
        td1.innerText=user.name;
        let td2=document.createElement("td");
        td2.innerText=user.author;
        let td3=document.createElement("td");
        td3.innerText=user.description;
        let td4=document.createElement("td");
        td4.innerText=user.date;
        let td5=document.createElement("td");
        td5.innerText=user.category;
        let td6=document.createElement("td");
        td6.innerText=user.price;
        tr.append(td1,td2,td3,td4,td5,td6);
        tbody.append(tr);
    });
}

showuser(buylist)