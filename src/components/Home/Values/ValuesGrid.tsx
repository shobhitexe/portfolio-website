import SlideText from "@/components/ui/SlideText/SlideText";
import { valuesData } from "./ValuesConstants";

export default function ValuesGrid() {
  return (
    <div className="flex flex-col gap-5">
      {[2, 3].map((val) => (
        <div key={val}>
          <div
            className={`flex ${
              val === 3
                ? "sm:justify-end justify-center"
                : "sm:justify-start justify-center"
            } gap-5 max-sm:flex-wrap`}
          >
            {valuesData.map((data, idx) => {
              if (val === 2 && idx > val) return;
              if (val === 3 && idx < val) return;

              return (
                <div
                  key={data.title}
                  className="flex flex-col border w-[300px] h-[300px] border-whiteShade md:gap-20 gap-10 border-opacity-40 rounded-xl p-5"
                >
                  <div className="flex flex-col">
                    <span className="font-general text-green-500 ">
                      0{idx + 1}.
                    </span>
                    <SlideText
                      label={data.title}
                      style="text-whiteShade text-[20px]"
                    />
                  </div>
                  <p className="text-whiteShade font-satoshi">{data.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
