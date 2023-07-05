import Card from "../../components/Card"
import React from "react"
import Data from '../../db/data.json'
const CargarDatos=()=>{
   let cats =[]
   Data.filter((data)=>{
      if(data.type==="cats"){
        cats.push(data)
      }
      return true
    })
    return cats
}
const Cats=()=>{
   let cats=CargarDatos()
   return(
      <div className="row">
      <h1 id="cats" className="text-center text-white bg-primary p-3">Nuestros Gato/as</h1>
      {cats.map((c,i)=>{
         return(
            <Card key={i.toString()+ "cat"} data={c} index={i}/>
         )
      })}
      </div>
   )
}
export default Cats