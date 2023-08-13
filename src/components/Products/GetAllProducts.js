import React, { Fragment, useEffect, useState } from "react";
import Navbar from "../../Shared/Navbar";
import { BiShowAlt, BiSolidEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
// import {GlassesOutline,CreateOutline,TrashBinOutline} from 'react-ionicons';

const GetAllProducts = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const getAllProducts = async () => {
    const data = await fetch("https://dummyjson.com/products");
    const productData = await data.json();
    // console.log(productData.products);
    setProducts(productData.products);
  };
  // console.log(products);

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <Fragment>
      <Navbar></Navbar>
      <div className="container mt-5">
        <div class="row">
          <div class="col-md-10">              
            <h2 className="">All Products</h2>
          </div>
          <div class="col-md-2">
            <button className="btn btn-success p-3 ms-5 float-right" onClick={()=>{navigate('/addnewproduct')}}>Add New</button>
          </div>
        </div>
        <table className="table table-striped-columns mt-4">
          <thead>
            <th className="h3">Title</th>
            <th className="h3">Category</th>
            <th className="h3">Price</th>
            <th className="h3">Ratings</th>
            <th className="h3">Images</th>
            <th className="h3">Actions</th>
          </thead>
          <tbody>
            {products.map((item, index) => {
              return (
                <tr>
                  <td>{item.title}</td>
                  <td>{item.category}</td>
                  <td>{item.price}</td>
                  <td>{item.rating}/5</td>
                  <td>
                    <img
                      src={item.images[0]}
                      alt="prod"
                      height={70}
                      width={100}
                    />
                  </td>
                  <td>
                    <BiShowAlt
                      className="text-primary mx-2"
                      onClick={() => {
                        navigate(`/viewproduct/${item.id}`);
                      }}
                    />
                    <BiSolidEdit
                      className="text-warning mx-2"
                      onClick={() => {
                        navigate(`/viewproduct/${item.id}`);
                      }}
                    />
                    <MdDelete
                      className="text-danger mx-2"
                      onClick={() => {
                        navigate(`/viewproduct/${item.id}`);
                      }}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Fragment>
    // <div></div>
  );
};

export default GetAllProducts;
