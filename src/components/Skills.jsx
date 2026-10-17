import SkillGroup from './SkillGroup'
import { skillGroups } from '../data/skills'

export default function Skills() {
  return (
    <section id="Skills">
      <div className="text-[3rem] font-bold text-[#1d1d20] ml-[30px] md:ml-[100px]">Skills</div>
      <div className="skillsboxes flex md:flex-row flex-col justify-between">
        {skillGroups.map((group) => (
          <SkillGroup key={group.title} {...group} />
        ))}
      </div>
    </section>
  )
}
