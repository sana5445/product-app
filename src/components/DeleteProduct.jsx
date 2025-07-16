import React from 'react'
import ProdNav from './ProdNav'

const DeleteProduct = () => {
  return (
    <div>
        <ProdNav/>
         <div style={{ backgroundColor: '#6ca1b5ff', minHeight: '100vh', paddingBottom: '30px' }}>
         <div className="bg-light p-4 rounded shadow">
        <h2 style={{ color: "darkblue", textAlign: "center" }}>DELETE PRODUCTS</h2>
        
         <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                   <div className="row">
                    <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="label form-control" >Product Name </div>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-12 d-flex justify-content-center mt-3">
                        <button className="btn btn-danger" >DELETE</button>
                    </div>
                   </div>
                    </div>
                   </div>

                </div>
        
    </div>
  )
}

export default DeleteProduct