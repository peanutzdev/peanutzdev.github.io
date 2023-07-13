import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Swap from "./pages/Swap";
import Home from "./pages/Home";
import StakeToken from "./pages/StakeToken";
import StakeLP from "./pages/StakeLP";
import ComingSoon from "./components/ComingSoon";

export default function App() {
  return (
        <Routes>
          <Route path="/" element={<ComingSoon />} />
          <Route path="/staginghome" element={<Home />} />
          <Route path="/stagingswap" element={<Swap />} />
          <Route path="/stagingstaketoken" element={<StakeToken />} />
          <Route path="/stagingstakelp" element={<StakeLP />} />
        </Routes>
  );
}
