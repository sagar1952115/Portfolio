import "./skilllist.css";
import { skillData } from "../../skill";
import Skills from "../skills/Skills";

const SkillList = () => {
  return (
    <div className="sl">
      <div className="sl-texts">
        <h1 className="sl-title">Skills</h1>
        <p className="sl-desc">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil atque non enim at quisquam aut qui voluptates, neque incidunt id minima pariatur maiores.
        </p>
      </div>
      <div className="sl-list">
        {skillData.map((item) => (
          <Skills key={item.id} num={item.num} img={item.img} status={item.status} name={item.name}/>
        ))}
      
      </div>
    </div>
  );
};

export default SkillList;


