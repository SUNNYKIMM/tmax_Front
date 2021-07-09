import React from 'react';

export default function Banner(){
    return(
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" >
            <div className="carousel-background" >
              <a href="/"><img alt="" src="/img/Banner/france-2021.jpg" width="100%"/></a>
            </div>
            <div className="container" >
              <div className="carousel-caption text-start">
                <h1>DAY TO DAY COMPETITION</h1>
                <h5><b>Program, results, rankings: follow Euro 2020 over the days and matches,</b></h5>
                <h5><b>group by group, from June 11 to July 11. Not to be missed, Saturday June 19,</b></h5>
                <h5><b>the second match of the Blues in Group F against Hungary (3 p.m., live on TF1),</b></h5>
                <p><a className="btn btn-lg btn-primary" href="#">EURO 2020</a></p>      
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
}