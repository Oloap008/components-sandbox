// import Accordion from "./components/Accordion";
// import ColorGenerator from "./components/ColorGenerator";
// import StarRating from "./components/StarRating";
// import Slider from "./components/Slider";
// import Products from "./components/products/Products";
// import Menu from "./components/menu/Menu";

import ThemeTogglePage from "./components/theme/ThemeTogglePage";
import { ThemeProvider } from "./context/ThemeContext";

// import { accordionData } from "./constants/data;
// import { menuData } from "./constants/data";

function App() {
  return (
    <ThemeProvider>
      {/* <RouterProvider router={router} /> */}

      {/* Accordion */}
      {/* <Accordion data={JSON.stringify(accordionData)} /> */}

      {/* Random Color Generator */}
      {/* <ColorGenerator /> */}

      {/* Star Rating */}
      {/* <StarRating numOfStars={10} /> */}

      {/* Image Slider */}
      {/* <Slider url="https://picsum.photos/v2/list" /> */}

      {/* Load more button */}
      {/* <Products pageLimit={50} /> */}

      {/* Tree View / Menu UI / Recursive Navigation Menu */}
      {/* <Menu data={menuData} /> */}

      {/* Light and Dark Mode / Theme Switch / Dark Theme */}
      <ThemeTogglePage />
    </ThemeProvider>
  );
}

export default App;
