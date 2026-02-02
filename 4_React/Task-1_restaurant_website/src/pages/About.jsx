
import img from '../assets/about-img.png'
function About(){


  return(
    <>
    <section className="about-container" style={{backgroundColor:"#03082aff"}}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="img-box d-flex justify-content-center">
              <img src={img} alt="" />
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center flex-column text-white">
            <div>
            <i>We Are Feane</i>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All</p>
            <button className="btn btn-warning rounded-4 px-4">Click Me</button>
            </div>
          </div>
        </div>
        </div>
    </section>
    </>
  )
}

export default About