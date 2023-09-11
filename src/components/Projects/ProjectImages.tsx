import Image from "next/image";

export default function ProjectImages({ images }: { images: string[] }) {
  return (
    <div className="mt-20 grid sm:grid-cols-2 w-[80%] mx-auto gap-10 cursor-pointer">
      {images.map((image) => (
        <Image
          src={image}
          alt="images"
          width={1280}
          height={720}
          key={image}
          className="rounded-2xl hover:scale-105 duration-500"
        />
      ))}
    </div>
  );
}
