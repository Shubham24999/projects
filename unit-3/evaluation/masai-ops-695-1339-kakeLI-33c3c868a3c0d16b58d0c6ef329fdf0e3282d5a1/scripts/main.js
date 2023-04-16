// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://127.0.0.1:${
  import.meta && import.meta.env && import.meta.env.REACT_APP_JSON_SERVER_PORT
    ? import.meta.env.REACT_APP_JSON_SERVER_PORT
    : 9090
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
let mainSection = document.getElementById("data-list-wrapper");

let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");

let fetchRecipesBtn = document.getElementById("fetch-recipes");

let filterLessThan50Btn = document.getElementById("filter-less-than-50");
let filterMoreThanEqual50Btn = document.getElementById(
  "filter-more-than-equal-50"
);

let loginUserUsername = document.getElementById("login-user-username");
let loginUserPassword = document.getElementById("login-user-passowrd");
let loginUserButton = document.getElementById("login-user");
let welcomeUsernameSpan = document.getElementById("welcome-username");

let editRecipeInputId = document.getElementById("edit-recipe-input-id");
let editRecipeInputPrice = document.getElementById("edit-recipe-input-price");
let editRecipeButton = document.getElementById("edit-recipe-button");

let userloginurl=`${baseServerURL}/login`;



let recipeData = [];

let userAuthToken, userInfo;
userAuthToken=localStorage.getItem("accesstoken") || null;
userInfo=+localStorage.getItem("userId")||null;


let userrecipe=`${baseServerURL}/recipes?userInfo=${userInfo}`

let recipeurl=`${baseServerURL}/recipes`


loginUserButton.addEventListener("click",()=>{
  // console.log(loginUserUsername.value,loginUserPassword.value);
  let obj={
    "username":loginUserUsername.value,
    "password":loginUserPassword.value
  }

  login(obj);
  
})

async function login(userData){
  let res=await fetch(userloginurl,{
    method:"POST",
    headers:{
      "Content-Type":'application/json'
    },
    body:JSON.stringify(userData)
  })
  console.log(res);

  if(res.ok==true){
    welcomeUsernameSpan.innerText=`${loginUserUsername.value}`
  }

  let myData=await res.json()
  console.log(myData);

  localStorage.setItem("accesstoken",myData.accessToken)
  localStorage.setItem('userId',myData.user.id)
}

fetchRecipesBtn.addEventListener("click",async()=>{
  let responce = await fetch(userrecipe,{
    headers:{
      "Content-type":'application/json',
      "Authorization":`Bearer ${userAuthToken}`
    }
  })
  let myuserdata=await responce.json();
  console.log(myuserdata);
  let userdata=myuserdata.map((ele)=>{
    return {
      id:ele.id,
      title:ele.name,
      description:`Rs. ${ele.price}`,
      imageurl:`${baseServerURL}${ele.image}`,
      addition:ele.price
    }
  })



  console.log(userdata);
  // recipeData=myuserdata;
  recipeData=userdata;
  renderlist(recipeData)



  function renderlist(carData){
    let cardlist=`
    <div class="card-list>
    ${carData.map((item)=>{
      return getcard(item.id,item.title,item.description,item.imageurl,item.addition)
    }).join(" ")}
  
    </div>
    `
    mainSection.innerHTML=cardlist;

  }
  function getcard(id,title,desc,imageurl,addition){
    let card=`
    <div class="card" data-id=${id}>
        <div class="card-image">
        <img src=${imageurl}>
        </div>
        <div class="card-body">
        <h3 class="card-item card-title">${title}</h3>
        ${desc? `<div class="card-item card-description">${desc} </div>`:""}
        <a href="#" data-id=${id} data-name=${title} class="card-item card-link">Edit</a>
        </div>
    </div>
    `
    return card;
  }

  // ${addition? `<div class="card-item card-additonal-info">${addition} </div>`:""}
  
sortAtoZBtn.addEventListener("click",()=>{
  recipeData.sort((a,b)=>{
    return (a.addition) -(b.addition)
  })
  renderlist(recipeData)
})
sortAtoZBtn.addEventListener("click",()=>{
  recipeData.sort((a,b)=>{
    return (b.addition) -(a.addition)
  })
  renderlist(recipeData)
})
  


filterLessThan50Btn.addEventListener("click",()=>{
  let arr=recipeData.filter((ele)=>{
    if(ele.addition>=50){
      return true;
    }else{
      return false;
    }
  })
  renderlist(arr);
})

filterMoreThanEqual50Btn.addEventListener("click",()=>{
  let arr=recipeData.filter((ele)=>{
    if(ele.addition>=150){
      return true;
    }else{
      return false;
    }
  })
  renderlist(arr);
})

})




