import "./skilllist.css";
import { skillData } from "../../skill";
import Skills from "../skills/Skills";

const SkillList = () => {
  return (
    <div className="sl">
      <div className="sl-texts">
        <h1 className="sl-title">Skills</h1>
        <p className="sl-desc">
          These are some of my tech skills on which I have worked while building
          some projects and working for client.
        </p>
      </div>
      <div className="sl-list">
        {skillData.map((item) => (
          <Skills
            key={item.id}
            num={item.num}
            img={item.img}
            status={item.status}
            name={item.name}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillList;
