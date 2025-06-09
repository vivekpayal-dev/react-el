import { Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Layout from './layouts/Layout'

// Lazy-loaded page components
const Home = lazy(() => import('./pages/Home'))
const HowItWorks = lazy(() => import('./pages/HowItWorks'))
const Pricing = lazy(() => import('./pages/Pricing'))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const PartnershipProgram = lazy(() => import('./pages/PartnershipProgram'))
const Help = lazy(() => import('./pages/Help'))
const Success = lazy(() => import('./pages/Success'))
const Failed = lazy(() => import('./pages/Failed'))

import "yet-another-react-lightbox/styles.css"
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const Loading = () => <div>Loading...</div>

function App() {
  return (
    <Suspense fallback={<Loading />}>
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
      </Routes>
    </Suspense>
  )
}

export default App
