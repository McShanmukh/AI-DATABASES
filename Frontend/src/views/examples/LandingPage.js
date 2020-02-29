import React from "react";
import  "./LandingPage.css"
import { render } from "react-dom";
// core components
import SearchBox from "../../components/Search/SearchApp.js";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
// import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import MenuTiles from '../../MenuTiles';
import HomePage from 'pages/homepage/homepage.component';
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css";
import "./slider-animations.css";
import "./sliderstyles.css";

const content = [
  {
    title: "AI ECONOMICS",
    description:
      "AI Economic deals with our specialized dataset graph which gives detailed information on the economical products and their rotation.",
    button: "Expand Me",
    image: "https://ak7.picdn.net/shutterstock/videos/1019040067/thumb/9.jpg",
    // user: "Luan Gjokaj",
    // userProfile: "https://i.imgur.com/JSW6mEk.png"
  },
  {
    title: "AI TRADE ANALYTICS",
    description:
      "This section deals with the trade analysis for several companies in all over India and other international companies",
    button: "Read more",
    image: "https://www.1point21gws.com/insights/wp-content/uploads/2017/02/analytics-data-ss-19201.jpg",
    // user: "Erich Behrens",
    // userProfile: "https://i.imgur.com/0Clfnu7.png"
  },
  {
    title: "AI DEMOGRAPHY",
    description:
      "The Demography deals ,.......,.,.,.........................,,,,,,,,,,,,.,..........,",
         button: "View ",
    image: "https://www.eteda.org/lib/image/manager/gallery/data.jpg",
    // user: "Bruno Vizovskyy",
    // userProfile: "https://i.imgur.com/4KeKvtH.png"
  },
  {
    title: "AI INDUSTRIAL RESEARCH",
    description:
      "A Deep research in Current top most to far most companies data highly concentrated data on each and every aspect",
    button: "Read More",
    image: "https://trainingindustry.com/content/uploads/2019/02/Leadership-in-the-Fourth-Industrial-Revolution-2.21.19.jpg",
    // user: "Luan Gjokaj",
    // userProfile: "https://i.imgur.com/JSW6mEk.png"
  },
  
];

function SliderItem({ item }) {
  return (
    <div
      className="slider-content"
      style={{ background: `url('${item.image}') no-repeat ` }}
    >
      <div className="inner">
        <h1>{item.title}</h1>
        <p>{item.description}</p>
        <button>{item.button}</button>
      </div>
      <section>
        {/* <img src={item.userProfile} alt={item.user} /> */}
        {/* <span>
          Posted by <strong>{item.user}</strong>
        </span> */}
      </section>
    </div>
  );
}

const App = () => (
  <div>
    {/* <h1>{content.length} elements autoplay 1s</h1> */}
    <Slider className="slider-wrapper" autoplay={2000}>
      {content.map((item, index) => (
        <div
          key={index}
          className="slider-content"
          style={{ background: `url('${item.image}') no-repeat center center` }}
        >
          <div className="inner">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <button>{item.button}</button>
          </div>
          <section>
            <img src={item.userProfile} alt={item.user} />
            <span>
              Posted by <strong>{item.user}</strong>
            </span>
          </section>
        </div>
      ))}
    </Slider>

  </div>
);

// render(<App />, document.getElementById("root"));



function LandingPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });

  const footer = {
      paddingTop: '50px'
  };

  return (
   <>
    <ExamplesNavbar />
    
      <div className="wrapperclass">
        
        <div className="searchBox">
        <SearchBox />

        </div>
        <div className="slider">
        <App />
        </div>
        
        <div className="menuTiles">
        <HomePage />
        {/* <MenuTiles /> */}
        </div>
              
        <div class="footer" style= {footer} >
        <DefaultFooter />
        </div>
        
      </div>
    </>
  );
}

export default LandingPage