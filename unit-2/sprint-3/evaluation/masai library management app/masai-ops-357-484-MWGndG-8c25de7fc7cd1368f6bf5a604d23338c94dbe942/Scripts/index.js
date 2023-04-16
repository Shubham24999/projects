// you can write your js code here
let userdata=JSON.parse(localStorage.getItem("book-list"))||[];

let user_form=document.getElementById("user_form");

user_form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let name=user_form.name.value;
    let author=user_form.author.value;
    let description=user_form.desc.value;
    let date=user_form.added.value;
    let category=user_form.category.value;
    let price=user_form.price.value;
    let user={name,author,description,date,category,price};
    userdata.push(user);
    // console.log(user);
    localStorage.setItem("book-list",JSON.stringify(userdata));
});