function getData(data) {
    return new Promise(function(resolve,reject){
        let num=typeof(data);
        // if(num==='string'){
        //     reject("error");
        // }else{
            if(data%2==1){
                setTimeout(function(){
                    resolve("odd");
                },3000);
            }else if(data%2==0){
                setTimeout(function(){
                    resolve("even");
                },4000);
            }else if(num==='string'){
                reject("error");
            }
        // }
    })
}
// let promisedata= getData(data);

export default getData
