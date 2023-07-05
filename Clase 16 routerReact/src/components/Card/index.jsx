const Cards=({data,index})=>{
   return(
      <div className="card col-3 m-5 mx-5" key={index.toString()} >
              <img src={data.src} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-center alert alert-warning">{data.name}</h5>
                <p className="card-text">Tamaño: {data.size}</p> 
                <p className="card-text">Raza:{data.raza}</p> 
                <p className="card-text">Paciente desde: {data.date}</p> 
                <a href="/" className="btn alert-warning">Ver más</a>
              </div>
            </div>
   )
}
export default Cards

