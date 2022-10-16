import AnimateContainer from "./containers/AnimateContainer";
import Information from "./containers/Information";
import Footer from "./containers/Footer";
import Cursor from "./components/Cursor";
import "./styles.css";

function App() {

  return (
    <div className="app">
      <Cursor />
      <div className="landing">
        <Information />
        <AnimateContainer />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
