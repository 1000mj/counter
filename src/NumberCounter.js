import React, {useState} from "react";

function NumberCounter(){
  const [no,setNo] = useState(0);

  const noIsEvenDiv = (
    <>
      <hr/> {no%2 ==0 ? <div>짝수입니다.</div>:<div>홀수입니다.</div>}
    </>
  )
  const noIs8multipleDiv =(
    <>
      {no%8 ==0?<div>8의 배수가 맞습니다.</div>:<div>8의 배수가 아닙니다.</div>}
    </>
  );

  
    return (
      <>
        숫자 : {no}
        <hr/>
        <button onClick={()=>setNo(no+1)}>증가</button>
        <button onClick={()=>setNo(no-1)}>감소</button>
        {noIsEvenDiv}
        {noIs8multipleDiv}
  
      </>
    );
}



export default NumberCounter;