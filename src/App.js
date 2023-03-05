import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import X3D from "./components/X3D/X3D";
import Video from "./components/Video/Video";
import { useEffect, useRef, useState } from "react";
import SiteMap from "./components/SiteMap/SiteMap";

function App() {
  const [mobileView, setMobileView] = useState("off");
  const [tableState, setTableState] = useState(false);
  const [plotState, setPlotState] = useState(0);

  return (
    <div className="App">
      <Header
        mobileView={mobileView}
        setMobileView={setMobileView}
        plotState={plotState}
        setPlotState={setPlotState}
        setTableState={setTableState}
        tableState={tableState}
      ></Header>
      <X3D
        mobileViewState={mobileView}
        plotState={plotState}
        tableState={tableState}
        setTableState={setTableState}
      ></X3D>
      <div className="video-and-sitemap">
        <div className="video">
          <Video></Video>
        </div>
        <div className="map">
          <SiteMap></SiteMap>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
