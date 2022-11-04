import React from "react";
import { Helmet } from "react-helmet";
import './css/style1.css'

function Index(){
    return (
        <>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n  .testimonial{\n  font-family: 'Helvetica';\n  font-style: normal;\n  text-align: center;\n  color: #000000;\n  margin-top: 100px;\n  padding-top: 100px;\n}   \n\n.owl-carousel .item {\n\n  justify-content: center;\n\n}\n\n.testimonial-h1{\n  font-weight: 700;\n  font-size: 24px;\n  line-height: 36px;\n}\n\n.testimonial-p{\n  font-weight: 300;\n  font-size: 14px;\n  line-height: 20px;\n}\n\n.item {\nwidth: 619px;\n  text-align: center;\n  justify-content: center;\n  font-size: 2rem;\n  margin: 10px;\n  min-height: 270px;\nbackground: #F1F3FF;\nbox-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);\nborder-radius: 8px;\nmin-height: 280px;\n}\n\n\n.testimonial-foto{\n  max-width: 80px;\n  height: 80px;\n  margin-top: 100px;\n  margin-left: 1000px;\n}\n\n.bintang{\n  max-width: 16px;\n}\n\n.testi{\n  padding-top: 12%;\n}\n\n.testi-paragraf{\n  width: 80%;\n}\n\n.testimonial-hasil{\nmax-width: 415px;\nmin-height: 80px;\nfont-family: 'Helvetica';\nfont-style: normal;\nfont-weight: 300;\nfont-size: 14px;\nline-height: 20px;\ncolor: #000000;\nflex: none;\norder: 1;\nflex-grow: 0;\ntext-align: left;\npadding-top: 10px;\n}\n\n.testimonial-name{\nflex: none;\nfont-size: 14px;\nfont-family: 'Helvetica';\nfont-weight: bold;\ntext-align: left;\nmax-width: 300px;\n}\n\n.kiri,.kanan{\n  background-color: white;\n}\n\n.owl-theme .owl-nav [class*=owl-]{\n  color: #FFF;\n  font-size: 14px;\n  background: #ffffff;\n  display: inline-block;\n\n}\n"
    }}
  />
  {/* NAVBAR */}
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
            <a href="/car">
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
  {/* OUR SERVICES */}
  <div className="container" id="ourservices">
    <div className="row">
      <div className="col-xl-6">
        <img
          src="images/img_service.png"
          alt=""
          className="imgservice w-75"
          style={{ marginTop: "100px" }}
        />
      </div>
      <div className="col-xl-6">
        <p className="bestcar" />
        <h3>
          <b>
            Best Car Rental for any kind of trip in
            <br />
            Tangsel!
          </b>
        </h3>
        <br />
        <p className="sewamobil">
          Sewa mobil di Tangsel bersama Binar Car Rental <br />
          jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru,{" "}
          <br />
          serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
          wedding, meeting, dll.
        </p>
        <br />
        <div className="ourservice">
          <p>
            <img src="images/Group53.png" alt="" className="img" />
            Sewa Mobil Dengan Supir di Tnngsel 12 Jam
          </p>
          <p>
            <img src="images/Group53.png" alt="" className="img" />
            Sewa Mobil Lepas Kunci di Bali 24 Jam
          </p>
          <p>
            <img src="images/Group53.png" alt="" className="img" />
            Sewa Mobil Jangka Panjang Bulanan
          </p>
          <p>
            <img src="images/Group53.png" alt="" className="img" />
            Gratis Antar - Jemput Mobil di Bandara
          </p>
          <p>
            <img src="images/Group53.png" alt="" className="img" />
            Layanan Airport Transfer / Drop In Out
          </p>
        </div>
      </div>
    </div>
  </div>
  {/* WHY US  */}
  <div className="container" id="whyus" style={{ paddingTop: "100px" }}>
    <h2 style={{ fontFamily: '"Helvetica"' }}>
      {" "}
      <b> Why Us </b>
    </h2>
    <p style={{ fontFamily: '"Helvetica"' }}>
      Mengapa harus pilih Binar Car Rental?
    </p>
    <br />
    <div className="row">
      <div className="col">
        <div className="card" style={{ width: "230px" }}>
          <div className="card-body">
            <img
              src="images/icon_complete.png"
              alt=""
              style={{ paddingBottom: "10px" }}
            />
            <h5 className="card-title" style={{ paddingBottom: "10px" }}>
              Mobil Lengkap
            </h5>
            <p className="card-text" style={{ fontFamily: '"Helvetica"' }}>
              Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
              terawat.
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card" style={{ width: "230px" }}>
          <div className="card-body">
            <img
              src="images/icon_price.png"
              alt=""
              style={{ paddingBottom: "10px" }}
            />
            <h5 className="card-title" style={{ paddingBottom: "10px" }}>
              Harga Murah
            </h5>
            <p className="card-text" style={{ fontFamily: '"Helvetica"' }}>
              Harga murah dan bersaing, bisa bandingkan harga kami dengan rental
              mobil lain.
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card" style={{ width: "230px" }}>
          <div className="card-body">
            <img
              src="images/icon_24hrs.png"
              alt=""
              style={{ paddingBottom: "10px" }}
            />
            <h5 className="card-title" style={{ paddingBottom: "10px" }}>
              Layanan 24 Jam
            </h5>
            <p className="card-text" style={{ fontFamily: '"Helvetica"' }}>
              Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
              tersedia di akhir minggu.
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card" style={{ width: "230px" }}>
          <div className="card-body">
            <img
              src="images/icon_professional.png"
              alt=""
              style={{ paddingBottom: "10px" }}
            />
            <h5 className="card-title" style={{ paddingBottom: "10px" }}>
              Sopir Profesional
            </h5>
            <p className="card-text" style={{ fontFamily: '"Helvetica"' }}>
              Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
              tepat waktu.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* TESTIMONIAL */}
  <section className="testimonial position-relative my-5" id="testimonial">
    <h1 className="testimonial-h1 text-center">Testimonial</h1>
    <p className="testimonial-p">
      Berbagai review positif dari para pelanggan kami
    </p>
    <div className="owl-carousel owl-theme">
      <div className="item">
        <div className="row">
          <div className="col-sm-3 col-xs-12">
            <img
              src="images/img_photo.png"
              alt=""
              className="testimonial-foto ms-sm-5 d-inline ms-auto me-auto"
            />
          </div>
          <div className="col-sm-9 testi col-xs-12">
            <div className="d-flex flex-row justify-content-sm-start justify-content-center">
              <img src="images/Star1.png" alt="" className="bintang " />
              <img src="images/Star1.png" alt="" className="bintang " />
              <img src="images/Star1.png" alt="" className="bintang " />
              <img src="images/Star1.png" alt="" className="bintang " />
              <img src="images/Star1.png" alt="" className="bintang " />
            </div>
            <div className="testi-paragraf d-block ms-auto me-auto ms-sm-0 me-sm-0">
              <p className="testimonial-hasil">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod”
              </p>
              <p className="testimonial-name">John Dee 32, Bromo</p>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="row">
          <div className="col-sm-3 col-xs-12">
            <img
              src="images/img_photo.png"
              alt=""
              className="testimonial-foto ms-sm-5 d-inline ms-auto me-auto"
            />
          </div>
          <div className="col-sm-9 testi col-xs-12">
            <div className="d-flex flex-row justify-content-sm-start justify-content-center">
              <img src="images/Star1.png" alt="" className="bintang " />
              <img src="images/Star1.png" alt="" className="bintang " />
              <img src="images/Star1.png" alt="" className="bintang " />
              <img src="images/Star1.png" alt="" className="bintang " />
              <img src="images/Star1.png" alt="" className="bintang " />
            </div>
            <div className="testi-paragraf d-block ms-auto me-auto ms-sm-0 me-sm-0">
              <p className="testimonial-hasil">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod”
              </p>
              <p className="testimonial-name">John Dee 32, Bromo</p>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="row">
          <div className="col-sm-3 col-xs-12">
            <img
              src="images/img_photo.png"
              alt=""
              className="testimonial-foto ms-sm-5 d-inline ms-auto me-auto"
            />
          </div>
          <div className="col-sm-9 testi col-xs-12">
            <div className="d-flex flex-row justify-content-sm-start justify-content-center">
              <img src="images/Star1.png" alt="" className="bintang " />
              <img src="images/Star1.png" alt="" className="bintang " />
              <img src="images/Star1.png" alt="" className="bintang " />
              <img src="images/Star1.png" alt="" className="bintang " />
              <img src="images/Star1.png" alt="" className="bintang " />
            </div>
            <div className="testi-paragraf d-block ms-auto me-auto ms-sm-0 me-sm-0">
              <p className="testimonial-hasil">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod”
              </p>
              <p className="testimonial-name">John Dee 32, Bromo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="slider_nav position-absolute">
      <img src="images/Left_button.png" alt="" className="kiri" />
      <img src="images/Right_button.png" alt="" className="kanan" />
    </div>
    <Helmet> 
    <script type="text/javascript">{` 
    /* eslint-env jquery */ 
        $('.owl-carousel').owlCarousel({ 
            loop: true, 
 
            rtl: false, 
            lazyLoad: true, 
            navText: [$('.kiri'), $('.kanan')], 
            nav: [$('.nav-slider')], 
 
            nav: true, 
            responsive: { 
                0: { 
                    items: 1, 
                    stagePadding: 2, 
                    margin: 100 
                }, 
                600: { 
                    items: 1, 
                    stagePadding: 28, 
                    margin: 100 
                }, 
                800: { 
                    items: 1, 
                    stagePadding: 130, 
                    margin: 100 
                }, 
                1000: { 
                    items: 1, 
                    stagePadding: 230, 
                    margin: 100 
                }, 
                1200: { 
                    items: 1, 
                    stagePadding: 280 
                }, 
                1400: { 
                    items: 1, 
                    margin: 100, 
                    stagePadding: 440 
                }, 
                1600: { 
                    items: 1, 
                    margin: 10, 
                    stagePadding: 490 
                }, 
                1800: { 
                    items: 1, 
                    margin: 100, 
                    stagePadding: 650 
                } 
            } 
        }) 
    `}</script> 
    </Helmet>
  </section>
  {/* LOREM IPSUM */}
  <div className="container font">
    <div className="rectangle">
      <br />
      <br />
      <br />
      <br />
      <div className="jakarta">
        <center>
          <h1>Sewa Mobil di Tangsel Sekarang</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod <br />
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button type="button" className="btn btn-success">
            Mulai Sewa Mobil
          </button>
        </center>
      </div>
    </div>
  </div>
  {/* FAQ */}
  <div className="container font" id="faq" style={{ paddingTop: "100px" }}>
    <div className="row">
      <div className="col-sm-12 col-md-6">
        <h3>
          <b>Frequently Asked Question</b>
        </h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>
      <div className="col-sm-12 col-md-6">
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Apa saja syarat yang dibutuhkan?
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                first item's accordion body.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Berapa hari minimal sewa mobil lepas kunci?
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                second item's accordion body. Let's imagine this being filled
                with some actual content.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Berapa hari sebelumnya sabaiknya booking sewa mobil?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                third item's accordion body. Nothing more exciting happening
                here in terms of content, but just filling up the space to make
                it look, at least at first glance, a bit more representative of
                how this would look in a real-world application.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseFour"
              >
                Apakah Ada biaya antar-jemput?
              </button>
            </h2>
            <div
              id="flush-collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingFour"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                third item's accordion body. Nothing more exciting happening
                here in terms of content, but just filling up the space to make
                it look, at least at first glance, a bit more representative of
                how this would look in a real-world application.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFive"
                aria-expanded="false"
                aria-controls="flush-collapseFive"
              >
                Bagaimana jika terjadi kecelakaan?
              </button>
            </h2>
            <div
              id="flush-collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingFive"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                third item's accordion body. Nothing more exciting happening
                here in terms of content, but just filling up the space to make
                it look, at least at first glance, a bit more representative of
                how this would look in a real-world application.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* FOOTER  */}
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
  </div>
</>

    )
}
export default Index