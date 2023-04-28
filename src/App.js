import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import { history } from "./helpers/history";
import Navbar from "./components/common/Navbar";
import { PrivateRoute } from "./components/common/PrivateRoute";

import { logout } from "./services/auth.service";
import WithdrawList from "./pages/withdraw-list/WithdrawList";
import WithdrawDetails from "./pages/withdraw-details/WithdrawDetails";
import Footer from "./components/common/Footer";
import QRScanner from "./components/qr-code-scanner/QRCodeScannerComponent";
import Home from "./pages/home/Home";
import SignupSuccess from "./pages/signup-success/SignupSuccess";

function App() {
  // init custom history object to allow navigation from
  // anywhere in the react app (inside or outside components)
  history.navigate = useNavigate();
  history.location = useLocation();

  return (
    <div class="modal">
      <div class="modal__header">
        <Navbar curPath={history.location.pathname} logout={logout} back={() => history.navigate(-1)}></Navbar>
      </div>
      <div class="modal__content">
        <Routes>
          <Route exact path="/" element={<Navigate to={"/login"} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup-success" element={<SignupSuccess />} />
          {/* <Route path="/sample" element={<Sample />} /> */}
          <Route path="/home" element={<PrivateRoute component={<Home />} />} />
          <Route path="/withdraw-list" element={<PrivateRoute component={<WithdrawList />} />} />
          <Route path="/withdraw-details" element={<PrivateRoute component={<WithdrawDetails />} />} />
          <Route exact path="/qr-code-scanner" element={<PrivateRoute component={<QRScanner />} />} />
        </Routes>
      </div>
      <div class="modal__footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
