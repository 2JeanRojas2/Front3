const NotFound = () => {
   return (
      <div className="container my-5">
         <hr className="my-3"></hr>
         <div className="row my-5">
            <div className="col-6">
               <h1 className="my-3 text-center bg-primary p-3 bg-opacity-25">Oops!</h1>
               <h2>Estás intentando acceder a un link que no existe prueba con:</h2>
               <div className="d-flex justify-content-center">
                  <ul type="none" className="text-danger">
                     <li>/home</li>
                     <li>/cats</li>
                     <li>/cats</li>
                     <li>/faq</li>
                  </ul>
               </div>

            </div>
            <div className="col-6 ">
               <img className="p-5 w-75" src="./images/error.png" alt="error" />
            </div>
         </div>
      </div>
   )
}
export default NotFound