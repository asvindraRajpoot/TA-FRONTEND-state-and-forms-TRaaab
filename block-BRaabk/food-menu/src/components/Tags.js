import React from 'react';
import Food from './Food';
let Data = require('../data/data.json');



class Tags extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTag: "All",
        }

     

    }
    handleClick=(f)=>{
        this.setState({
            activeTag:f,
        })
            

    }

    render() {
        let filters = Data.map((f) => f.category).filter((v, i, a) => a.indexOf(v) === i);
      //  console.log(filters);
        filters.unshift("All");
        let food;
        console.log('active tag', this.state.activeTag);
        if(this.state.activeTag==="All"){
           food=[...Data];
           console.log('inside if',food);

        }else{
           
            food=Data.filter((f)=>{console.log('inside else data find',f);
            return f.category===this.state.activeTag;
            })
            console.log('inside else',food);
        }
        
        return (
            <>
                
                    <div className="tags">
                       
                        {
                            filters.map((f, i) => {
                                return (

                                    <div key={i}>

                                        <span onClick={()=>this.handleClick(f)}>{f.toUpperCase()}</span>
                                    </div>
                                )
                            })

                        
                        }
                    </div>
                    <Food food={food}/>
                   
                    


                
            </>
        )
    }
}

export default Tags;