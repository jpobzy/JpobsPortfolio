import { useEffect } from "react";

export const LottieHoverPlayer = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs";
    document.body.appendChild(script);
  }, []);

  return (
    <dotlottie-player
      src="https://lottie.host/da342e85-a349-437c-831b-eb59c80cb06d/K1Dhm7TYzl.lottie"
      background="transparent"
      speed="1"
      hover
      loop
      style={{ width: "150px", height: "150px" }}
    ></dotlottie-player>
  );
};
