import React from 'react'

let Card = (props)=>{
    return(
        <div className="col-4">
          <div className="card" style={{width: "18 rem"}}>
           {props.cardImage}
            <div className="card-body">
              <h5 className="card-title">{props.cardTitle}</h5>
              <p className="card-text">
                  {props.cardDesc}
              </p>
              <a href="#" className="btn btn-success">{props.buttontxt}</a>
            </div>
          </div>
        </div>
       
    )
}
export default Card