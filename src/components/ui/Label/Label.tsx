"use client";

export enum labelColors {
  green = "bg-green-500",
  gray = "bg-grayShade",
  transparant = "bg-transparent",
}

type LabelProps = {
  title: string;
  labelBg: labelColors;
  styles?: string;
  href?: string;
};

export default function Label({ title, labelBg, styles, href }: LabelProps) {
  return (
    <div
      onClick={() => {
        href && window.open(href, "_blank");
      }}
      className={`${labelBg} w-fit px-4 py-0.5 ${
        labelBg === labelColors.transparant
          ? "text-whiteShade border"
          : "text-greyBg"
      } font-general text-[0.8rem] font-medium rounded-xl cursor-pointer ${styles}`}
    >
      {title}
    </div>
  );
}
