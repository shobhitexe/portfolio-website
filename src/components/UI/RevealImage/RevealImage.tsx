import Image from "next/image";

export enum RevealColorColors {
  lightGrey = "bg-lightGray",
}

type RevealImageProps = {
  image: string;
  alt: string;
  style?: string;
  cover: RevealColorColors;
};

export default function RevealImage({
  image,
  alt,
  style,
  cover,
}: RevealImageProps) {
  return (
    <div className="overflow-hidden rounded-2xl relative">
      <div className={`absolute w-full h-full ${cover}`}></div>
      <Image
        src={image}
        alt={alt}
        width={1000}
        height={1000}
        className={`rounded-2xl cursor-pointer hover:scale-105 duration-300 ${style}`}
      />
    </div>
  );
}
