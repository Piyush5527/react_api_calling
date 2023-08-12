import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../Shared/Navbar';
import {BiSolidCart} from 'react-icons/bi';
const ShowSingleProduct = () => {
    const {id} = useParams("");
    const [productData,setProductData] = useState("");
    const getData = async() => {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProductData(data);
    }

    useEffect(()=>{
        getData();
    },[]);


    return (
        <Fragment>
            <Navbar></Navbar>
           <div class="container mt-4">
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title">{productData.title}</h3>
                        {/* <h6 class="card-subtitle"></h6> */}
                        <div class="row">
                            <div class="col-lg-5 col-md-5 col-sm-6">
                                <div class="white-box text-center">
                                {/* <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=740&t=st=1691854518~exp=1691855118~hmac=51e2ee3d0ed253514d9924dbd93600479753ff6095eb39dc5362ec592243ad98" height ={400} width={400} class="img-responsive"/> */}
                                <img src = {productData.thumbnail}/>
                                </div>
                            </div>
                            <div class="col-lg-7 col-md-7 col-sm-6">
                                <h4 class="box-title mt-5">Product description</h4>
                                <p>{productData.description}</p>
                                <h2 class="mt-5">
                                    {productData.price}"/-"<small class="text-success">({productData.discountPercentage}%) OFF</small>
                                </h2>
                                <button class="btn btn-dark btn-rounded mr-1" data-toggle="tooltip" title="" data-original-title="Add to cart">
                                    <BiSolidCart/>                                
                                </button>
                                <button class="btn btn-primary btn-rounded">Buy Now</button>
                                <h3 class="box-title mt-5">Key Highlights</h3>
                                <ul class="list-unstyled">
                                    <li><i class="fa fa-check text-success"></i>Ratings : {productData.rating}/5</li>
                                    <li><i class="fa fa-check text-success"></i>Stock : {productData.stock}</li>
                                </ul>
                            </div>
                            <div class="col-lg-12 col-md-12 col-sm-12">
                                <h3 class="box-title mt-5">General Info</h3>
                                <div class="table-responsive">
                                    <table class="table table-striped table-product">
                                        <tbody>
                                            <tr>
                                                <td width="390">Brand</td>
                                                <td>{productData.brand}</td>
                                            </tr>
                                            <tr>
                                                <td>Delivery Condition</td>
                                                <td>Packed</td>
                                            </tr>
                                            <tr>
                                                <td>Category</td>
                                                <td>{productData.category}</td>
                                            </tr>
                                            <tr>
                                                <td>Description</td>
                                                <td>{productData.description}</td>
                                            </tr>
                                            
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
  )
}

export default ShowSingleProduct