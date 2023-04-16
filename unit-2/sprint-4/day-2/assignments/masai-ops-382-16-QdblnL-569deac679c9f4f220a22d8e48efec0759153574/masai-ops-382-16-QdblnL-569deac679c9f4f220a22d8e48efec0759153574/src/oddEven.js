function getData(data) {
    let promise=new Promise((resolve,reject)=>{
        if(isNaN(data)){
            reject("error");
        }
        else if(data%2!=0){
            setTimeout(()=>{
                resolve("odd")
            },3000)
        }
        else{
            setTimeout(()=>{
                resolve("even")
            },4000)
        }
        
    })
    return promise;


}

export default getData
