import React from "react";
import questions from "../data";



class Faq extends React.Component{
    constructor(props){
        super(props);
        this.state={
          activeIndex:null,
           
        }
    }
   handleClickOpen=(i)=>{
       this.setState({
           activeIndex:i
         
       })

   }

    render(){
        return (
        <>
        <h1 className="center"> AltCampus FAQs </h1>
        {
            questions.map((q,i)=>{

                return (
                    <div>
                        <h2 onClick={()=>this.handleClickOpen(i)}>{q.Q}{this.state.activeIndex===i?'👆🏻':'👇🏻'}</h2>
                         {i===this.state.activeIndex?<h3>{q.A}</h3>:<></>}

                         
                    </div>
                )
            })
            
        
        }
        </>
        )
    }
}


export default Faq;