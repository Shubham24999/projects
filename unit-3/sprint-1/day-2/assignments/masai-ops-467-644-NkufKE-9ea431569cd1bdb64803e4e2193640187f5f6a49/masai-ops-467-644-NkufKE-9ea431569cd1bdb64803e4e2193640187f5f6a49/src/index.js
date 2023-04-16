function studentData(firstName,lastName,age,marksArray, ...hobbies) {
  let obj= {};
  obj.fullName= `${firstName} ${lastName}'s`,
  obj.age= age,
  obj.marksArray= marksArray,
  obj.hobbies=hobbies,
  obj.getInfo=()=> { return `${firstName} ${lastName}'s age is ${age}.`},
  obj.getResult=()=>{
      let avg= 0,sum=0;
      for(let i=0;i<obj.marksArray.length;i++){
        sum+=marksArray[i];
      }
      avg=sum/(obj.marksArray.length);
      // return avg<50 ? ({Result: FAIL}):({Result: PASS});
      if(avg>=50){
        return 'Result: PASS';
      }
      else{
        return 'Result: FAIL';
      }
  }
  
  return obj;
}
// studentData('Vivek', 'Agarwal', 38, [50,60,70] , 'Singing', 'Coding', 'Meditating');
export {
  studentData
}