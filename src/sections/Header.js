import react from "react";  
const Header =() => {
  return(
    <>
      <section className="pt-5 pb-5 pb-0 homepage-hero-module" style={{backgroundSize: 'cover', backgroundImage: 'url(../banner-image.png)'}}>
        <div className="bg-overlay position-absolute" />
        <div className="container position-relative zindex-1 pt-3 pb-3">
          <div className="row  mb-3 mt-3 align-content-center justify-content-between ">
            <div className="col-12 col-md-7 pr-md-5 text-left align-self-center ">
              <div className="logo mb-5">
                <img src="/logo.png" className="img-fluid"/>
              </div>
              <h1 className="mb-4 text-white font-weight-bold text-paediatric">ADULT & PAEDIATRIC BONE MARROW TRANSPLANT PROGRAMME</h1>
              <p className="lead text-white mb-5">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
              <p className="text-h3 mt-4">
                <a href="#" className="btn-1 btn-action btn-round btn-lg">Learn More!</a>
              </p>
            </div>



            <div className="col-12  col-md-5 ">
              <div className="card card-enquire shadow-lg border border-primary text-white text-left h-100">
                <div className="card-body">
                  <h3 className="pb-3 font-weight-bold text-center">Register for free Trial - get 10% off when you Buy</h3>
                  <form action="#" method="post" className="registration-form">
                    <div className="form-group">
                      <label className="sr-only" htmlFor="form-name">First name</label>
                      <input type="text" name="form-name" placeholder="Enter Your Name..." className="form-name form-control-lg form-control" id="form-name" />
                    </div>
                    <div className="form-group">
                      <label className="sr-only" htmlFor="form-email">Email</label>
                      <input type="text" name="form-email" placeholder="Email Address..." className="form-email  form-control-lg form-control" id="form-email" />
                    </div>
                    <div className="form-group">
                      <label className="sr-only" htmlFor="form-phone">Phone</label>
                      <input type="text" name="form-phone" placeholder="Phone No..." className="form-phone  form-control-lg form-control" id="form-phone" />
                    </div>
                    <button type="submit" className="btn btn-dark btn-lg mt-2 shadow-lg">Sign me up!</button>
                    <p className="mt-3 small">
    
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Header;