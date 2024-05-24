import React, { useState } from 'react'
import "../assets/css/checkout.css"
import { useNavigate } from 'react-router-dom';

export const Checkout = () => {
    const [isContactVisible, setIsContactVisible] = useState(true);
    const [isShippingVisible, setIsShippingVisible] = useState(false);
    const [isPaymentVisible, setIsPaymentVisible] = useState(false);

    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [customername, setCustomerName] = useState('');
    const [address, setAddress] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('India');
    const [city, setCity] = useState('');
    const [postalcode, setPostalCode] = useState('');
    const [cardnumber, setCardNumber] = useState('');
    const [cardname, setCardName] = useState('');
    const [expirydate, setExpiryDate] = useState('');
    const [cvc, setCVC] = useState('');
    const [cntctmsg, setCntctmsg] = useState(false)
    const [shpngmsg, setShpngmsg] = useState(false)
    const [pymntmsg, setPymntmsg] = useState(false)
    const [cntcterr, setCntcterr] = useState(false)
    const [shpngerr, setShpngerr] = useState(false)
    const [pymnterr, setPymnterr] = useState(false)
    const [ordplcd, setOrdplcd] = useState(true)
    const navigate = useNavigate()

    const handlePlaceOrder = () => {
        console.log(email, mobile);

        if (email && mobile) {
            console.log(email, mobile);
            setCntctmsg(true)
            setCntcterr(false)
        } else {
            console.log('contact details ervalidatipn');
            setCntcterr(true)
            setCntctmsg(false)
        }


        if (customername && address && state && country && city && postalcode) {
            console.log(customername, address, state, country, city, postalcode);
            setShpngerr(false)
            setShpngmsg(true)
        } else {
            setShpngerr(true)
            setShpngmsg(false)
            console.log("Shipping data validation");
        }

        if (cardnumber && cardname && expirydate && cvc) {
            console.log(cardnumber, cardname, expirydate, cvc);
            setPymnterr(false)
            setPymntmsg(true)
        }
        else {
            setPymnterr(true)
            setPymntmsg(false)
            console.log("Contact Details Validation")
        }

        if (email && mobile && customername && address && state && country && city && postalcode && cardnumber && cardname && expirydate && cvc) {
            
            navigate("/delivered")

        }
    }

    return (
        <>
            <h2 className="checkout-heading my-5">CHECKOUT</h2>

            <div className='container'>
                <div className='row my-5 justify-content-center'>

                    <div className='col-md-5'>

                        {/* Contact */}
                        <div className='d-flex justify-content-between p-3'>

                            <div className='fs-5'><i className="fa-regular fa-address-book fs-5 px-3"></i> Contact {cntctmsg ? <i class="fa-solid fa-check-double mx-2 text-success fs-4"></i> : ""} {cntcterr ? <i class="fa-solid fa-exclamation text-danger ms-3 fs-4"></i> : ""}       </div>
                            <button className='btn fw-normal text-center btn-outline-dark' onClick={() => setIsContactVisible(!isContactVisible)}>Change</button>
                        </div>
                        {
                            isContactVisible && (
                                <div className='py-4'>
                                    <div className='form-label'>Mobile Number </div>
                                    <input type="number" className='input-field' value={mobile} onChange={(e) => setMobile(e.target.value)} />

                                    <div className='form-label mt-4'>Email</div>
                                    <input type="email" className='input-field' value={email} onChange={(e) => setEmail(e.target.value)} />

                                </div>
                            )
                        }
                        <hr />

                        {/* Shipping */}
                        <div className='d-flex justify-content-between p-3'>
                            <div className='fs-5'><i className="fa-regular fa-address-book fs-5 px-3"></i> Shipping  {shpngmsg ? <i class="fa-solid fa-check-double mx-2 text-success fs-4"></i> : ""} {shpngerr ? <i class="fa-solid fa-exclamation text-danger ms-3 fs-4"></i> : ""}           </div>
                            <button className='btn fw-normal text-center btn-outline-dark' onClick={() => setIsShippingVisible(!isShippingVisible)}>Change</button>
                        </div>
                        {
                            isShippingVisible && (
                                <div className='py-4'>
                                    <div className='form-label'>Name </div>
                                    <input type="text" className='input-field' value={customername} onChange={(e) => setCustomerName(e.target.value)} />

                                    <div className='form-label mt-4'>Address</div>
                                    <input type="text" className='input-field' value={address} onChange={(e) => setAddress(e.target.value)} />

                                    <div className='form-label mt-4'>Country</div>
                                    <input type="text" className='input-field' disabled value={country} />

                                    <div className='form-label mt-4' >State</div>
                                    <select className='input-field bg-white' value={state} onChange={(e) => setState(e.target.value)}>
                                        <option>  Select State </option>
                                        <option>  Utter Pradesh </option>
                                    </select>

                                    <div className='form-label mt-4'>City</div>
                                    <select className='input-field bg-white' value={city} onChange={(e) => setCity(e.target.value)}>
                                        <option>   Select City </option>
                                        <option>  New Delhi </option>
                                    </select>

                                    <div className='form-label mt-4' value={postalcode} >Postal Code</div>
                                    <input type="number" className='input-field' onChange={(e) => setPostalCode(e.target.value)} />
                                </div>
                            )
                        }
                        <hr />

                        {/* Payment */}

                        <div className='d-flex justify-content-between p-3'>
                            <div className='fs-5'><i className="fa-regular fa-address-book fs-5 px-3"></i> Payment {pymntmsg ? <i class="fa-solid fa-check-double mx-2 text-success fs-4"></i> : ""} {pymnterr ? <i class="fa-solid fa-exclamation text-danger ms-3 fs-4"></i> : ""}      </div>
                            <button className='btn fw-normal text-center btn-outline-dark' onClick={() => setIsPaymentVisible(!isPaymentVisible)}>Change</button>
                        </div>
                        {
                            isPaymentVisible && (
                                <div className='py-4'>
                                    <div className='form-label'>Card Number </div>
                                    <input type="text" className='input-field' value={cardnumber} onChange={(e) => setCardNumber(e.target.value)} />

                                    <div className='form-label mt-4'>Name on Card</div>
                                    <input type="text" className='input-field' value={cardname} onChange={(e) => setCardName(e.target.value)} />

                                    <div className='d-flex justify-content-between'>

                                        <div className='me-3'>
                                            <div className='form-label mt-4'>Expiry Date</div>
                                            <input type="text" className='input-field' value={expirydate} onChange={(e) => setExpiryDate(e.target.value)} />
                                        </div>
                                        <div className='ms-2'>
                                            <div className='form-label mt-4'>CVC</div>
                                            <input type="number" className='input-field' value={cvc} onChange={(e) => setCVC(e.target.value)} />
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                        <div className='d-flex justify-content-center my-5'>
                            <button className='btn btn-dark rounded-0 py-2 my-3' onClick={handlePlaceOrder}>Place Order</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}



