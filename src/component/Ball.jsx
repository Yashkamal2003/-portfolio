import React from 'react';
import BallCanvas from "./canavs/BallCanvas"; // ✅ default import
import { technologies } from "../data/constants";
import SectionWrapper from "./hoc/SectionWrapper"; // ✅ default import
import StarsCanvas from "./canavs/Stars";
const Ball = () => {
  return (
    <div className="tech-container">
         <StarsCanvas />
      {technologies.map((technology) => (
        <div className="tech-item" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Ball, ""); // ✅ wrapped export
