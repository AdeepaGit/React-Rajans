import './AboutUs.css' ; 
import Footer from "./footer";

const About = () => {
    return (
     
        <div>
         
         <section className="bg-half-170 d-table w-100" >
          <div className="bg-overlay bg-gradient-overlay aboutCover">
          <main role="main" class="aboutCoverContent">
    <h1 class="cover-heading">Who we are?</h1>
      <h2 class="cover-heading">
      About Lion's Club | Kandy</h2>
    
  </main>

          </div>{/*end container*/}
          
        </section>{/*end section*/}
        
        {/* Hero End */}
        {/* Start */}
        <section className="section">
          <div className="container">
            <div className="row align-items-center pb-5 pt-3">
              <div className="col-lg-5 col-md-6 ">
               <div className='bg-half-170 d-table w-100 center lionImg'></div>
              </div>{/*end col*/}
              <div className="col-lg-7 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                <div className="section-title ms-lg-5">
                  <h4 className="title mb-3 text-start">Kindness in Action!</h4>
                  <p className="text-muted" style={{textAlign: 'justify'}}>When caring people join together, roll up their sleeves and take action to make their community better, it’s a beautiful thing—and an incredible feeling for everyone involved. That’s Lions. Being a Lion is about leading by example, building relationships and improving the world through kindness. It’s 1.4 million caring men and women serving together so they can make a lasting impact and change more lives. At the heart of Lions clubs there is one constant: service. Giving your time and energy to others is a fantastic way to help your community. Yet, it also provides a great feeling for you that can spread and have a positive impact in your life and how you approach the world.</p>
                  <ul className="list-unstyled text-muted mb-0">
                    <li className="mb-0 text-start">Join a Community of Good</li>
                    <li className="mb-0 text-start">Put Leadership Skills into Action</li>
                    <li className="mb-0 text-start">Experience the Feeling of Service</li>
                  </ul>                        
                </div>
              </div>{/*end col*/}
            </div>{/*end row*/}
          </div>{/*end container*/}
          <div className="container mt-100 mt-60 pt-3">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className=" shadow p-4 rounded features features-classic feature-primary">
                  <i className="uil uil-airplay h1 mb-0 text-primary" />
                  <div className="content my-3 border-bottom">
                    <a href="page-single-service.html" className="title h5 text-dark">Community of Good</a>
                    <p className="text-muted mt-3">There are over 48,000 Lions clubs around the world. Filled with people like you who’ve decided to take action.</p>
                  </div>
                  <a href="page-single-service.html" className="d-flex align-items-center justify-content-between">
                  <button type="button" class=" btn-sm btn-outline-secondary">Read More </button>
                    <i className="mdi mdi-arrow-right" />
                  </a>
                </div>
              </div>{/*end col*/}
              <div className="col-lg-4 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                <div className=" shadow p-4 rounded features features-classic feature-primary">
                  <i className="uil uil-atom h1 mb-0 text-primary" />
                  <div className="content my-3 border-bottom">
                    <a href="page-single-service.html" className="title h5 text-dark">Leadership Skills into Action</a>
                    <p className="text-muted mt-3">A Lions club is a great place to develop your leadership skills and put them into action.</p>
                  </div>
                  <a href="page-single-service.html" className="d-flex align-items-center justify-content-between">
                  <button type="button" class=" btn-sm btn-outline-secondary">Read More </button>
                    <i className="mdi mdi-arrow-right" />
                  </a>
                </div>
              </div>{/*end col*/}
              <div className="col-lg-4 col-md-6 mt-4 pt-2 mt-lg-0 pt-lg-0">
                <div className=" shadow p-4 rounded features features-classic feature-primary">
                  <i className="uil uil-users-alt h1 mb-0 text-primary" />
                  <div className="content my-3 border-bottom">
                    <a href="page-single-service.html" className="title h5 text-dark">Global Support System</a>
                    <p className="text-muted mt-3">Every Lion and club is supported by our international association. More than 300 Lions International staff members.</p>
                  </div>
                  <a href="page-single-service.html" className="d-flex align-items-center justify-content-between">
                  <button type="button" class=" btn-sm btn-outline-secondary">Read More </button>
                    <i className="mdi mdi-arrow-right" />
                  </a>
                </div>
              </div>{/*end col*/}
            </div>{/*end row*/}
          </div>{/*end container*/}
          <div className="container-fluid px-0 mt-100 mt-60">
          <div className="bg-half-260" >
              <div className="bg-overlay" />
              <div className="play-icon">
                <a href="javascript:void(0)" data-type="youtube" data-id="QLwcNtbF5Xc" className="play-btn lightbox">
                  <i className="mdi mdi-play text-primary rounded-circle bg-white shadow" />
                </a>
              </div>
            </div>
          </div>{/*end container*/}
          


          {/* Partners start */}
<div className="container mt-5">
  <div className="row justify-content-center">
    <div className="col-lg-2 col-md-2 col-6 text-center">
      <img className="img-fluid" alt="" />
    </div>{/*end col*/}
    <div className="col-lg-2 col-md-2 col-6 text-center">
      <img  className="img-fluid" alt="" />
    </div>{/*end col*/}
    <div className="col-lg-2 col-md-2 col-6 text-center">
      <img  className="img-fluid" alt="" />
    </div>{/*end col*/}
    <div className="col-lg-2 col-md-2 col-6 text-center">
      <img  className="img-fluid" alt="" />
    </div>{/*end col*/}
    <div className="col-lg-2 col-md-2 col-6 text-center">
      <img  className="img-fluid" alt="" />
    </div>{/*end col*/}
    <div className="col-lg-2 col-md-2 col-6 text-center">
      <img  className="img-fluid" alt="" />
    </div>{/*end col*/}
  </div>{/*end row*/}
</div>{/*end container*/}
{/* Partners End */}
          
        </section>{/*end section*/}
      
      <div>
      <Footer/>
      </div>
      </div>
      
      
      
    );
  };
  
  export default About;
  