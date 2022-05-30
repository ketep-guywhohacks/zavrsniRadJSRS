import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'; 
import Main from "./Components/login.js";
import DashBoard from "./Components/cryptoValueObject.js";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
     <Router>
       <Routes>
         <Route path="/" element={<Main/>}></Route>
         <Route path="/DashboardMain" element={<DashBoard/>}></Route>
       </Routes>
     </Router>
     <Footer></Footer>
    </div>
  );
}

export default App;
