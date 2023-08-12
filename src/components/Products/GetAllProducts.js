import React, { Fragment, useEffect, useState } from 'react'
import Navbar from '../../Shared/Navbar';
import {GlassesOutline,CreateOutline,TrashBinOutline} from 'react-ionicons';

const GetAllProducts = () => {
    const [products,setProducts] = useState([]);
    const getAllProducts= async() =>{
        const data = await fetch("https://dummyjson.com/products");
        const productData = await data.json();
        // console.log(productData.products);
        setProducts(productData.products);
    }
    // console.log(products);
    
    
    useEffect(()=>{
        getAllProducts();
    },[])
  return (
    <Fragment>
        <Navbar></Navbar>
        <div className='container mt-5'>
        <table className="table table-striped-columns"> 
            <thead>
                <th>Title</th>
                <th>Category</th>
                <th>Price</th>
                <th>Ratings</th>
                <th>Images</th>
                <th>Actions</th>
            </thead>
            <tbody>
                {products.map((item,index)=>{
                    return(
                    <tr>
                        <td>{item.title}</td>
                        <td>{item.category}</td>
                        <td>{item.price}</td>
                        <td>{item.rating}/5</td>
                        <td><img src={item.images[0]} alt='prod' height={70} width={100}/></td>
                        <td>
                            <GlassesOutline color={'#0000ff'} height={"40px"} width={"40px"} onClick={()=>{
                                alert("vfdnkgdhgkhdfkgdfjhkghdk");
                            }}></GlassesOutline>
                            <CreateOutline color={'#00ff00'}  height={"40px"} width={"40px"}></CreateOutline>
                            <TrashBinOutline color={'#ff0000'} height={"40px"} width={"40px"}></TrashBinOutline>
                        </td>
                    </tr>
                    );
                })}
            </tbody>
        </table>
        </div>
    </Fragment>
    // <div></div>
  )
}

export default GetAllProducts