import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
import './product.js'
import '../Productslide/product.css'
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
// import AmazonFooter from "../Footer/AmazonFooter.jsx";

function ProductSlide() {
  const cartproducts = useSelector(state => state.ProductReducer.products)
  console.log(cartproducts, "doneeeeeeeeeeeeeeeeeeeeeeeeeeee");
  const navigate = useNavigate()
  // const allview = parsedata

  // const handlesubmit = (e) =>{
  //   alert("helloo")
  //   // navigate('/Electronic')

  // }


  return (
    <div className="container">
      <div className="maincard d-flex justify-content-end mt-4">
      <div className="  me-4 d-flex  align-items-center " style={{ width: '15rem' }} >
          <div className="card-body justify-content-center text-center">
            <h3 className="card-text ">Best of Shoes</h3>
            <button className="btn btn-outline-success" type="submit" onClick={() => navigate('/shoes')} >View All Product</button>
          </div>
        </div>
        <div className="card me-4" style={{ width: '15rem' }}>
          <img className="card-img-top" src="https://static.zara.net/photos///2023/I/1/2/p/2341/120/800/2/w/750/2341120800_6_2_1.jpg?ts=1689762941054" alt="Card image cap" />
          <div className="card-body">
            <p className="card-text"></p>
          </div>
        </div>
        <div className="card me-4" style={{ width: '15rem' }}>
          <img className="card-img-top" src="https://static.zara.net/photos///2023/I/1/2/p/2332/220/802/2/w/750/2332220802_6_2_1.jpg?ts=1689673118109" alt="Card image cap" />
          <div className="card-body">
            <p className="card-text"></p>
          </div>
        </div>
        <div className="card me-4" style={{ width: '15rem' }}>
          <img className="card-img-top" src="https://static.zara.net/photos///2023/V/1/2/p/2205/120/203/2/w/750/2205120203_6_2_1.jpg?ts=1671461264503" alt="Card image cap" />
          <div className="card-body">
            <p className="card-text"></p>
          </div>
        </div>
        <div className="card me-4" style={{ width: '15rem' }}>
          <img className="card-img-top" src="https://static.zara.net/photos///2023/I/1/2/p/2311/220/202/2/w/750/2311220202_6_2_1.jpg?ts=1692869179898" alt="Card image cap" />
          <div className="card-body">
            <p className="card-text"></p>
          </div>
        </div>
        <div className="card me-4" style={{ width: '15rem' }}>
          <img className="card-img-top" src="https://static.zara.net/photos///2023/I/1/2/p/2004/220/800/2/w/750/2004220800_6_2_1.jpg?ts=1689867412840" alt="Card image cap" />
          <div className="card-body">
            <p className="card-text"></p>
          </div>
        </div>
      </div>
      <div className="maincard d-flex justify-content-end mt-4">
      <div className="  me-4 d-flex  align-items-center " style={{ width: '15rem' }} >
          <div className="card-body justify-content-center text-center">
            <h3 className="card-text ">Best of Shirt</h3>
            <button className="btn btn-outline-success" type="submit" onClick={() => navigate('/shirt')} >view All Product</button>
          </div>
        </div>
        <div className="card me-4" style={{ width: '15rem' }}>
          <img className="card-img-top" src="https://www.snitch.co.in/cdn/shop/files/4MSS2360-03-M24.jpg?v=1695037009&width=1800" alt="Card image cap" />
          <div className="card-body">
            <p className="card-text"></p>
          </div>
        </div>
        <div className="card me-4" style={{ width: '15rem' }}>
          <img className="card-img-top" src="https://www.snitch.co.in/cdn/shop/files/4MSS1813-11-M76.jpg?v=1695378425&width=1800" alt="Card image cap" />
          <div className="card-body">
            <p className="card-text"></p>
          </div>
        </div>
        <div className="card me-4" style={{ width: '15rem' }}>
          <img className="card-img-top" src="https://www.snitch.co.in/cdn/shop/products/SNITCH-JUNE1236.jpg?v=1655450283&width=1800" alt="Card image cap" />
          <div className="card-body">
            <p className="card-text"></p>
          </div>
        </div>
        <div className="card me-4" style={{ width: '15rem' }}>
          <img className="card-img-top" src="https://www.snitch.co.in/cdn/shop/products/Snitch_29thNov22_57684.jpg?v=1670846856&width=1800" alt="Card image cap" />
          <div className="card-body">
            <p className="card-text"></p>
          </div>
        </div>
        <div className="card me-4" style={{ width: '15rem' }}>
          <img className="card-img-top" src="https://www.snitch.co.in/cdn/shop/files/4MSK8513-01-M31.jpg?v=1695299590&width=1800" alt="Card image cap" />
          <div className="card-body">
            <p className="card-text"></p>
          </div>
        </div>
      </div>
      <div className="maincard d-flex justify-content-end mt-4">
      <div className="  me-4 d-flex  align-items-center " style={{ width: '15rem' }} >
          <div className="card-body justify-content-center text-center">
            <h3 className="card-text ">Best of Suits</h3>
            <button className="btn btn-outline-success" type="submit" onClick={() => navigate('/suit')} >view All Product</button>
          </div>
        </div>
        <div className="card me-4" style={{ width: '15rem' }}>
          <img className="card-img-top" src="https://frenchcrown.in/cdn/shop/files/BL2967-DB_1_428acf1f-e1d8-4458-b2b2-951427b0b878_1200x1800.jpg?v=1695272938" alt="Card image cap" />
          <div className="card-body">
            <p className="card-text"></p>
          </div>
        </div>
        <div className="card me-4" style={{ width: '15rem' }}>
          <img className="card-img-top" src="https://frenchcrown.in/cdn/shop/files/BL3048-BG-E249_1_1200x1800.jpg?v=1695033875" alt="Card image cap" />
          <div className="card-body">
            <p className="card-text"></p>
          </div>
        </div>
        <div className="card me-4" style={{ width: '15rem' }}>
          <img className="card-img-top" src="https://frenchcrown.in/cdn/shop/products/ST2884-CBG2-FB_13_1080x.jpg?v=1693656712" alt="Card image cap" />
          <div className="card-body">
            <p className="card-text"></p>
          </div>
        </div>
        <div className="card me-4" style={{ width: '15rem' }}>
          <img className="card-img-top" src="https://frenchcrown.in/cdn/shop/files/ST3011-SB_13_1200x1800.jpg?v=1694840851" alt="Card image cap" />
          <div className="card-body">
            <p className="card-text"></p>
          </div>
        </div>
        <div className="card me-4" style={{ width: '15rem' }}>
          <img className="card-img-top" src="https://frenchcrown.in/cdn/shop/products/ST2966-SBP-D114_12_1080x.jpg?v=1694673083" alt="Card image cap" />
          <div className="card-body">
            <p className="card-text"></p>
          </div>
        </div>
      </div>
      {/* <AmazonFooter/> */}
    </div>
  )
}

export default ProductSlide