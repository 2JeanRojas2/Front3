const News = () => {
   return (
      <div className="row my-5">
      <div id="col-6 carouselExampleIndicators" className="w-50 carousel slide" data-bs-ride="carousel">
         <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
         </div>
         <div className="carousel-inner">
            <div className="carousel-item active">
               <img src="./images/alimentos.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
               <img src="./images/alimentosPerros.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
               <img src="./images/kitBanioPerros.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
               <img src="./images/kitGatos.png" className="d-block w-100" alt="..." />
            </div>
         </div>
         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
         </button>
         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
         </button>
        
         
      </div>
       <div className="col-6">
       <h1 className="text-white text-center bg-primary p-3">Veterinaria Alegría</h1>
       <p className="text-center">Conoce, comparte y disfruta de tus mascotas</p>
        
       </div>
       </div>
   )
}
export default News