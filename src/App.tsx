// import Accordion from "./components/Accordion";
// import ColorGenerator from "./components/ColorGenerator";
// import StarRating from "./components/StarRating";

import Slider from "./components/Slider";

// import { accordionData } from "./constants/data";

function App() {
  return (
    <>
      {/* Accordion */}
      {/* <Accordion data={JSON.stringify(accordionData)} /> */}

      {/* Random Color Generator */}
      {/* <ColorGenerator /> */}

      {/* Star Rating */}
      {/* <StarRating numOfStars={10} /> */}

      {/* Image Slider */}
      <Slider url="https://picsum.photos/v2/list" />
    </>
  );
}

export default App;
