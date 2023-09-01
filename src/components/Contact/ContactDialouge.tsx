import { useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";
import { useDispatch } from "react-redux";
import { setContactDialouge } from "@/store/slices/contactFormDialouge";

export default function ContactDialouge() {
  const message = useSelector(
    (state: RootState) => state.contactFormDialouge.message
  );

  const dispatch = useDispatch();

  return (
    <div className="absolute flex flex-col font-satoshi gap-5 w-full text-center top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-whiteShade p-10 rounded-2xl">
      <h1>{message}</h1>
      <div
        className="bg-green-500 w-fit rounded-xl mx-auto px-5 cursor-pointer"
        onClick={() => {
          dispatch(setContactDialouge({ message: "", isOpen: false }));
        }}
      >
        Exit
      </div>
    </div>
  );
}
