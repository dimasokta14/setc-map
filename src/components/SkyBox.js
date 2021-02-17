import { useThree } from "react-three-fiber";
import { CubeTextureLoader } from "three";
import front from '../assets/images/front.jpg';
import back from '../assets/images/back.jpg';
import top from '../assets/images/top.jpg';
import bottom from '../assets/images/bottom.jpg';
import left from '../assets/images/left.jpg';
import right from '../assets/images/right.jpg';

const SkyBox = () => {
  const { scene } = useThree();
  const loader = new CubeTextureLoader();

  const texture = loader.load([
    front,back, top, left, bottom, right
  ]);

  scene.background = texture;
  return null;
};

export default SkyBox;
