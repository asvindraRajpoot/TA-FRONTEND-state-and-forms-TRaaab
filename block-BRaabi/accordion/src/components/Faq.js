import React from "react";
import questions from "../data";



class Faq extends React.Component{
    constructor(props){
        super(props);
        this.state={
            open:false,
            no:0,
           
        }
    }
   handleClickOpen=(i)=>{
       this.setState({
           open:true,
           no:i,
         
       })

   }
 handleclickClose=(i)=>{
    this.setState({
        open:false,
        no:i,
      
    })

 }



    render(){
        return (
        <>
        {
            questions.map((q,i)=><div><h2>{q.Q}</h2><button onClick={()=>this.handleClickOpen(i)}>Open</button>{this.state.open?<h3>{q.A}<button onClick={()=>this.handleclickClose(i)}>Close</button></h3>:<></>}</div>)
        }
        </>
        )
    }
}


export default Faq;