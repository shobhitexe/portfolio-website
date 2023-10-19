import Image from "next/image";
import RevealImage, { RevealColorColors } from "../UI/RevealImage/RevealImage";

export default function ProjectImages({ images }: { images: string[] }) {
  return (
    <div className="mt-20 grid sm:grid-cols-2 w-[80%] mx-auto gap-10 cursor-pointer">
      {images.map((image) => (
        <RevealImage
          image={image}
          alt="images"
          key={image}
          style="rounded-2xl hover:scale-105 duration-500"
          cover={RevealColorColors.lightGrey}
          delay={0.2}
        />
      ))}
    </div>
  );
}
