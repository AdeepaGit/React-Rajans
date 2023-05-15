import React from "react";
import Footer from "./footer";
import './home.css';

//import {Button} from 'react-bootstrap'; 

const Home = () => {
    return ( 
        <><div className="mainwrapper">
  
  <div class="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle bg-primary">
      <button class="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center" id="bd-theme" type="button" aria-expanded="false" data-bs-toggle="dropdown" aria-label="Toggle theme (light)">
        <svg class="bi my-1 theme-icon-active" width="1em" height="1em"><use href="#sun-fill"></use></svg>
        <span class="visually-hidden" id="bd-theme-text">Toggle theme</span>
      </button>
      <ul class="dropdown-menu dropdown-menu-end shadow" aria-labelledby="bd-theme-text">
        <li>
          <button type="button" class="dropdown-item d-flex align-items-center active" data-bs-theme-value="light" aria-pressed="true">
            <svg class="bi me-2 opacity-50 theme-icon" width="1em" height="1em"><use href="#sun-fill"></use></svg>
            Light
            <svg class="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
          </button>
        </li>
        <li>
          <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="dark" aria-pressed="false">
            <svg class="bi me-2 opacity-50 theme-icon" width="1em" height="1em"><use href="#moon-stars-fill"></use></svg>
            Dark
            <svg class="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
          </button>
        </li>
        <li>
          <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="auto" aria-pressed="false">
            <svg class="bi me-2 opacity-50 theme-icon" width="1em" height="1em"><use href="#circle-half"></use></svg>
            Auto
            <svg class="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
          </button>
        </li>
      </ul>
    </div>

<main className="">
<div class="cover-container d-flex w-100  p-3 mx-auto flex-column bg-half-260 d-table w-100 cover">

  <main role="main" class="coverContent">
    <h1 class="cover-heading">More Charity</h1>
      <h1 class="cover-heading">
      More Better Life</h1>
    <p class="lead">Congratulations to Lions and Leos for breaking a new <br />
    service record — serving 495 million people around the <br />
    world through more than 1.4 million service activities in 2021-2022!</p>
    <p class="lead">
      <a href="events" class="btn btn-lg btn-secondary">Learn more</a>
    </p>
  </main>

 
</div>
 
  <div class="container marketing">
    
  <section class="py-1 text-center container">
                    <div class="row py-lg-1">
                        <div class="col-lg-6 col-md-8 mx-auto">
                            <h1 class="fw-light">What We Do?</h1>
                            <p class="lead text-body-secondary">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>

                        </div>
                    </div>
                </section>
    <div class="row featurette bg-light">
      <div class="col-md-7 pt-5">
        <h2 class="featurette-heading"> For Hunger.</h2>
        <p class="lead"> COVID-19 has amplified food insecurity around the world. Discover innovative ways to serve around this global cause.</p>
      </div>
      <div class="col-md-5 homeimage1">
        
      </div>
    </div>

    <hr class="featurette-divider"/>

    <div class="row featurette bg-light">
      <div class="col-md-7 order-md-2 pt-5">
        <h2 class="featurette-heading">Why Water?</h2>
        <p class="lead">Around 297,000 children under the age of five die every year from diarrheal diseases caused by inadequate water and sanitation. Access to clean water and basic sanitation can save around 16,000 lives every week.</p>
      </div>
      <div class="col-md-5 order-md-1 homeimage2">
        
      </div>
    </div>

    <hr class="featurette-divider"/>

    <div class="row featurette bg-light">
      <div class="col-md-7">
        <h2 class="featurette-heading">Spectacles Recycling.</h2>
        <h4>How to donate spectacles</h4>
        <p class="lead">To donate your spectacles, please make contact with either Lions Clubs National Headquarters on 0121 441 4544 or Chichester Lions Club via www.chilions.org.uk/specs.htm Donations of hearing aids and equipment can also be included for forwarding to the hearing specialist. </p>
      </div>
      <div class="col-md-5 homeimage3">
       
      </div>
    </div>

    <hr class="featurette-divider"/>

  </div>

</main>
        </div>
        <div>

                <section class="py-1 text-center container">
                    <div class="row py-lg-1">
                        <div class="col-lg-6 col-md-8 mx-auto">
                            <h1 class="fw-light">What We Did?</h1>
                            <p class="lead text-body-secondary">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>

                        </div>
                    </div>
                </section>

                <div class="album py-5 bg-body-tertiary">
                    <div class="container">

                        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            <div class="col">
                                <div class="cards">
                                    <div className="homeimage4"></div>
                                    <div class="card-body">
                                      <h5 >Educations</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="">
                                                <button type="button" class="btn btn-sm btn-outline-secondary">Read More </button>

                                            </div>
                                            <small class="text-body-secondary">9 mins</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="cards">
                                <div className="homeimage5"></div>
                                    <div class="card-body">
                                    <h5 >Blood Donate</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="">
                                                <button type="button" class="btn btn-sm btn-outline-secondary">Read More </button>
                                            </div>
                                            <small class="text-body-secondary">45 mins</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="cards">
                                <div className="homeimage6"></div>
                                     <div class="card-body">
                                     <h5 >Hospitality</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="">
                                                <button type="button" class=" btn-sm btn-outline-secondary">Read More </button>
                                            </div>
                                            <small class="text-body-secondary">17 mins</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                 <dir>
                  
                 </dir>
                 
                <div>
                    <Footer />
                </div>

            </div></>
            )
  };
 
  
  export default Home;
  