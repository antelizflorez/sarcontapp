import React from "react";
import conta1 from "../assets/images/conta1.jpg"
import conta2 from "../assets/images/conta2.jpg"
import conta3 from "../assets/images/conta3.jpg"



function SecondSlider () {
    return (
        <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={conta3} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src={conta1} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src={conta2} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src={conta2} class="d-block w-100" alt="..."/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    );
}

export default SecondSlider;