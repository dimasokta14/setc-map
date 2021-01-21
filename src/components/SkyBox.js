import { useThree } from "react-three-fiber";
import { CubeTextureLoader } from "three";

const SkyBox = () => {
  const { scene } = useThree();
  const loader = new CubeTextureLoader();

  const texture = loader.load([
    "/image/front.jpg",
    "/image/back.jpg",
    "/image/top.jpg",
    "/image/bottom.jpg",
    "/image/left.jpg",
    "/image/right.jpg"
  ]);

  scene.background = texture;
  return null;
};

export default SkyBox;
