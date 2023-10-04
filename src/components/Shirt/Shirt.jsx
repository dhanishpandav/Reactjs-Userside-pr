import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { parsedata } from '../Productslide/product'
// import './shoes.css'
import { Container } from 'react-bootstrap'
import { AddCart, getproductAsync } from '../../Sevices/Action/Action'
import { useNavigate } from 'react-router'

function Shirt() {
  const isLogin = useSelector(state => state.ProductReducer.isLogin);
  const Allcartproduct = useSelector(state => state.ProductReducer.products)
  // console.log(Allcartproduct, "helo cart");

  // console.log(Allsmartphones);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const allshirts = Allcartproduct.filter((data) => {
    if (data.category == "shirt") {
      return data
    }
  })
  const [shirtinput, setinputvalue] = useState(allshirts)
  const [serchdata, setserchdata] = useState({
    search: ''
  })
  // const [suitrtinput, setinputvalue] = useState(allsuits)

  const handlesearch = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setserchdata({ [name]: value })

    const serchproduct = allshirts;

    let sercinghdata = serchproduct.filter((data) => {
      return data.name.toLowerCase().indexOf(value.toLowerCase()) > -1;
    })
    setinputvalue(sercinghdata);
  }

  const getdata = () => {
    dispatch(getproductAsync())
  }

  useEffect(() => {
    getdata()
  }, [])

  const handleCart = (id, data) => {
    // console.log(id,data);
    dispatch(AddCart(id, data));
  }


  // console.log(Alldata);

  return (
    <Container>
      <div className="search-bar m-4">
        {/* <form className="form-inline  d-flex"> */}
        <input className="form-control2 border border-warning p-2" onChange={(e) => handlesearch(e)} width="500px" type="text" />
        <button className="btn btn-warning ms-1 my-2 my-sm-0" type="submit">Search</button>
        {/* </form> */}
      </div>

      <div className="allboxes">

        {
          shirtinput.map((data) => {
            return (
              <>
                <section className="box  d-inline-block  ">
                  <div className="content ">

                    <div className="left">
                      <div className='mt-2 ms-3' style={{ width: "200px", height: "300px" }}>
                        <img src={data.image} alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                      </div>
                      <div className="product_details">
                        <span className="title">{data.name}</span >
                        {/* <p className="discription">{data.description}</p> */}
                        <p className="price">₹{data.price + " "}<span className="offer" style={{ fontSize: "12px" }}> 10 % OFF</span></p>
                        {/* <p className="other">inclusive of all taxes</p> */}
                      </div>
                    </div>

                    <div className="right">
                      <div className="product_description">
                        <h4>PRODUCT DESCRIPTION</h4>
                        <p>{data.description} Featuring a contemporary refined design with exceptional comfort, this pair is perfect to give your quintessential dressing an upgrade.
                        </p>
                        <p><span className='highlight'>Product Nmae  - </span>
                          {data.name}</p>
                        <p><span className="highlight">Country of Origin -</span>
                          {data.country}
                        </p>
                        <p><span className="highlight">stock Available -</span>
                          {" " + data.stock}
                        </p>
                        <p><span className="highlight">Product Rating -</span>
                          {" " + data.rate + " / " + "5"}
                        </p>
                        <p><span className="highlight">Commodity -</span> {data.category}
                        </p>
                        <p><span className="highlight"> Product Brand -</span> {data.brand}
                        </p>

                        <div className="button">

                          {
                            isLogin ? <button class="btn btn-success mt-3 addcart" onClick={() => handleCart(data.id, data)}><i class="fas fa-shopping-cart"></i></button> :

                              <>
                                <button class="btn btn-danger  addcart1" onClick={() => handleCart(data.id, data)} disabled><i class="fas fa-shopping-cart"></i></button>
                                <br />

                                <span className='text-danger'>Please Login !!</span>

                              </>
                          }
                        </div>
                      </div>

                    </div>

                  </div>
                </section>
              </>
            )
          })
        }

      </div>
    </Container>
  )
}

export default Shirt