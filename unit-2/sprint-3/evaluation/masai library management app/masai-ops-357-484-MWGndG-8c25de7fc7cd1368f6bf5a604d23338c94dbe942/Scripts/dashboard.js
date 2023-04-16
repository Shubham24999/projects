// you can write your js code here

let userdata=JSON.parse(localStorage.getItem("book-list"))||[];
let buylist=JSON.parse(localStorage.getItem("buy-list"))||[];
let bookmarklist=JSON.parse(localStorage.getItem("bookmark-list"))||[];
let tbody=document.getElementById("dashboard-page");
let bookcount=document.getElementById("book-count");
let dofilter=document.getElementById("filter");
dofilter.addEventListener("change",filterby);

function filterby(){
    let value=dofilter.value;
    // userdata.JSON.parse(localStorage.getItem("book-list"));
    let filter_data=userdata.filter((el)=>{
        if(value==el.category){
            return true;
        }else if(value==""){
            return userdata;
        }
        else{
            return false;
        }
    })
    showuser(filter_data);

}

function showuser(userdata){
    bookcount.textContent=userdata.length;
    tbody.innerHTML="";
    userdata.map((user,index)=>{
        let tr=document.createElement("tr");
        let td1=document.createElement("td");
        let td2=document.createElement("td");
        let td3=document.createElement("td");
        let td4=document.createElement("td");
        let td5=document.createElement("td");
        let td6=document.createElement("td");
        let td7=document.createElement("td");
        let td8=document.createElement("td");
        td1.textContent=user.name;
        td2.textContent=user.author;
        td3.textContent=user.description;
        td4.textContent=user.date;
        td5.textContent=user.category;
        td6.textContent="Buy";
        td6.addEventListener("click",()=>{
            buylist.push(user);
            localStorage.setItem("buy-list",JSON.stringify(buylist));
            userdata.splice(index,1);
            localStorage.setItem("book-list",JSON.stringify(userdata));
            showuser(userdata)
        });
        td7.textContent="Add";
        td7.addEventListener("click",()=>{
            bookmarklist.push(user);
            localStorage.setItem("bookmark-list",JSON.stringify(bookmarklist));
            userdata.splice(index,1);
            localStorage.setItem("book-list",JSON.stringify(userdata));
            showuser(userdata)

        });
        td8.textContent=user.price;
        tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
        tbody.append(tr);
    });

}

showuser(userdata)