import { Link, Route, Switch } from "react-router-dom";
import { Appbar } from "./components/ui/surfaces";
import { Home, Cart, Contact, Complain, Lotto, Register } from "./containers";
import logo from "./assets/svg/logo.svg";
import dbd from "./assets/image/dbd_register.png";
import fb from "./assets/image/facebook.png";

function App() {
  return (
    <>
      <Appbar>
        <div className="flex items-center space-x-3 pl-3">
          <div className="">
            <img src={logo} alt="React Logo" />
          </div>
          <div className="pt-3">
            <img src={dbd} alt="React Logo" className="h-6" />
          </div>
          <div className="">
            <img src={fb} alt="React Logo" className="h-6 bg-white" />
          </div>
        </div>
        <nav className="flex pr-3">
          <ul className="flex space-x-3">
            <li>
              <Link to="/">หน้าหลัก</Link>
            </li>
            <li>
              <Link to="/lotto">ซื้อสลาก</Link>
            </li>
            <li>
              <Link to="">ตัวแทนจำหน่าย</Link>
            </li>
            <li>
              <Link to="">เกี่ยวกับกองสลาก</Link>
            </li>
            <li>
              <Link to="">ข่าวสาร</Link>
            </li>
            <li>
              <Link to="/contact">ติดต่อเรา</Link>
            </li>
          </ul>
        </nav>
        <div></div>
      </Appbar>
      <Switch>
        <Route path="/cart" component={Cart} />
        <Route path="/complain" component={Complain} />
        <Route path="/contact" component={Contact} />
        <Route path="/lotto" component={Lotto} />
        <Route path="/register" component={Register} />
        <Route path="/" component={Home} />
      </Switch>
    </>
  );
}

export default App;
