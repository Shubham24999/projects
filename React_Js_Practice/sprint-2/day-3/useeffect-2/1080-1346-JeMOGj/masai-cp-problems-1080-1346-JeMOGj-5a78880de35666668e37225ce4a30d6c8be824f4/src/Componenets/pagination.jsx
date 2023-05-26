

function createArrayOfSize(n) {
  return new Array(n).fill(0);
}

function Pagination({n,handleClick}) {
  let pages = createArrayOfSize(n).map((a) => {
    <button data-testid="page-btn" onClick={()=>handleClick(a)}>number</button>;
  });
  return <div>{pages}</div>;
}

export default Pagination;
