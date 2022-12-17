import React , {useState} from "react";

const StopWatch=()=> {

  const [num,setnum] = useState(0);

  const timeoutid=setTimeout(()=> setnum(num + 1),1000);

  const pause = () => {
    clearTimeout(timeoutid);
  };
  
  const resume = () => {
    clearTimeout()
  }

  return (
    <>
     숫자 : {num}
     <hr />
     <button onClick={pause}>일시정지</button>
     <button onClick={resume}>재개</button>
    </>
  );
};

export default StopWatch;