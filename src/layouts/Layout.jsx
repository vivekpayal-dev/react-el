import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Footer from "../components/Footer";
import Header from "../components/Header";
import bgImg from '../assets/images/bg.jpeg';
import PageWrapper from "../components/PageWrapper";


import { Canvas } from "@react-three/fiber";
import { Environment, Html, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Model from "@/components/Model";

const Layout = () => {
    const location = useLocation();

    return (
        <div className="relative min-h-screen flex flex-col">
            <div className={`${location.pathname !== "/" ? " blur-md" : ""}  absolute top-0 left-0 w-full h-full`}>
                {location.pathname === '/' ? <Canvas camera={{ position: [0, 2, 6], fov: 50 }}>
                    <ambientLight intensity={0.2} />
                    <directionalLight intensity={1} position={[5, 10, 5]} />
                    <Suspense fallback={null
                        // <Html>
                        //     <div className="bg-red-700 text-white p-2 rounded">Loading...</div>
                        // </Html>
                    }>
                        {/* <Environment files="cloudy-sky_1932194f-abfa-4ef2-a2f5-292829e47c86.exr" background /> */}
                        <Model />
                    </Suspense>
                    <OrbitControls
                        maxPolarAngle={Math.PI / 2.2}
                        minPolarAngle={Math.PI / 2.5}
                        maxAzimuthAngle={Math.PI / 6}
                        minAzimuthAngle={-Math.PI / 6}
                        enableZoom={false}
                    />
                </Canvas> : <img src={bgImg} className="h-full w-full pointer-events-none" />
                }
            </div >
            <Header />
            <AnimatePresence mode="wait" initial={false}>
                <PageWrapper key={location.pathname}>
                    <Outlet />
                </PageWrapper>
            </AnimatePresence>
            {location.pathname === '/talent' && <Footer />}
        </div >
    );
};

export default Layout;
