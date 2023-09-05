import Label, { labelColors } from "../UI/Label/Label";

type ProjectInfoProps = {
  desc: { descHead: string; descPara: string };
  links: { liveSite?: string; github?: string };
};

export default function ProjectInfo({ desc, links }: ProjectInfoProps) {
  return (
    <div className="w-[95%] mx-auto mt-10 flex flex-col gap-5">
      <h1 className="text-whiteShade font-satoshi text-[40px] font-medium">
        {desc.descHead}
      </h1>
      <div className="w-full flex gap-5 justify-end">
        <div className="w-full"></div>
        <div className="flex flex-col gap-5">
          <p className="text-whiteShade font-general text-[18px]">
            {desc.descPara}
          </p>
          <div className="flex gap-2">
            {Boolean(links.liveSite) && (
              <Label
                title="Live"
                labelBg={labelColors.green}
                href={links.liveSite}
              />
            )}
            {Boolean(links.github) && (
              <Label
                title="Github"
                labelBg={labelColors.green}
                href={links.github}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
