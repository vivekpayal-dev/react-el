import { Outlet, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Footer from "../components/Footer"
import Header from "../components/Header"
import bgImg from "../assets/images/bg.jpeg"
import PageWrapper from "../components/PageWrapper"
import { Suspense, lazy } from "react"

// Lazy load the 3D scene
const ThreeScene = lazy(() => import("../components/ThreeScene"))

const Layout = () => {
  const location = useLocation()

  return (
    <div className="relative min-h-screen flex flex-col">
      <div
        className={`${location.pathname !== "/" ? " blur-md" : ""
          } absolute top-0 left-0 w-full h-full`}
      >
        {location.pathname === "/" ? (
          <Suspense fallback={<div className="text-white">Loading...</div>}>
            <ThreeScene />
            {/* <Environment files="cloudy-sky_1932194f-abfa-4ef2-a2f5-292829e47c86.exr" background /> */}
          </Suspense>
        ) : (
          <img src={bgImg} className="h-full w-full pointer-events-none" />
        )}
      </div>

      <Header />

      <AnimatePresence mode="wait" initial={false}>
        <PageWrapper key={location.pathname}>
          <Outlet />
        </PageWrapper>
      </AnimatePresence>

      {location.pathname === "/talent" && <Footer />}
    </div>
  )
}

export default Layout
