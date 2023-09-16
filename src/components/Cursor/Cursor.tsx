import Image from "next/image";

export const CustomCursor = () => {
  return (
    <Image
      src={"images/cursor/planet.svg"}
      alt="cursor"
      className="flex absolute z-10"
      width={40}
      height={40}
    />
  );
};
