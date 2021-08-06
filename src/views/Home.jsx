import Logo from '../assets/img/logo.svg'
import Mockup from '../assets/img/illustration-mockups.svg'


const Home = () => {
  return (
    <div className="container-fluid px-4">
      <nav className="brand-bar row justify-content-center">
        <div className="imageContainer col-10 col-md-9 col-lg-11 text-left">
          <img className="image float-start" src={ Logo } alt="Huddle Logo" />
        </div>
      </nav>
      <header className="hero-section">
        <div className="row justify-content-center justify-content-lg-center gx-5">
          <div className="imageContainer col-10 col-md-9 col-lg-6">
            <img className="image img-fluid" src={ Mockup } alt="" />
          </div>
          <div className="copyContainer col-10 col-lg-5 text-lg-start">
            <h1 className="title text-center text-lg-start mx-auto mx-lg-0">Build the community your fans will love</h1>
            <p className="lead text-center text-lg-start mx-auto mx-lg-0">Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
            <button className="button .-register">Register</button>
          </div>
        </div>
        <div className="row">

          <div className="socialLinksContainer col-12 col-lg-11 text-lg-end mx-auto">
            <a href="#" className="link">
              <i className="icon icon-facebook"></i>
            </a>
            <a href="#" className="link">
              <i className="icon icon-twitter"></i>
            </a>
            <a href="#" className="link">
              <i className="icon icon-instagram"></i>
            </a>
          </div>
        </div>
      </header>
      <footer className="footer row justify-content-center">
        <div className="col-10">
          <p className="attribution">Challenge by <a href="https://www.frontendmentor.io/challenges/huddle-landing-page-with-a-single-introductory-section-B_2Wvxgi0" target="_blank">Frontend Mentor</a>. Coded by <a href="https://github.com/edsonv">Edson J Vargas</a>.</p>
        </div>
      </footer>
    </div>
  )
}

export default Home