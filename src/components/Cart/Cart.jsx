import React from 'react'
import { Container, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router';
import { Removedata, paymentasync } from '../../Sevices/Action/Action';




function View() {

    const Allcartproductss = useSelector((state) => state.ProductReducer.product)
    console.log(Allcartproductss,"single find");

    const navigate = useNavigate()
    const dispatch = useDispatch()
    let totalprice = 0;
    let tax = 0

    const handlepay = () => {
        alert("Your order successfulyy Done")
        // console.log(data);
        // dispatch(paymentasync())
        navigate('/')
    }

    const handleremove = (id) =>{
        dispatch(Removedata(id))
    }


    return (
        <Container>
            <Table striped bordered hover className='mt-4'>
                <thead>

                    <tr>
                        <th>Image</th>
                        <th>TITLE</th>
                        <th>CATEGORY</th>
                        <th>PRICE</th>
                        <th>QTY</th>
                        <th>TOTAL</th>
                        <th>ACTION</th>
                        {/* <th>BUY NOW</th> */}
                    </tr>
                </thead>
                <tbody>
                    {
                        Allcartproductss.map((val) => {
                            // console.log(val, "alldone");
                            totalprice += val.price * val.qty
                            tax += totalprice * 5 / 100
                            return (
                                <>
                                    <tr>
                                        <td>
                                            <div style={{ width: "100px", height: "100px", }}>
                                                <img src={val.image} alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                                            </div>
                                        </td>

                                        <td>{val.name}</td>
                                        <td>{val.category}</td>
                                        <td>{val.price}</td>
                                        <td>{val.qty}</td>
                                        <td>₹ {val.price}</td>
                                        <td><button className='btn btn-danger' type='submit' onClick={()=>handleremove(val.id)}>Remove</button></td>

                                    </tr>

                                </>
                            )
                        })
                    }




                    <tr>
                        <td colSpan={6}><h5>Total Price</h5></td>
                        <td><h5>₹ {totalprice}</h5></td>
                    </tr>
                </tbody>

            </Table>


            <tfoot style={{ float: "right", width: "400px" }}>

                <div className="card p-4  bg-light">
                    <div className="card-title">
                        <h3>Shopping Cart </h3>
                    </div>
                    <div className="card-total d-flex justify-content-between p-2">
                        <span>Subtotal</span>
                        <span>₹ {totalprice}</span>
                    </div>
                    <div className="card-total d-flex justify-content-between p-2">
                        <span>Tax (5%)</span>
                        <span>₹ {tax}</span>
                    </div>
                    <div className="card-total d-flex justify-content-between p-2">
                        <span>Shipping</span>
                        <span>₹ 80</span>
                    </div>
                    <div className="card-total d-flex justify-content-between p-2 ">

                        <span>Order total</span>
                        <span>₹ {totalprice + tax + 80}</span>
                    </div>
                    <div className="d-flex justify-content-between mt-3">
                        <button className='btn btn-warning ' type='button' value="submit" onClick={() => navigate('/')}>Back To Shopping</button>
                        <button className='btn btn-success ' type='button' value="submit" onClick={() => handlepay()}>Payment</button>
                    </div>
                </div>
            </tfoot>

        </Container >

    )
}

export default View