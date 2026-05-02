import FadeUp from './FadeUp'
import { SiReact, SiNextdotjs, SiJavascript, SiHtml5, SiTailwindcss, SiNodedotjs,SiExpress, SiMongodb, SiFirebase, SiGit, SiGithub, SiFigma, SiVercel, SiVisualstudiocode } from 'react-icons/si';
import { FaCss3Alt } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

const allIcons = [
  { name: 'React', icon: <SiReact color="#61DAFB" /> },
  { name: 'Next.js', icon: <SiNextdotjs color="#FFFFFF" /> }, // ডার্ক মোডে সাদা ভালো দেখায়
  { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
  { name: 'HTML5', icon: <SiHtml5 color="#E34F26" /> },
  { name: 'CSS3', icon: <FaCss3Alt color="#1572B6" /> },
  { name: 'Tailwind', icon: <SiTailwindcss color="#06B6D4" /> },
  { name: 'Node.js', icon: <SiNodedotjs color="#339933" /> },
  { name: 'Express', icon: <SiExpress color="#FFFFFF" /> }, // এক্সপ্রেস এর লোগো মূলত সাদা/কালো
  { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
  { name: 'Firebase', icon: <SiFirebase color="#FFCA28" /> },
  { name: 'Git', icon: <SiGit color="#F05032" /> },
  { name: 'GitHub', icon: <SiGithub color="#FFFFFF" /> },
  { name: 'Figma', icon: <SiFigma color="#F24E1E" /> },
  { name: 'Vercel', icon: <SiVercel color="#FFFFFF" /> },
  { name: 'VS Code', icon: <VscVscode color="#007ACC" /> },
];

const skillGroups = [
  {
    title: 'Frontend',
    color: 'blue',
    skills: ['React.js', 'Next.js', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Tailwind CSS', 'DaisyUI', 'React Router', 'Context API', 'Framer Motion'],
  },
  {
    title: 'Backend & Database',
    color: 'teal',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'Firebase', 'JSON'],
  },
  {
    title: 'Tools & Workflow',
    color: 'amber',
    skills: ['GitHub', 'Vercel', 'Netlify'],
  },
]

const tagClass = {
  blue: 'bg-[#63b3ed]/8 border-[#63b3ed]/20 text-[#63b3ed] hover:bg-[#63b3ed]/15',
  teal: 'bg-[#4fd1c5]/8 border-[#4fd1c5]/20 text-[#4fd1c5] hover:bg-[#4fd1c5]/15',
  amber: 'bg-[#f6ad55]/8 border-[#f6ad55]/20 text-[#f6ad55] hover:bg-[#f6ad55]/15',
}
const titleClass = {
  blue: 'text-[#63b3ed]',
  teal: 'text-[#4fd1c5]',
  amber: 'text-[#f6ad55]',
}

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 py-24 bg-[#07090f]">
      <div className="max-w-[1100px] mx-auto px-[6%]">

        <FadeUp>
          <p className="text-xs font-bold tracking-[3px] uppercase text-[#63b3ed] mb-3">Technical Expertise</p>
          <h2 className="font-syne font-extrabold text-white mb-12" style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)' }}>
            Skills & Tools
          </h2>
        </FadeUp>

        {/* TOP — All icons */}
        <FadeUp delay={0.1}>
          <div className="flex flex-wrap gap-3 mb-12 pb-10 border-b border-[#63b3ed]/10">
            {allIcons.map((item) => (
              <div
                key={item.name}
                className="flex flex-col items-center gap-1.5 group cursor-default"
                title={item.name}
              >
                <div className="w-12 h-12 rounded-xl bg-[#111827] border border-[#63b3ed]/12 flex items-center justify-center text-2xl group-hover:border-[#63b3ed]/40 group-hover:-translate-y-1 transition-all duration-200">
  {item.icon}
</div>
                <span className="text-[10px] text-[#718096] group-hover:text-[#63b3ed] transition-colors font-medium">{item.name}</span>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* BOTTOM — Category groups */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <FadeUp key={group.title} delay={0.1 + i * 0.1}>
              <div className="bg-[#111827] border border-[#63b3ed]/12 rounded-2xl p-5 h-full hover:border-[#63b3ed]/25 hover:-translate-y-1 transition-all duration-300">
                <p className={`text-xs font-bold tracking-[1.5px] uppercase mb-4 pb-3 border-b border-[#63b3ed]/8 ${titleClass[group.color]}`}>
                  {group.title}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`text-xs font-semibold px-3 py-1 rounded-md border tracking-wide cursor-default transition-all ${tagClass[group.color]}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  )
}
