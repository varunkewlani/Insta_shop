import React, { useEffect, useRef, useState } from 'react'
import "../assets/css/singleproduct.css"
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'

export const SingleProduct = () => {

    const params = useParams()
    const [data, setData] = useState([])
    const [commentslist, setCommentList] = useState([])
    const [loading, setLoading] = useState(false)

    const url = `http://localhost:8000/product/` + params.id
    const urlList = `http://localhost:8000/product`
    const commenturl = "http://localhost:8000/comment"
    const carturl = "http://localhost:8000/cart"

    useEffect(() => {

        setLoading(true)
        setTimeout(() => {
            axios.get(url).then((res) => {
                setData(res.data)
                setLoading(false)
            }).catch((e) => console.log(e))
        }, 1000);

        axios.get(commenturl).then((res) => {
            setCommentList(res.data)
        }).catch((e) => console.log(e))
    }, [data.length])

    return (
        <>
            {loading ?
                    <div className="loading-spinner py-5 my-5">
                        <div class="spinner-grow text-primary mx-2" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                        <div class="spinner-grow text-secondary mx-2" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                        <div class="spinner-grow text-success mx-2" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                        <div class="spinner-grow text-danger mx-2" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                        <div class="spinner-grow text-warning mx-2" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                        <div class="spinner-grow text-info mx-2" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                        <div class="spinner-grow text-dark mx-2" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                    :
                    <div className='container'>
                    <div className='row my-5'>
                        <div className='col-md-6'>
                            <LeftSide data={data.img} />
                        </div>
                        <div className='col-md-6'>
                            <RightSide data={data} carturl={carturl} />
                        </div>
                    </div>
                    <ProductReview commentslist={commentslist} commenturl={commenturl} />

                    <br />
                    <h2 className="single_category-heading my-5">Related Product</h2>

                    <RelatedProduct url={urlList} brands={data.brand} />
                </div>
            }
        </>
    )
}


const RelatedProduct = ({ url, brands }) => {
    const [rltdprdct, setRltdprdct] = useState()

    const relativeapi = () => {
        axios.get(url).then((res) => {
            setRltdprdct(res.data)
        })
    }

    useEffect(() => {
        relativeapi()
    }, [])

    return (
        <>
            <div className="row">
                {rltdprdct ? rltdprdct && rltdprdct && rltdprdct.slice(0, 4).map((d) => {
                    if (d.brand == brands) {
                        return (
                            <div className='col-md-3 my-3 mb-5 single_cat-card'>
                                <div className='card border-0'>
                                    <img src={d.img[1]} alt="product img" />
                                    <div className='ms-1 fs-6 mt-2 single_cat-text'>{d.title}</div>
                                    <div className='small fw-bold m-1'> {d.brand} <span className='small text-secondary ms-2 mt-2'> ${d.price} </span>  </div>
                                </div>
                            </div>
                        )
                    }
                }) : <div className='text-center my-5 fs-4 text-secondary'>No Releted Product</div>
                }
            </div>
        </>
    )
}

const ProductReview = ({ commentslist, commenturl }) => {
    const elementRef = useRef(null)

    const [review, setReview] = useState()
    const [name, setName] = useState()
    const [email, setEmail] = useState()

    const handleComments = () => {
        const data = {
            username: name,
            email: email,
            review: review
        }
        axios.post(commenturl, data).then((res) => console.log(res.data))
    }

    const handleReview = () => {
        console.log(elementRef.current);
        if (elementRef.current) {
            if (elementRef.current.classList.contains('d-none')) {
                elementRef.current.classList.remove('d-none');
            } else {
                elementRef.current.classList.add('animation_trigger');
                elementRef.current.classList.add('d-none');
            }
        }
    }

    return (
        <>
            <div className='d-flex justify-content-between my-5'>
                <div className='text-start fs-2 fw-bold'>Reviews</div>
                <button className='btn btn-dark rounded-0' onClick={handleReview}>Add A Review</button>
            </div>

            {commentslist && commentslist.slice(0, 3).map((c, index) => (
                <div className='my-4' key={index}>
                    <div className='fs-6 fw-bold'>{c.username}</div>
                    <div className='text-secondary small'>{c.email}</div>
                    <div className='fs-6 my-2'>  {c.review.length >= 50 ? c.review.substring(0, 50) + '...' : c.review}</div>
                </div>
            ))}

            <div ref={elementRef} className='d-none'>
                <div className='small my-3  text-secondary'>
                    Your Email Address will be not published. Qequired field are marked.
                </div>
                <div className='fs-6 py-2 mt-3'> Your Review  </div>
                <textarea rows="6" value={review} onChange={(e) => setReview(e.target.value)} className='input-field h-100 rounded-0'></textarea>

                <div className='py-2 mt-3'> Your Name </div>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='input-field' />

                <div className='py-2 mt-3'> Your Email</div>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className='input-field' />

                <button onClick={handleComments} className='btn btn-dark rounded-0 my-3'>Post</button>
            </div>
        </>
    )
}

