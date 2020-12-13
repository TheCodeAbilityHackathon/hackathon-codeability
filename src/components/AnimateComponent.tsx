import { HTMLMotionProps, motion } from "framer-motion";

export const AnimateComponent = ({
  transition,
  ...props
}: HTMLMotionProps<"div">) => (
  <motion.div
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6, ...(transition as any) }}
    {...props}
  />
);
