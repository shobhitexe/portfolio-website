export enum labelColors {
  green = "bg-green-500",
  gray = "bg-grayShade",
  transparant = "bg-greyBg",
}

type LabelProps = {
  title: string;
  labelBg: labelColors;
  styles?: string;
};

export default function Label({ title, labelBg, styles }: LabelProps) {
  return (
    <div
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
