import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../HOC";
import { technologies } from "../constants";
import { styles } from "../styles";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((tech) => {
        return (
          <div className="w-28 h-28" key={tech.name}>
            <BallCanvas icon={tech.icon} />
          </div>
        );
      })}
    </div>
  );
};

export default SectionWrapper(Tech, "");
