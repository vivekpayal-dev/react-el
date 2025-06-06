import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { PMREMGenerator, EquirectangularReflectionMapping } from "three";
import { KTX2Loader } from "three/examples/jsm/loaders/KTX2Loader";

export default function KTX2Environment() {
    const { gl, scene } = useThree();

    useEffect(() => {
        const pmremGenerator = new PMREMGenerator(gl);
        pmremGenerator.compileEquirectangularShader();

        const loader = new KTX2Loader()
            .setTranscoderPath("https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/libs/basis/")
            .detectSupport(gl);

        loader.load("output.ktx2", (texture) => {
            texture.mapping = EquirectangularReflectionMapping;
            const envMap = pmremGenerator.fromEquirectangular(texture).texture;

            scene.environment = envMap;
            scene.background = envMap;

            texture.dispose();
            pmremGenerator.dispose();
        });

        return () => {
            scene.environment = null;
            scene.background = null;
        };
    }, [gl, scene]);

    return null;
}
