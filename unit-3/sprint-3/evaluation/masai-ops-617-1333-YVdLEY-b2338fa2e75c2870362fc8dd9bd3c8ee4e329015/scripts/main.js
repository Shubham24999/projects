

// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://127.0.0.1:${ import.meta && import.meta.env && import.meta.env.REACT_APP_JSON_SERVER_PORT ? import.meta.env.REACT_APP_JSON_SERVER_PORT : 9090 }`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //

let mainSection = document.getElementById("data-list-wrapper");

let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");

let fetchRecipesBtn = document.getElementById('fetch-recipes');
let fetchEmployeesBtn = document.getElementById('fetch-employees');

let filterLessThan50Btn = document.getElementById("filter-less-than-50");
let filterMoreThanEqual50Btn = document.getElementById("filter-more-than-equal-50");

fetchEmployeesBtn.addEventListener('click',()=>{
  fetch(`${baseServerURL}/employees`)
  .then((res)=>{
    return res.json()
  })
  .then((data)=>{
    let EmployeeData = data.map((ele)=>{
      return {
        id:ele.id,
        title:ele.name,
        description: `Rs. ${ele.salary}`,
        linkText: 'Greet',
        linkUrl: '#',
        imageUrl: `${baseServerURL}${ele.image}`,
        additionalInfo: null
      }

    })
    console.log(EmployeeData)
    renderCardList(EmployeeData)

    let greetLink = document.querySelectorAll('.card-link');
    for(let link of greetLink){
      link.addEventListener('click',(e)=>{
        e.preventDefault()
        let title = e.target.dataset.name
        console.log(title)
        alert(`Greetings from ${title}!`)
      })
    }
  })

})

fetchRecipesBtn.addEventListener('click',()=>{
  fetch(`${baseServerURL}/recipes?_limit=25&_page=1`)
  .then((res)=>{
    return res.json()
  })
  .then((data)=>{
    let recipesData = data.map((ele)=>{
      return {
        id:ele.id,
        title:ele.name,
        description: `Rs. ${ele.price}`,
        linkText: null,
        linkUrl: null,
        imageUrl: `${baseServerURL}${ele.image}`,
        additionalInfo: null
      }

    })
    // console.log(recipesData)
    renderCardList(recipesData)
  })
})

let catsData = [];
window.addEventListener("load", fetchAndRenderCats())
function fetchAndRenderCats(){
  fetch(`${baseServerURL}/cats`)

 .then((res)=>{
  return res.json()
  })
 .then((data)=>{
 let catObj = data.map((cat)=>({
  id: cat.id,
  title: cat.name,
  description: cat.description.substring(0,75),
  linkText: null,
  linkUrl: null,
  imageUrl: `${baseServerURL}${cat.image}`,
  additionalInfo: cat.cost
 }))

 catsData = catObj

 sortAtoZBtn.addEventListener('click',()=>{
  catsData.sort((a,b)=>{return (a.additionalInfo) - (b.additionalInfo)})
  renderCardList(catObj)
  console.log(catObj)
 })

 sortZtoABtn.addEventListener('click',()=>{
  catsData.sort((a,b)=>{return (b.additionalInfo)-(a.additionalInfo)})
  renderCardList(catObj)
 })

 filterLessThan50Btn.addEventListener('click',()=>{
  let arr = catObj.filter((ele)=>{
    if(ele.additionalInfo < 50){
      return true
    }
  })
  renderCardList(arr)
 })


 filterMoreThanEqual50Btn.addEventListener('click',()=>{
  let arr = catObj.filter((ele)=>{
    if(ele.additionalInfo >= 50){
      return true
    }
  })
  renderCardList(arr)
 })

  // showcard(catsData)
  renderCardList(catObj)
 })
}





function renderCardList(cardData){
  let cardList = `
   <div class="card-list">
       ${cardData.map((item)=> getCard(
        item.id,
        item.title,
        item.description,
        item.linkText,
        item.linkUrl,
        item.imageUrl,
        item.additionalInfo,
       )).join('')}
    </div>
  `;

  mainSection.innerHTML = cardList
}

function getCard(id,title,desc,linkText,linkUrl,imageUrl,additionalInfo){
  let card = `
        <div class="card" data-id=${id} >
           <div class="card-image">
           <img src=${imageUrl} alt="food" />
           </div>
           <div class="card-body">
            <h3 class="card-item card-title">${title}</h3>
            ${desc ? `<div class="card-item card-description">${desc}</div>`:''}
            
            ${ linkUrl ? `<a href=${linkUrl} data-id=${id} id="BHARAT" data-name="${title}" class="card-item card-link">${linkText}</a>` : ''}
            ${ additionalInfo ? `<div class="card-item card-additional-info">${additionalInfo}</div>` : ''}
          </div>
        </div>
  `;
  return card
}

