import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Error404 = () => {
   let navigate=useNavigate()
   return (
      <div className="authincation fix-wrapper">
        <div className="container">
            <div className="row justify-content-center h-100 align-items-center">
               <div className="col-md-6">
                  <div className="error-page">
                     <div className="error-inner text-center">
                        <div className="dz-error" data-text="404">404</div>
                        <h2 className="error-head mb-0"><i className="fa fa-exclamation-triangle text-warning me-2" />The page you were looking for is not found!</h2>
                        <p>You may have mistyped the address or the page may have moved.</p>
                        <Link
                           onClick={() => navigate(-1)} className="btn btn-secondary">Go Back</Link>
                     </div>
                  </div>
               </div>
            </div>
        </div>
      </div>
      
   );
};

export default Error404;
