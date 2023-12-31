type ProjectHeroProps = {
  heroData: {
    title: string;
    stack: string;
    type: string;
    time: string;
    headImage: string;
  };
};

export default function ProjectHero({ heroData }: ProjectHeroProps) {
  return (
    <div className={`h-screen ${heroData.headImage} bg-cover bg-center`}>
      <div className="w-full h-full bg-black bg-opacity-80 backdrop-blur-[10px] flex flex-col justify-between">
        <h1 className="text-whiteShade md:text-[80px] ss:text-[40px] text-[30px] ml-5 mt-[100px] font-satoshi font-medium">
          {heroData.title}
        </h1>
        <div className="flex flex-col gap-5 mb-5 font-general text-whiteShade w-[95%] mx-auto">
          <hr />
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h1>Tech</h1>
              <p>{heroData.stack}</p>
            </div>
            <div className="flex flex-col">
              <h1>Project Type</h1>
              <p>{heroData.type}</p>
            </div>
            <div className="flex flex-col">
              <h1>Duration</h1>
              <p>{heroData.time}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
