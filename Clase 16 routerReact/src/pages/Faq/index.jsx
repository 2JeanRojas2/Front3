import React from "react"
import Data from '../../db/preguntasF.json'
const Faq=()=>{
   let pf = Data;
   return(<div className="row">
      <h1 id="faq" className="text-center text-white bg-primary p-3">Preguntas frecuentes</h1>
      {pf.map((data,index)=>{
         return(<div key={index.toString() + "faq"}>
            <h3 className="text-center alert alert-warning p-3">{data.pregunta}</h3>
            <p className="text-justify p-3">{data.respuesta}</p>
         </div>)
      })}
      </div>
   )
}
export default Faq