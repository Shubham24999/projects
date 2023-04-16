import React from "react";

function App() {

  const [counter,setCounter]=React.useState(0)

  function handleClick(val){
    setCounter(counter+val)
  }

  function Reset(){
    setCounter(0)
  }

  function PrimeOrNot(n){
    // console.log(n)
    let count=0;
    for(let i=2;i<=n;i++){
      if(n%i===0){
        count++;
      }
    }
    return count==1? "true":"false"

  }
  return (
    <div>
      <div>
        <button data-testid="minusonebtn" disabled={counter<=0} onClick={()=>{handleClick(-1)}}>-1</button>
        <button data-testid="plusonebtn" onClick={()=>{handleClick(1)}}>1</button>
      <div>
        <button data-testid="resetbtn" onClick={Reset}>Reset Count</button>
      </div>
      </div>
      <span data-testid="counter">Count:{counter}</span>
      <div>
        <span data-testid="odd-or-even">{counter%2===0?"Even":"Odd"}</span>
        <span data-testid="is-prime">{PrimeOrNot(counter)}</span>
      </div>
    </div>
  );

}

export default App;

