import Lottie from "react-lottie";
import animationData from "../lotties/loader.json";

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
  <div className="my-[151px]">
  <Lottie options={defaultOptions} height={400} width={400} />
  </div>);
};

export default Loading;
