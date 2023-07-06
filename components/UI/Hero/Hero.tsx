import HeroLine from "@/components/common/consoles/console_lines/HeroLine";
import ConsoleSecction from "../Container/ConsoleSecction";
import { AiOutlineHome } from "react-icons/ai";
import PrimaryButton from "@/components/common/buttons/PrimaryButton";
import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import AnimatedImage from "@/components/common/images/AnimatedImage";

export default function Hero() {
  const [HeroImages, setHeroImages] = useState<Array<React.ReactNode>>([]);
  const [CurrentHero, setCurrentHero] = useState<React.ReactNode | null>();

  useEffect(() => {
    const loadImage = (imagePath: string): Promise<React.ReactNode> => {
      return new Promise((resolve, reject) => {
        const image = new window.Image();
        image.src = imagePath;
        image.onload = () => resolve(<AnimatedImage image={imagePath} />);
        image.onerror = reject;
      });
    };

    const loadAllImages = async () => {
      const imagesPromises = [];
      for (let i = 1; i < 61; i++) {
        const imagePath = `/images/rocket/${i < 10 ? "000" : "00"}${i}.svg`;
        imagesPromises.push(loadImage(imagePath));
      }
      try {
        const loadedImages = await Promise.all(imagesPromises);
        setHeroImages(loadedImages);
      } catch (error) {
        console.error("Error loading images:", error);
      }
    };

    loadAllImages();
  }, []);

  useEffect(() => {
    if (HeroImages.length === 0) {
      return; // Espera hasta que todas las imágenes estén cargadas
    }

    let currentIndex = 0;

    const updateCurrentHero = () => {
      setCurrentHero(HeroImages[currentIndex]);
      currentIndex = (currentIndex + 1) % HeroImages.length;
    };

    const intervalId = setInterval(updateCurrentHero, 60);

    return () => {
      clearInterval(intervalId);
    };
  }, [HeroImages]);

  return (
    <ConsoleSecction id='hero' border={true} icon={<AiOutlineHome />} branch='Home'>
      <div
        className={clsx(
          "relative gap-6 h-fit",
          "md:flex md:gap-3 md:flex-nowrap md:flex-row md:justify-between md:items-center",
          "mobile flex flex-wrap flex-col-reverse"
          // "border-[1px] border-yellow-900"
        )}>
        <div
          id='hero_message'
          className={clsx(
            "w-full flex flex-col gap-2",
            "z-50",
            "md:w-[60%] lg:w-[50%] lg:max-w-[600px]"
            // "border-[1px] border-yellow-900"
          )}>
          <HeroLine>front-end & </HeroLine>
          <HeroLine>back-end dev</HeroLine>
          <HeroLine>in just one</HeroLine>
          <div className={clsx("py-3 lg:pl-[45px] flex flex-wrap gap-3", "pl-[10px]")}>
            <PrimaryButton event={() => window.open("https://github.com/SirJohn72-script", "_blank")}>
              GitHub
            </PrimaryButton>
            <PrimaryButton event={() => window.open("/version3d", "_blank")}>3D Version</PrimaryButton>
          </div>
        </div>

        <div id='hero_image' className={clsx("md:w-[40%] lg:w-[50%] w-[100%]", "flex justify-center")}>
          <div className={clsx("w-[100%] flex justify-center", "p-6")}>{CurrentHero}</div>
        </div>
      </div>
    </ConsoleSecction>
  );
}
