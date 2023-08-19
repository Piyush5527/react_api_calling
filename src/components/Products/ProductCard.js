import React, { Fragment } from "react";
import Swal from "sweetalert2";

const ProductCard = (props) => {
  return (
    <Fragment>
      <div class="w-50">
        <div class="card p-3">
          <div class="d-flex justify-content-between align-items-center ">
            <div class="mt-2">
              <h4 class="text-uppercase">{props.title}</h4>
              <div class="mt-5">
                <h5 class="text-uppercase mb-0">{props.price} ({props.discountPercentage})</h5>
                <h1 class="main-heading mt-0">VASE</h1>
                <div class="d-flex flex-row user-ratings">
                  <div class="ratings">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                  <h6 class="text-muted ml-1">4/5</h6>
                </div>
              </div>
            </div>
            <div class="image">
              <img src="https://i.imgur.com/MGorDUi.png" width="200" />
            </div>
          </div>

          <div class="d-flex justify-content-between align-items-center mt-2 mb-2">
            <span>Available colors</span>
            <div class="colors">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <p>A great option weather you are at office or at home. </p>

          <button class="btn btn-danger">Add to cart</button>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductCard;
