function Alert({children}){
    return(
        <div className="alert alert-info shadow-lg">
            <div className="text-white">
                <span>
                    <i class="fa-solid fa-circle-info"></i>
                </span>
              <span>{children}</span>
            </div>
          </div>
    )
}

function Notice(){
    return (
    <>
        <Alert>안녕 반가워</Alert>
        <br/>
        <Alert>하하</Alert>
        <br/>
        <button>ㅇ</button>
    </>
    )
};

export default Notice;