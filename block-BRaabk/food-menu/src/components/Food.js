
function Food(props){
    console.log('inside props',props.food);
    return (
        <div className="container">
          {
              
              props.food.map((f,i)=>{
                  return (
                      <div key={i}>
                          <div className="">
                            <strong >{f.title}</strong>
                            <strong className="price">{f.price}</strong>
                          </div>
                          <p>{f.desc}</p>
                          
                      </div>
                  )
              })
          }
        </div>


    )
}

export default Food;