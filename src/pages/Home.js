import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import "../assets/css/home.css"
import logo from "../assets/image/man.png"
import Img1 from "../assets/image/img1.webp"
import Img2 from "../assets/image/img2.webp"
import Img3 from "../assets/image/img4.webp"
import Img4 from "../assets/image/Imgfilter1.webp"
import axios from 'axios'
import { getCategory } from '../apis/category'

const Home = () => {

  const bannersection = useRef(null);
  const photocardsection = useRef(null)

  return (
    <React.Fragment>

      <Banner section1Ref={bannersection} />
      <br /><br />

      <SurityCards section1Ref={bannersection} />
      <br /><br />

      <PhotosCards photocardsection={photocardsection} />

      <FilterProducts photocardsection={photocardsection} />
      <br /><br />


      <Advertisement />
      <br /><br />

      <Fromourblog />
      <br /><br />

    </React.Fragment>
  )
}

const Banner = ({ section1Ref }) => {
 
  const handleClick = () => {
    section1Ref.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="banner_stl">
      <div className="container">
        <div className="row py-4">
          <div className="col-md-6 order-md-1 order-2 d-flex align-items-center">
            <div className="d-grid">
              <div className="h1 text-center text-white fw-bold">MAN </div>
              <div className="fs-3 text-center text-white">Formal Blezzers</div>
              <div className="fs-3 text-center text-white">i Am lucky for using your website</div>
              <div className="banner_btn my-3 text-center">
                <Link to="/" onClick={() => handleClick()} className="fs-5 p-2 text-center btn btn-outline-light rounded-3">Get Started</Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 order-1 order-md-2">
            <img src={logo} className="img-fluid" alt="" />
            {/* width="650" */}
          </div>
        </div>
      </div>
    </div>
  )
}

