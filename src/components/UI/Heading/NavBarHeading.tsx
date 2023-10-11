import { useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function NavBarHeading() {
  const route = useSelector((state: RootState) => state.currRoute.route);
  const isNavOpen = useSelector((state: RootState) => state.isNavOpen.isOpen);
  const router = useRouter();

  const [rotate, setRotate] = useState<number>(0);

  useEffect(() => {
    setRotate((prev) => (prev === 0 ? -6 : 0));
  }, [isNavOpen]);

  return (
    <motion.div
      initial={{ rotateZ: 0, opacity: 0 }}
      animate={{ rotateZ: rotate, opacity: 1 }}
      transition={{
        delay: 0.1,
        duration: 0.1,
        stiffness: 100,
        damping: 10,
        type: "spring",
      }}
      onMouseOver={() => setRotate(-6)}
      onMouseLeave={() => setRotate(0)}
      className="flex font-satoshi ss:text-[1.5rem] text-[1.2rem] cursor-pointer "
      onClick={() => router.push("/")}
    >
      <h1 className="text-whiteShade">Shobhitexe</h1>
      <h1 className="text-grayShade">{route}</h1>
    </motion.div>
  );
}
