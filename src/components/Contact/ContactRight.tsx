import Label, { labelColors } from "../UI/Label/Label";

export default function ContactRight() {
  const inputClass: string =
    "bg-transparent border-b border-b-grayShade hover:border-b-green-500 duration-500 font-general outline-none caret-whiteShade text-whiteShade";

  return (
    <div className="">
      <form>
        <h1 className="font-satoshi text-whiteShade">
          YOUR DETAILS<span className="text-green-500">*</span>
        </h1>
        <div className="flex gap-10 flex-wrap mt-10">
          <input placeholder="Name" className={`${inputClass}`} />
          <input placeholder="Email" className={`${inputClass}`} />
        </div>
        <div className="flex flex-col mt-10 gap-5">
          <h1 className="font-satoshi text-whiteShade">
            TELL ME ABOUT YOUR PROJECT
            <span className="text-green-500">*</span>
          </h1>
          <textarea
            placeholder="Your message...."
            className={`${inputClass}`}
          />
        </div>
        <div className="flex flex-col mt-10 gap-5">
          <h1 className="font-satoshi text-whiteShade">
            HOW DID YOU FIND ME?
            <span className="text-green-500">*</span>
          </h1>
          <input placeholder="Start Typing" className={`${inputClass}`} />
        </div>
        <div className="w-fit">
          <Label title="Send" labelBg={labelColors.green} styles="mt-10" />
        </div>
      </form>
    </div>
  );
}
