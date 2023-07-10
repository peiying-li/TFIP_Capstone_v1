import SimpleImageSlider from "react-simple-image-slider";
import Img1 from "../assets/stock1.jpg";
import Img2 from "../assets/stock2.jpg";
import Img3 from "../assets/stock3.jpg";
import Img4 from "../assets/stock4.jpg";

const sliderData = [
  {
    url: Img1,
  },
  {
    url: Img2,
  },
  {
    url: Img3,
  },
  {
    url: Img4,
  },
];

const Slider = () => {
  return (
    <div>
      <SimpleImageSlider
        width="66%"
        height="40%"
        images={sliderData}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
};

export default Slider;