const SurityCards = ({ section1Ref }) => {
  return (
    <div className="container-fluid" ref={section1Ref}>
      <div className="row justify-content-center my-3 p-3">
        <div className="col-lg-3 col-md-6 col-sm-12 my-1">
          <div className="card border-0 rounded-3 shadow p-3 surity-card-hover" style={{ height: "14.5rem" }}>
            <div className="card-body">
              <div className='fw-bold text-center my-2 py-2'> <i className="fs-5 fa-solid fa-arrow-right-arrow-left"></i> </div>
              <h5 className="card-title text-center h5 py-2">30 DAYS RETURN</h5>
              <p className="card-text text-center fs-6 py-2">Simply return it within 30 days for an exchange.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 my-1">
          <div className="card border-0 rounded-3 shadow p-3 surity-card-hover" style={{ height: "14.5rem" }}>
            <div className="card-body">
              <div className='fw-bold text-center my-2 py-2'> <i className="fs-5 fa-solid fa-truck-fast"></i> </div>
              <h5 className="card-title text-center h5 py-2">FREE US DELIVERY</h5>
              <p className="card-text text-center fs-6 py-2">On orders over $200! Hey Do you wanna try</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 my-1">
          <div className="card border-0 rounded-3 shadow p-3 surity-card-hover" style={{ height: "14.5rem" }}>
            <div className="card-body">
              <div className='fw-bold text-center my-2 py-2'> <i className="fs-5 fa-solid fa-phone"></i> </div>
              <h5 className="card-title text-center h5 py-2">SUPPORT 24/7</h5>
              <p className="card-text text-center fs-6 py-2">Contact us 24 hours a day, 7 days a week</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


const PhotosCards = ({ photocardsection }) => {
  const handleClick = () => {
    photocardsection.current.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <div className="container-fluid">
      <div className="row justify-content-center m-0">
        <div className="col-md">
          <div className="card border-0">
            <div className="card-body">
              <div className='position-relative'>
                <div className='mb-5 photocard_text w-100 bottom-0 fs-3'>
                  <span className='text-center text-photo-cards' onClick={() => handleClick()}>T-SHIRTS</span>
                </div>
                <img src={Img1} alt="Image1" onClick={() => handleClick()} className="img-fluid w-100 img-photo-cards" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md">
          <div className="card border-0">
            <div className="card-body">
              <div className='mb-5 photocard_text w-100 bottom-0 fs-3'>
                <span className='text-center text-photo-cards' onClick={() => handleClick()}>JEANS</span>
              </div>
              <img src={Img2} alt="Image2" className="img-fluid w-100 img-photo-cards" onClick={() => handleClick()} />
            </div>
          </div>
        </div>
        <div className="col-md">
          <div className="card border-0">
            <div className="card-body">
              <div className='mb-5 photocard_text w-100 bottom-0 fs-3'>
                <span className='text-center text-photo-cards' onClick={() => handleClick()}>Sweater</span>
              </div>
              <img src={Img3} alt="Image3" className="img-fluid w-100 img-photo-cards" onClick={() => handleClick()} />
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

const FilterProducts = ({ photocardsection }) => {

  const [data, setData] = useState([]);
  const [products, setProduct] = useState([]);

  useEffect(() => {
    handleClick("Jeans")
    getCategory().then((res) => setData(res.data)).catch((err) => console.log(err))
  }, [])

  const handleClick = (type) => {
    const matchedProducts = data.filter((d) => type === d.category);
    if (matchedProducts.length > 0) {
      setProduct(matchedProducts);
    } else {
      console.log("No products found for this category.");
    }
  }

  console.log(products, "ppp");
  return (
    <>
      <div className="container p-3" ref={photocardsection}>

        {/* Heading  */}
        <div className='text-center pt-5 fs-2 fw-bold'>SELECT YOUR CHOICE</div>

        {/* Containers Tabs */}
        <nav className='position-relative mt-5 container'>
          <div className="nav nav-tabs border-0 d-flex justify-content-center pt-3" id="nav-tab" role="tablist">

            <button className="nav-link  text-dark filter-tab fs-6 m-3" onClick={() => handleClick("Jeans")} id="nav-newest-tab" data-bs-toggle="tab" data-bs-target="#nav-newest" type="button" role="tab" aria-controls="nav-newest" aria-selected="true">Jeans</button>

            <button className="nav-link text-dark filter-tab fs-6 m-3" onClick={() => handleClick("T-Shirt")} id="nav-best-tab" data-bs-toggle="tab" data-bs-target="#nav-best" type="button" role="tab" aria-controls="nav-best" aria-selected="false">T-Shirt</button>

            <button className="nav-link text-dark filter-tab fs-6 m-3" onClick={() => handleClick("Blazer")} id="nav-onsale-tab" data-bs-toggle="tab" data-bs-target="#nav-onsale" type="button" role="tab" aria-controls="nav-onsale" aria-selected="false"> Blazer </button>

          </div>
        </nav>

        <div className="tab-content" id="nav-tabContent">
          {/* Newest Arrivals */}
          <div className="tab-pane fade show active" id="nav-newest" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
            <div className="card border-0">
              <div className="card-body">
                <div className="row">

                  {
                    products && products.map((p) => {
                      return (
                        <Link to={`/singleproduct/${p.id}/${p.category}`} className="col-xl-3 col-lg-4 my-2 col-md-6 col-sm-6 text-decoration-none">
                          <img src={p.img[0]} className="w-100" height="360" alt="Image1" />
                          <div className='product_details'>
                            <div className='fs-6 p-1 text-dark'>  {p.title} </div>
                            <p className='px-1 text-dark fw-bold'>₹ {p.price}</p>
                          </div>
                        </Link>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>


          {/* Best Sellers */}
          <div className="tab-pane fade" id="nav-best" role="tabpanel" aria-labelledby="nav-best-tab" tabindex="0">
            <div className="card border-0">
              <div className="card-body">
                <div className="row">
                  {
                    products && products.map((p) => {
                      return (
                        <Link to={`/singleproduct/${p.id}/${p.category}`} className="col-xl-3 col-lg-4 my-2 col-md-6 col-sm-6 text-decoration-none">
                          <img src={p.img[0]} className="w-100" height="360" alt="Image1" />
                          <div className='product_details'>
                            <div className='fs-6 p-1 text-dark'>  {p.title} </div>
                            <p className='px-1 text-dark fw-bold'>₹ {p.price}</p>
                          </div>
                        </Link>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>


          {/* On Sale */}
          <div className="tab-pane fade" id="nav-onsale" role="tabpanel" aria-labelledby="nav-onsale-tab" tabindex="0">
            <div className="card border-0">
              <div className="card-body">
                <div className="row">
                  {
                    products && products.map((p) => {
                      return (
                        <Link to={`/singleproduct/${p.id}/${p.category}`} className="col-xl-3 col-lg-4 my-2 col-md-6 col-sm-6 text-decoration-none">
                          <img src={p.img[0]} className="w-100" height="360" alt="Image1" />
                          <div className='product_details'>
                            <div className='fs-6 p-1 text-dark'>  {p.title} </div>
                            <p className='px-1 text-dark fw-bold'> ₹ {p.price}</p>
                          </div>
                        </Link>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

const Advertisement = () => {
  const [username, setusername] = useState()
  const url = "https://www.instagram.com/shubhav_22/"
  
  useEffect(() => {
    const usernameRegex = /\/([^\/]+)\/$/;
    const match = url.match(usernameRegex);

    if (match && match[1]) {
      setusername(match[1])
    }

  }, [])

  return (
    <div className='advertisement_color'>
      <div className="container py-5">
        <div className="row p-3">
          <div className="col-md-5 order-md-1 order-2">
            <div className='fs-2 fw-bold'>Follow us on Instagram</div>
            <p className='my-3 fs-5 text-danger fw-bold insta_username'>{username}</p>
            <p className='fs-6 pt-3'>Contemporary wardrobe staples and authentic style for the modern man and women. Follow us for the latest trends.</p>
            <p>Tag us and get featured @vinovatheme</p>
            <Link to={url} className="btn btn-dark mb-4">Follow</Link>
          </div>
          <div className='col-md-1'></div>
          <div className="col-md-5 order-md-2 order-1">
            <div className='mb-4'>
              <img src={Img1} alt="Image1" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


const Fromourblog = () => {
  return (
    <div className='container'>
      <div className='text-center mt-4 fs-2 fw-bold'>FROM OUR BLOG</div>

      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className='card border-0'>
              <div className='row text-start p-5'>

                <div className='col-md-5 my-3 blog_cards'>
                  <div className='fs-5' style={{ textAlign: "justify" }}> Best purchase I’ve made this winter! The color and knitting are exquisite and it's so comfy! Went from NYC to Miami without ever taking it off. Super cute!! </div>
                  <img src={Img1} height="60" width="60" className='rounded-circle shadow my-2' alt="" />
                  <span className='ms-3 small'>Friena Courses</span>
                </div>
                <div className='col-md-1'></div>

                <div className='col-md-5 my-3 blog_cards'>
                  <div className='fs-5'> Best purchase I’ve made this winter! The color and knitting are exquisite and it's so comfy! Went from NYC to Miami without ever taking it off. Super cute!! </div>
                  <img src={Img2} height="60" width="60" className='rounded-circle shadow my-2' alt="" />
                  <span className='ms-3 small'>Friena Courses </span>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className='card border-0'>
              <div className='row text-start p-5'>
                <div className='col-md-5 my-3 blog_cards'>
                  <div className='fs-5'> Best purchase I’ve made this winter! The color and knitting are exquisite and it's so comfy! Went from NYC to Miami without ever taking it off. Super cute!! </div>
                  <img src={Img1} height="60" width="60" className='rounded-circle shadow my-2' alt="" />
                  <span className='ms-3 small'>Friena Courses</span>
                </div>
                <div className='col-md-1'></div>

                <div className='col-md-5 my-3 blog_cards'>
                  <div className='fs-5'> Best purchase I’ve made this winter! The color and knitting are exquisite and it's so comfy! Went from NYC to Miami without ever taking it off. Super cute!! </div>
                  <img src={Img2} height="60" width="60" className='rounded-circle shadow my-2' alt="" />
                  <span className='ms-3 small'>Friena Courses </span>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className='card border-0'>
              <div className='row text-start p-5'>
                <div className='col-md-5 my-3 blog_cards'>
                  <div className='fs-5'> Best purchase I’ve made this winter! The color and knitting are exquisite and it's so comfy! Went from NYC to Miami without ever taking it off. Super cute!! </div>
                  <img src={Img1} height="60" width="60" className='rounded-circle shadow my-2' alt="" />
                  <span className='ms-3 small'>Friena Courses</span>
                </div>
                <div className='col-md-1'></div>

                <div className='col-md-5 my-3 blog_cards'>
                  <div className='fs-5'> Best purchase I’ve made this winter! The color and knitting are exquisite and it's so comfy! Went from NYC to Miami without ever taking it off. Super cute!! </div>
                  <img src={Img2} height="60" width="60" className='rounded-circle shadow my-2' alt="" />
                  <span className='ms-3 small'>Friena Courses </span>
                </div>
              </div>
            </div>
          </div>

        </div>
        <button className="carousel-control-prev btn btn-dark" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next btn btn-dark" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>

  )
}

export default Home