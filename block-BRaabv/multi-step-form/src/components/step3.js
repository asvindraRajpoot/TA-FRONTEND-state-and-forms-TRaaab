import React  from  "react";


function Step3(props){
    return (
         <>
           <h2>Step3</h2>
           <div className="border">
        <div className="form-control">
          <form onSubmit={props.handleSubmit}>
          <label>Password</label>
          <input type="password" placeholder="Enter your password" value={props.password} name="password" onChange={props.handleChange} /> 
          <input type="submit" value="Submit" /> 
          </form>
          <div className="btn">
           <button onClick={props.prev}>Prev</button>   
          </div> 
          
        </div>
        </div>
        </>
    )
}


export default Step3;
