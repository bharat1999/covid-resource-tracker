import './homePage.css'

function homePage(){
    return(
    <div>
        <section id ="hero">
            <div class="hero-container">
                <h1>Welcome to Covid Bed Tracker</h1>
            </div>
        </section>
        <section id="facts">
            <div class="container">
                <div class="section-header">
                    <h3 class="section-tille">Covid-19 cases</h3>
                </div>
                <div class="row counters">

                    <div class="col-lg-3 col-6 text-center">
                      
                      <p>Total Cases</p>
                    </div>
          
                    <div class="col-lg-3 col-6 text-center">
                      
                      <p>New Cases</p>
                    </div>
          
                    <div class="col-lg-3 col-6 text-center">
                     
                      <p>Active Cases</p>
                    </div>
          
                    <div class="col-lg-3 col-6 text-center">
                     
                       <p>Death Count</p>
                    </div>
          
                  </div>
          
            </div>
        </section>
        <section id="facilities">
            <div class="container">
                <div class="section-header">
                    <h3 class="section-title">Facilities</h3>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <div class="box">
                            <div class="icon"><a href="/icu"><i class="fas fa-procedures"></i></a></div>
                            <h4 class="title"><a href="/icu">ICU BEDS</a></h4>  
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="box">
                          <div class="icon">
                            <a href="/isolation"><i class="fas fa-bed"></i></a>
                          </div>
                          <h4 class="title"><a href="/isolation">ISOLATION BEDS</a></h4>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6" data-aos="zoom-in">
                        <div class="box">
                          <div class="icon"><a href="/o2"><i class="fas fa-bed"></i></a></div>
                          <h4 class="title"><a href="/o2">OXYGEN BEDS</a></h4>
                        </div>
                      </div>
                </div>
            </div>
        </section>
    </div>   
    )
}

export default homePage