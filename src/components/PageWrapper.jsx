// components/PageWrapper.jsx
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

const pageTransition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      className="flex grow"
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
