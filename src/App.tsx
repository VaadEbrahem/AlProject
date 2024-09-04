import Navbarhome from "./Components/Nav/Navbarhome";
import Pagecard from "./Components/Pagecard/Pagecard";
import Homeone from "./Components/Homeone/Homeone";
import { Footer } from "./Components/Footer/Footer";
import { Textimag } from "./Components/Textimag/Textimag";
import { Icocounter } from "./Components/Icocounter/Icocounter";
import { Backtext } from "./Components/Backtext/Backtext";
import {Imagtext} from "./Components/Imagtext/Imagtext"
import {Movingcards} from "./Components/Movingcards/Movingcards"
import {FAQ} from "./Components/Accordion/FAQ"
import Eimagslick from "./Components/Eimagslick/Eimagslick"
import Titeleimageslick from "./Components/Titeleimageslick/Titeleimageslick"
import Gettouch from "./Components/Gettouch/Gettouch"
function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbarhome />
      <Homeone />
      <Pagecard />
      <Footer />
      <Textimag />
      <Icocounter />
      <Backtext />
      <Imagtext/>
      <Movingcards/>
      <FAQ />
      <Eimagslick/>
      <Titeleimageslick/>
      <Gettouch/>
    </div>
  );
}

export default App;