const LeftSide = ({ data }) => {
    const [activeimg, setActiveimg] = useState(0);
    const imgurl = []

    data && data.map((d, k) => {
        return imgurl.push(d)
    })

    const HandlePrev = () => {
        setActiveimg(!activeimg ? imgurl.length - 1 : activeimg - 1)
    }

    const HandleNext = () => {
        setActiveimg((activeimg + 1) % imgurl.length)
    }

    return (
        <>
            <div className='container'>
                <div className="image-container">
                    <img src={imgurl[activeimg]} alt="Image description" className='img-fluid' />
                    <div className="buttons-wrapper d-flex justify-content-start my-3">
                        <button className="btn btn-outline-dark btn-previous me-2 rounded-0 px-3" onClick={HandlePrev}><i className="fa-solid fa-arrow-left"></i></button>
                        <button className="btn btn-outline-dark btn-next rounded-0 px-3" onClick={HandleNext}><i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>

        </>
    )
}

const RightSide = ({ data, carturl }) => {
    const navigate = useNavigate()
    const colors = data.color
    const quantity = 1
    const { id, title, description, size, color, price, Gender, img, brand } = data

    const cartData = {
        data: data,
        quantity: quantity
    }

    const [cartList, setCartList] = useState([])

    const cartListapi = () => {
        axios.get(carturl).then((res) => {
            setCartList(res.data)
        })
    }

    useEffect(() => {
        cartListapi()
    }, [])

    const addcart = (carturl, cartData) => {
        axios.post(carturl, cartData).then((res) => {
            console.log(res.data);
            navigate("/cart")
        }).catch((e) => alert(e.response.data))
    }

    const handleToCart = () => {
        console.log(cartList);

        if (cartList !== undefined && cartList.length > 0) {
            let isAlreadyInCart = false;

            cartList.forEach((c) => {
                if (cartData.data.id === c.data.id) {
                    console.log("Data is already exists in cart");
                    isAlreadyInCart = true;
                }
            });

            if (!isAlreadyInCart) {
                console.log(cartData, "pppppppp");
                addcart(carturl, cartData);
            }
        } else {
            console.log(cartData, "pppppppp");
            addcart(carturl, cartData);
        }
    };

    return (
        <>
            <div className="card-body product-info">
                <div className="card-title product-brand text-secondary h5">{brand}</div>
                <div className="card-title product-title fs-3 py-2">{title} </div>
                <div className="card-text product-description py-2 mb-2 text-secondary fs-6">
                    {description}
                </div>

                <div className="mb-3 d-flex row">
                    <div className="product-label col-md-3 fs-5">Color:</div>
                    <div className="product-color col-md-9 d-flex flex-grid my-2">
                        {colors && colors.map((c, k) => {
                            return <div style={{ backgroundColor: c }} className='border shadow-sm me-3 rounded-2 p-3 single_cat-card' key={k}></div>
                        })}
                    </div>
                </div>

                <div className="mb-3 row">
                    <span className="col-md-3 product-label fs-5">Size:</span>
                    <span className="col-lg-9 product-size my-2">
                        {size && size.map((s, k) => {
                            return <span className='me-3 border px-3 py-1 '>{s}</span>
                        })}

                    </span>
                </div>

                <div className="mb-3 row">
                    <span className="col-md-3 product-label fs-5">Price:</span>
                    <span className="col-md-9 product-price my-2">₹ {price}</span>
                </div>

                <div className="mb-3 row">
                    <span className="col-md-3 product-label fs-5">Gender:</span>
                    <span className="col-md-9 product-price my-2">{Gender}</span>
                </div>

                <div className="mb-3 row">
                    <span className="col-md-3 product-label fs-5">ProductId:</span>
                    <span className="col-md-9 product-price my-2">{id}</span>
                </div>

                <div className="mb-3 row">
                    <span className="col-md-3 product-label fs-5">Availability:</span>
                    <span className="col-md-9 product-price my-2"> In Stock</span>
                </div>

                <Link to="/cart" type="button" className="btn btn-outline-dark rounded-0 my-2 me-2">
                    Buy Now
                </Link>

                <button type="button" onClick={handleToCart} className="btn btn-outline-dark rounded-0 my-2">
                    Add To Cart
                </button>

            </div>


        </>
    )
}
