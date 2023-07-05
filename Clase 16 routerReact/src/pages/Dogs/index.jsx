import Card from "../../components/Card"
import React from "react"
import Data from '../../db/data.json'
const CargarDatos=()=>{
   let dogs =[]
   Data.filter((data)=>{
      if(data.type==="dogs"){
        dogs.push(data)
      }
      return true
    })
    return dogs
}
const Dogs=()=>{
   let dogs = CargarDatos()
   return(
      <div className="row">
      <h1 id="dogs" className="text-center text-white bg-primary p-3">Nuestros Perro/as</h1>
      {dogs.map((c,i)=>{
         return(
            <Card key={i.toString() + "dog"} data={c} index={i}/>
         )
      })}
      </div >
   )
}
export default Dogs