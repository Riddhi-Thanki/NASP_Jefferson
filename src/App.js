import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import X3D from "./components/X3D/X3D";
import Video from "./components/Video/Video";
import { useState, createContext } from "react";
import SiteMap from "./components/SiteMap/SiteMap";
import { useParams } from "react-router-dom";
import ErrorPage from "./error-page";

export const AppContext = createContext();

function App() {
  // *****************************
  // * Component States
  // *****************************
  const [mobileView, setMobileView] = useState("off");
  const [tableState, setTableState] = useState(false);
  const [directionState, setDirectionState] = useState(0);
  const [plotId, setPlotId] = useState("1");

  // let pId = useParams().plotId;

  // if (!(!isNaN(pId) && Number(pId) > 0 && Number(pId) < 9)) {
  //   return <ErrorPage />;
  // }

  // useEffect(() => {
  //   if (!isNaN(pId) && Number(pId) > 0 && Number(pId) < 9) {
  //     setPlotId(pId);
  //   }
  // }, [pId]);

  return (
    <AppContext.Provider
      value={{
        plotId,
        setPlotId,
        mobileView,
        setMobileView,
        directionState,
        setDirectionState,
        tableState,
        setTableState,
      }}
    >
      <div className="App">
        <Header></Header>
        <div>
          <X3D></X3D>
        </div>
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
    </AppContext.Provider>
  );
}

export default App;
