import React,{useCallback,useState,useEffect} from "react";
import { Helmet } from "react-helmet";
import './css/style2.css'

function Car(){
    const [cars, setCars] = useState([]); 
    const [driverType, setDriverType] = useState('') 
    const [date, setDate] = useState(''); 
    const [time, setTime] = useState('') 
    const [capacity, setCapacity] = useState(0); 
    const [displayCars, setDisplayCars] = useState([]); 
 
    const populateCars = useCallback((cars) => { 
        return cars.map((car) => { 
            const isPositive = getRandomInt(0, 1) === 1; 
            const timeAt = new Date(); 
            const mutator = getRandomInt(1000000, 100000000); 
            const availableAt = new Date(timeAt.getTime() + (isPositive ? mutator : -1 * mutator)); 
            return { 
                ...car, 
                availableAt, 
                 
            }; 
        }); 
    }, []); 
 
    useEffect(()=>{ 
        fetch('https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json') 
        .then((response)=> response.json()) 
        .then((data)=>{ 
            const newData = populateCars(data) 
            setCars(newData); 
        }) 
        .catch((err)=>{ 
        console.log(err) 
        }) 
    },[populateCars]); 
 
    function getRandomInt(min, max) { 
        min = Math.ceil(min); 
        max = Math.floor(max); 
        return Math.floor(Math.random() * (max - min + 1)) + min; 
    } 
     
    const handleSearchCar = () => { 
        const dateTime = new Date(`${date} ${time}`); 
            const filtercars = cars.filter((item)=>(item.capacity >= capacity && item.availableAt <= dateTime && item.available === true)); 
            setDisplayCars(filtercars); 
         
    } 
 
    const handleReset = () => { 
        setDisplayCars([]); 
        setDate(''); 
        setTime(''); 
        setCapacity(''); 
        setDriverType(''); 
         
    }
    return (
<>
<header className="background1">
  <nav className="navbar navbar-expand-lg fixed-top navcolor">
      <div className="container-lg my-1 ">
        <a className="navbar-brand logo" href="##">
          Binar Rental
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBothOptions"
          aria-controls="offcanvasWithBothOptions"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="offcanvas offcanvas-end"
          data-bs-scroll="true"
          tabIndex={-1}
          id="offcanvasWithBothOptions"
          aria-labelledby="offcanvasWithBothOptionsLabel"
        >
          <div className="offcanvas-header">
            <h5 className="navbar-judul">BCR</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav ms-lg-auto mb-2 ms-0">
              <li className="nav-item pe-4">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#ourService"
                >
                  Our Service
                </a>
              </li>
              <li className="nav-item pe-4">
                <a className="nav-link active" href=" #whyus">
                  Why Us
                </a>
              </li>
              <li className="nav-item pe-4">
                <a className="nav-link active" href=" #testimonial">
                  Testimonial
                </a>
              </li>
              <li className="nav-item pe-4">
                <a className="nav-link active" href=" #faq">
                  FAQ
                </a>
              </li>
              <li className="nav-item pe-4 my-2 my-lg-0">
                <a href="##">
                  <button type="button" className="btn btn-success nav-button">
                    Register
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </nav>
    <br />
    <br />
    <br />
    <br />
    <div className="container-lg">
      <div className="row">
        <div className="col-lg-6 col-sm-12  mt-5">
          <div className=" as ">
            <h1 className="jh1 mb-xl-3">
              Sewa &amp; Rental Mobil Terbaik di Kawasan Tangsel{" "}
            </h1>
            <p className="jp pe-4  w-75">
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam
            </p>
            <br />
            <a href="/">
              <button className="btn btn-success header-button">
                Mulai Sewa Mobil
              </button>
            </a>
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
        <div className="col-lg-6 col-sm-12 ">
          <img src="images/img_car.png" alt="" className=" w-100" />
        </div>
      </div>
    </div>
  </header>
   <div className="kotak">
        <form action=""  style={{margin: "20px"}}>
            <div className="row d-flex justify-content-lg-between">
                <div className="col">
                    <label className="label">Tipe Driver</label>
                    <select className="form" name="" id="tipedriver">
                        <option value={driverType} onChange={(e)=>setDriverType(e.target.value)}>Dengan Sopir</option>
                        <option value="">Tanpa Sopir</option>
                    </select>
                </div>
                <div className="col">
                    <label className="label">Tanggal</label>
                    <input type="date" className="form" id="tanggal" value={date} onChange={(e)=>setDate(e.target.value)}/>
                </div>
                <div className="col">
                    <label className="label">Waktu Jemput/Ambil</label>
                    <input type="time" className="form" id="waktu" value={time} onChange={(e)=>setTime(e.target.value)}/>
                </div>
                <div className="col">
                    <label className="label">Jumlah Penumpang (Optional)</label>
                    <input type="text" className="form" id="jumlah" value={capacity} onChange={(e)=>setCapacity(e.target.value)}/>
                </div>
                <div className="col-1">
                    <button className="btn btn-success header-button but" type="button" id="cari" onClick={handleSearchCar}>Cari Mobil</button>
                    <button className="btn btn-success header-button but" id="clear" onClick={handleReset} type="reset">Clear</button>
                </div>
            </div>  
        </form>
        {
            
        }
    </div>
    <section className="container-lg mt-5" style={{margin: "150px"}}> <br /><br /><br />
    <div 
      className="row row-cols-auto justify-content-center ms-auto me-auto d-flex cars-content" 
      id="cc" 
    > 
      { 
                    displayCars.length > 0 ? ( 
                        displayCars.map((item)=>( 
                            <div className="card kartu col-4" style={{maxWidth: "20rem", marginRight:'30px', marginBottom: '50px'}} key={item.id}> 
                                <img src= {item.image} className="card-img-top img-fluid" alt={item.image} style={{height: '190px', objectFit: 'cover'}} /> 
                                <div style={{padding:"28.17px"}}> 
                                    <p className="judul-card">{item.manufacture} / {item.model}</p> 
                                    <h5 className="card-title">Rp.{item.rentPerDay}/Hari</h5> 
                                    <p className="" style={{minHeight:"100px"}}>{item.description}</p> 
                                    <div className="my-2"><i className="bi bi-people me-2"></i>{item.capacity} Orang</div> 
                                    <div className="my-2"><i className="bi bi-gear me-2"></i> {item.transmission}</div> 
                                    <div className="my-2"><i className="bi bi-calendar4 me-2"> {item.year}</i></div> 
                                    <a href="##" className="btn btn-success text-white w-100 mt-2 fw-bold mt-4" style={{fontSize: "14px"}}>Pilih Mobil</a>       
                                </div> 
                            </div>     
                        ))) : <h1>Mobil tidak ditemukan</h1> 
                } 
    </div> 
  </section>

  <div className="container font" style={{ marginTop: "100px" }}>
      <div className="row">
        <div className="col-md-3 col-sm-12">
          <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
          <p>binarcarrental@gmail.com</p>
          <p>081-233-334-808</p>
        </div>
        <div className="col-md-3 col-sm-12">
          <b>
            <p>Our services</p>
            <p>Why Us</p>
            <p>Testimonial</p>
            <p>FAQ</p>
          </b>
        </div>
        <div className="col-md-3 col-sm-12">
          <p>Connect with us</p>
          <img src="images/icon_facebook.png" alt="" />
          <img src="images/icon_instagram.png" alt="" />
          <img src="images/icon_twitter.png" alt="" />
          <img src="images/icon_mail.png" alt="" />
          <img src="images/icon_twitch.png" alt="" />
        </div>
        <div className="col-md-3 col-sm-12">
          <p>Copyright Binar 2022</p>
          <p>BINAR CAR RENTAL</p>
        </div>
      </div>
    </div>
  </>
    )
}
export default Car