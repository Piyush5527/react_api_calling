import React, { Fragment, useState } from "react";
import Navbar from "../../Shared/Navbar";
import Toast from "../../Shared/Toast";

const AddNewProduct = () => {
    const [prodTitle,setProdTitle] = useState("");
    const [prodPrice,setProdPrice] = useState("");
    const [prodDesc,setProdDesc] = useState("");
    const [showDialog,setShowDialog] = useState(0);

    const checkValidity=()=>{
      if(prodTitle === "")
      {
        return false;
      }
      if(prodPrice === "")
      {
        return false;
      }
      if(prodDesc === "")
      {
        return false;
      }
      return true;
      
    }
    const submitHandler=async(e)=>{
        e.preventDefault();
        if(checkValidity())
        {
          const res = await fetch('https://dummyjson.com/products/add',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({
              title: prodTitle,
              price: prodPrice,
              description:prodDesc
            })
          });
          const response = res.json();
          // console.log(res);
          if(res.status === 200)
          {
            console.log("Success");
            setShowDialog(showDialog+1);
          }
          else{
            console.log("Failure");
          }
        }
        else
        {
          console.log("invalid");
        }
    }
  return (
    <Fragment>
      <Navbar></Navbar>
      {showDialog>0?<Toast/>:""}
      <div className="container mt-5 mb-5 d-flex justify-content-center">
        <div className="card px-1 py-4">
          <div className="card-body">
            <h6 className="card-title mb-3">Add New Product</h6>

            <h6 className="information mt-4">
              Please provide following information
            </h6>
            <form onSubmit={(e)=>{submitHandler(e)}}>
            <div className="row mt-3">
              <div className="col-sm-12">
                <div className="form-group">
                  <label htmlFor="name">Product Title</label>{" "}
                  <input className="form-control" type="text" placeholder="Title" onChange={(e)=>{setProdTitle(e.target.value)}}/>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-sm-12">
                <div className="form-group">
                  <div className="input-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Price"
                      onChange={(e)=>{setProdPrice(e.target.value)}}
                    />{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-sm-12">
                <div className="form-group">
                  <div className="input-group">
                    {" "}
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Description"
                      onChange={(e)=>{setProdDesc(e.target.value)}}
                    />{" "}
                  </div>
                </div>
              </div>
            </div>
            <button className="btn btn-primary btn-block confirm-button mt-4">
              Confirm
            </button>
            </form>
          </div>
        </div>
      </div>
      
      
      
      
    </Fragment>
  );
};

export default AddNewProduct;
