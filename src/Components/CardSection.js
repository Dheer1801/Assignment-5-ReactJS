import React from 'react'
import Card from './Card'

let CardSection = ()=>{
    return(
        <section className="contact bg-success ">
        <div className="container ">
          <h2 className="text-white">
            We love new friends!
          </h2>
          <div className="row">
           <Card cardImage= {<img
                src="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                class="card-img-top"
                alt="..."
              />} cardTitle="First" cardDesc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
           buttontxt="Market"/> 
           <Card cardImage={<img
                src="https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                class="card-img-top"
                alt="..."
              />} cardTitle="Second" cardDesc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
           buttontxt="Station"/>
           <Card cardImage={ <img
                src="https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                class="card-img-top"
                alt="..."
              />} cardTitle="Third" cardDesc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
           buttontxt="City"/>
          </div>
        </div>
      </section>
    )
}
export default CardSection