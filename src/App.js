import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
// import SignUp from "./pages/SignUp";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./pages/ForgotPassword";
import Offers from "./pages/Offers";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateListing from "./pages/CreateListing";
import EditListing from "./pages/EditListing";
import Listing from "./pages/Listing";
import Category from "./pages/Category";
import Footer from "./components/Footer";
import ContactPage from "./pages/ContactPage";
import Blog from "./pages/Blog";
import ServicePage from "./pages/Services";
import CareerPage from "./pages/Career";
import PaymentForm from "./components/PaymentForm";

const stripePromise = loadStripe('your_stripe_public_key'); // Replace with your actual Stripe public key
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/contact-page" element={<ContactPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/career" element={<CareerPage />} />
          {/* <Route path="/paymentForm" element={<CareerPage />} /> */}

          <Route path="/paymentForm" element={<Elements stripe={stripePromise}><PaymentForm /></Elements>} />




          <Route path="/blog" element={<Blog />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/category/:categoryName/:listingId"
            element={<Listing />}
          />
          <Route path="/offers" element={<Offers />} />
          <Route path="/category/:categoryName" element={<Category />} />
          <Route path="create-listing" element={<PrivateRoute />}>
            <Route path="/create-listing" element={<CreateListing />} />
          </Route>
          <Route path="edit-listing" element={<PrivateRoute />}>
            <Route path="/edit-listing/:listingId" element={<EditListing />} />
          </Route>
        </Routes>
        <Footer />

      </Router>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;