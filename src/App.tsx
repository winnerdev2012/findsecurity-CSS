import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import "./App.scss";
import {ToastContainer} from 'react-toastify';
import {useEffect} from 'react';
import {PConfig} from 'config/PConfig';
import {ROUTES} from "./routes/PagesRoutes";
import {initCrisp} from "./Integrations/Crisp";
import LandingPage from "./pages/Landing/LandingPage";
import BusinessLocations from "./pages/BusinessLocations/LandingPage";
import SearchResult from "./pages/SearchResult/LandingPage";
import {initSmartlook} from "./Integrations/Analytics";

function App() {
  useEffect(() => {
    initSmartlook()
    initCrisp(window)
  }, []);

  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        limit={2}
      />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>

          <Route path="/business-location" element={<BusinessLocations/>}/>
          <Route path="/search-result" element={<SearchResult/>}/>
          <Route path="*" element={<LandingPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
