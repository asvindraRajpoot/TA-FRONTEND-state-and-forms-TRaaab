import React  from  "react";


function Step2(props){
    return (
        <>
          <h2>Step2</h2>
          <div className="border">
        <div className="form-control">

            <form>
          
          <label>Username</label>
          <input type="text" placeholder="Enter your username" value={props.username} name="username" onChange={props.handleChange} />  
          </form>
          
        </div>
           <div className="btn">
                  <button onClick={props.prev}>Prev</button>  
                  <button onClick={props.next} className="margin-left">Next</button>     
                 
            </div> 
            </div>
        </>
    )
}


export default Step2;
