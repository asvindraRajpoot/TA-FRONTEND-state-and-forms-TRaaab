import React from  "react";


class Form1 extends React.Component{
    constructor(props){
        super(props);

        this.state={
            value:"",
        }
        this.fileInput=React.createRef();
    }

    handleChange=(e)=>{
        this.setState({
            value:e.target.value,
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault() 
        alert(this.fileInput.current.files[0].name)
    }



    render(){
        return (
            <>
              {/* <h1>Multiple Inputs</h1>
              <div className="form-control">
              <form onSubmit={this.handleSubmit}>
                  <label>Text input</label>
                  <input onChange={(e)=>this.handleChange(e)}/>
                  <label>Date input</label>
                  <input type="date" onChange={(e)=>this.handleChange(e)} />
                  <label>File input</label>
                  <input type="file" ref={this.fileInput}/>
                  <label>Read-only input</label>
                  <input readOnly placeholder="This can only be copied"/>
                  <label>Disabled input</label>
                  <input disabled/>
                  <label>Textarea</label>
                  <textarea onChange={(e)=>this.handleChange(e)}></textarea>
                  <label>Textarea Disabled</label>
                  <textarea disabled></textarea>
                  <input type="submit" />
              </form>
              </div> */}
            </>
        )

    }

}

export default Form1;