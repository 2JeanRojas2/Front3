import Card from '../../components/Card'
import Nav from '../../components/Nav'
import News from '../../components/News'
import Data from '../../db/data.json'
const CargarDatos=()=>{
   let cats =[]
   let dogs = []
   Data.filter((data)=>{
      if(data.type==="cats"){
        cats.push(data)
      }else if(data.type==="dogs"){
        dogs.push(data)
      }
      return true
    })
    return [cats,dogs]
}
const Home=()=>{
   let [cats,dogs]=CargarDatos()
   return(
      <div id="home" className="row">
         <News />
         <p className="text-center p-5">Acá encontrarás todo lo necesario para tu mascota. También podes gestionar tu cita de manera onLine.</p>
         {cats.map((c,i)=>{
            return(
               <Card key={i.toString()+"cat"} data={c} index={i}/>
            )
         })}
         {dogs.map((c,i)=>{
            return(
               <Card key={i.toString()+"dog"} data={c} index={i}/>
            )
         })}
      </div>
   )
}
export default Home