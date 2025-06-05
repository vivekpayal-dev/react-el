import React, { useRef, useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Model() {
    const gltf = useLoader(GLTFLoader, "Baked_File.gltf");
    const mesh = useRef();

    useEffect(() => {
        if (gltf.scene.background) {
            gltf.scene.background = gltf.scene.background;
        }

        // gltf.scene.traverse((child) => {
        //     if (child.isMesh) {
        //         console.log("Mesh:", child.name, "Material:", child.material);
        //     }
        // });
    }, [gltf]);

    return <primitive ref={mesh} object={gltf.scene} />;
}

export default Model;