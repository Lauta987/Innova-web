import { motion } from "framer-motion";
import type { ReactNode } from "react";

type FadeSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

function FadeSection({
  children,
  className = "section",
  id,
}: FadeSectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
    >
      {children}
    </motion.section>
  );
}

export default FadeSection; 