

function createArrayOfSize(n) {
  return new Array(n).fill(0);
}

function Pagination({totalPages,page,HandleClick}) {

  console.log(totalPages)
  
  let pages = createArrayOfSize(totalPages).map((a, i) => {
    return <button data-testid="page-btn" disabled={page===i+1} onClick={()=>HandleClick(i+1)} key={i}>{i+1}</button>;
  });
  return <div>{pages}</div>;
}

export default Pagination;
