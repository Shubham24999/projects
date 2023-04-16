function job(delay, value) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(value);
        },delay);

    })

}
// var res=[];
var results=[];
Promise.all([job(1000,10),job(2000,20),job(500,30),job(1500,40)])
.then((item)=>{
    item.map((el)=>{
        results.push(el);
    })
})


export { job, results };
