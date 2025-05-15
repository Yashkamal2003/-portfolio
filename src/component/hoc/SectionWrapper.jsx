import { motion } from "framer-motion";
import styled from "styled-components";
import { staggerContainer } from "../../utils/motion";


// Styled Motion Section
const MotionSection = styled(motion.section)`
  padding: 2rem 1rem; 
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 0;
`;

const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <MotionSection
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component />
      </MotionSection>
    );
  };

export default StarWrapper;
