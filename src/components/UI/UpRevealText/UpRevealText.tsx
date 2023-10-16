import { motion } from "framer-motion";

type UpRevealTextProps = { label: string; styles?: string; delay: number };

export default function UpRevealText({
  label,
  styles,
  delay,
}: UpRevealTextProps) {
  return (
    <motion.div
      initial={{ translateY: 30, opacity: 0 }}
      whileInView={{ translateY: 0, opacity: 1 }}
      transition={{
        delay: delay,
        duration: 0.5,
        stiffness: 70,
        damping: 13,
        type: "spring",
      }}
      className={`font-general ${styles}`}
    >
      {label}
    </motion.div>
  );
}
