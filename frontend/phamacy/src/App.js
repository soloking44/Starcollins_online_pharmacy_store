import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Menubar from "./components/Menubar";
import Inflammentry from "./pages/Inflammentry";
import Main from "./pages/Main";
import Footer from "./components/Footer";
import Fever from "./pages/Fever";
import Muscle from "./pages/Muscle";
import Prescription_assistance from "./pages/Prescription_assistance";
import Contact_us from "./pages/Contact_us";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navbar />
        <Menubar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="inflammentry" element={<Inflammentry />} />
          <Route path="fevar" element={<Fever />} />
          <Route path="musle" element={<Muscle />} />
          <Route path="prescription-Assistance" element={<Prescription_assistance />} />
          <Route path="contact_us" element={<Contact_us />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
          <Route path="/detail/:id" element={<ProductDetails />} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
