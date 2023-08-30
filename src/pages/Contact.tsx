import { ContactLeft, ContactRight } from "@/components";

export default function Contact() {
  return (
    <div
      className={`mt-[100px] flex md:flex-row flex-col max-md:gap-20 w-[90%] mx-auto`}
    >
      <ContactLeft />
      <ContactRight />
    </div>
  );
}
