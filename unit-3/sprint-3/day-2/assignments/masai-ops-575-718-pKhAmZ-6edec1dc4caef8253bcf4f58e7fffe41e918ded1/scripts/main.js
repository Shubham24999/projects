// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

const recipeIngredientURL = `${baseServerURL}/recipeIngredients`;
const employeeURL = `${baseServerURL}/employees`;
const userRegisterURL = `${baseServerURL}/register`;
const userLoginURL = `${baseServerURL}/login`;
const recipesURL= `${baseServerURL}/recipes`;
const catsURL=`${baseServerURL}/cats`;

let paginationWrapper = document.getElementById("pagination-wrapper");

let loginUserUsername = document.getElementById("login-user-username");
let loginUserPassword = document.getElementById("login-user-passowrd");

let loginUserButton = document.getElementById("login-user");
let getTodoButton = document.getElementById("fetch-todos");
let getEmployeeBtn= document.getElementById("fetch-employees");
let getRecipesButton=document.getElementById("fetch-recipes");
let getcatsButton=document.getElementById("fetch-catsData");


let mainSection = document.getElementById("data-list-wrapper");
let notificationWrapper = document.getElementById("notifications-wrapper");

let userAuthToken = localStorage.getItem("localAccessToken") || null;
let userId = +localStorage.getItem("userId") || null;
const urlAllTodosOfUser = `${baseServerURL}/todos?userId=${userId}`;
const urlTodosBase = `${baseServerURL}/todos/`;

getRecipesButton.addEventListener("click", () => {
  fetch(recipesURL)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);

      // data if filtering again for our need,I am filtering the data only which is need to show users
      let cardData = data.map(item => {
        return {
          title: item.name,
          description: item.description ? item.description.substring(0,100) : "No description available.",
          linkText: 'Read more',
          linkUrl: 'https://google.com',
          imageUrl: `${baseServerURL}${item.image}`,
        }
      })
      // console.log(cardData);
      renderCards(cardData)


      // what we need - declarative approach
      // mainSection.innerHTML = `
      //   <pre class="emp-wrapper">  
      //     <h3>List of employees</h3>
      //     <code>
      //       ${JSON.stringify(data, null, 5)}
      //     </code>
      //   </pre>
      // `;

      // giving JS step by step instructions - imperative approach

      // let dataPre = document.createElement('pre');
      // dataPre.classList.add("emp-wrapper")

      // let dataCode = document.createElement('code');
      // dataCode.append(JSON.stringify(data,null,2))

      // dataPre.append(dataCode);
      // mainSection.append(dataPre);
    });
});
// for all elements
function renderCards(cardData) {

  let cardList = `
    <div class="card-list">
      ${ cardData.map(item => getCard(item.title, item.description, item.linkText, item.linkUrl, item.imageUrl)).join('') }
    </div>
  `

  mainSection.innerHTML = cardList;
}
// made a function for the 1 particular element.
function getCard(title, desc, linkText, linkUrl, imageUrl){
  let card = `
      <div class="card">
        <div class="card__img">
        <img src=${imageUrl} alt="food" />
        </div>
        <div class="card__body">
          <h3 class="card__item card__title">${title}</h3>
          <div class="card__item card__description">
            ${desc}
          </div>
          <a href=${linkUrl} class="card__item card__link">${linkText}</a>
        </div>
      </div>
  `
  return card
}


getcatsButton.addEventListener("click",()=>{
  fetch(catsURL)
   .then((res)=>{
    return res.json();
   })
   .then((data)=>{
    console.log(data);

    let cardData=data.map((item)=>{
      return {
        title:item.name,
        imageUrl:`${baseServerURL}${item.image}`,
        price:item.cost,
        category:item.breed
      }
     })
     ShowDetails(cardData);
   })
   
})


function ShowDetails(data){
  // console.log(data);
  let cardList = `
    <div class="card-list">
      ${ data.map(item => getCatscard(item.title, item.imageUrl, item.price, item.category)).join('') }
    </div>
  `

  mainSection.innerHTML=cardList;
}
function getCatscard(title,imageUrl,price,cate){
  let card =`
    <div class="card">
      <div class="card__img">
      <img src=${imageUrl} alt="cat-img" />
      </div>
      <div class="card__body">
          <h3 class="card__item card__title">${title}</h3>
          <div class="card__item card__description">
            ${cate}
          </div>
          <h3 class="price">${price}</div>
        </div>
    </div>
  `
  return card;
}