import { Route, Routes } from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import HowItWorks from './pages/HowItWorks'
import Pricing from './pages/Pricing'
import Portfolio from './pages/Portfolio'
import PartnershipProgram from './pages/PartnershipProgram'
import Help from './pages/Help'

import "yet-another-react-lightbox/styles.css";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Success from './pages/Success'
import Failed from './pages/Failed'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="how-it-works" element={<HowItWorks />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="talent" element={<PartnershipProgram />} />
        <Route path="help" element={<Help />} />
        <Route path="success" element={<Success />} />
        <Route path="failed" element={<Failed />} />
      </Route>
    </Routes >
  )
}

export default App
