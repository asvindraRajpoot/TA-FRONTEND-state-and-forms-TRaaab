import React  from  "react";

function Step1(props){
    console.log('props',props);
    
    return (
        <>
        <div >
           <h2>Step1</h2>
           <div className="border">
           <div className="form-control">
           <form >
            <label>Email</label>
            <input type="email" placeholder="Enter your email"  name="email" onChange={props.handleChange} />  
           </form>
           </div>
           
        </div>
         <div className="btn">
         <button onClick={props.next}>Next</button>   
         </div>
         </div>
         </>
    )
}


export default Step1;
