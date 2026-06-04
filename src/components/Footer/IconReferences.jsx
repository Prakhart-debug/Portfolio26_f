import vscode from '../../assets/site-icons/vscode.svg'
import tailwind from '../../assets/site-icons/tailwind.svg'
import react from '../../assets/site-icons/react.svg'
import javascript from '../../assets/site-icons/javascript.svg'
import html from '../../assets/site-icons/html.svg'
import gitcircle from '../../assets/site-icons/git-circle.svg'
import figma from '../../assets/site-icons/figma.svg'
import css from '../../assets/site-icons/css.svg'
import next from '../../assets/site-icons/next.svg'
import firebase from '../../assets/site-icons/firebase.svg'
import python from "../../assets/site-icons/python.svg"
import cpp from "../../assets/site-icons/cpp_img.svg"
import excel from "../../assets/site-icons/excel.svg"
import powerbi from "../../assets/site-icons/powerbi.svg"
import flutter from "../../assets/site-icons/flutter.svg"
import docker from "../../assets/site-icons/docker.svg"
import mongodb from "../../assets/site-icons/mongodb.svg"
import snowflake from "../../assets/site-icons/Snowflake.svg"
import swift from "../../assets/site-icons/swift.svg"

export default function IconReferences() {
  const icons = [
    { name: "VSCode", src: vscode, link: "https://icons8.com/icon/9OGIyU8hrxW5/visual-studio-code" },
    { name: "Tailwind", src: tailwind, link: "https://icons8.com/icon/WYseE87hRkP2/tailwindcss" },
    { name: "React", src: react, link: "https://icons8.com/icon/wPohyHO_qO1a/react" },
    { name: "JavaScript", src: javascript, link: "https://icons8.com/icon/108784/javascript" },
    { name: "HTML", src: html, link: "https://icons8.com/icon/20909/html-5" },
    { name: "Git", src: gitcircle, link: "https://icons8.com/icon/20906/git" },
    { name: "Figma", src: figma, link: "https://icons8.com/icon/7rhqrO588QcU/figma" },
    { name: "CSS", src: css, link: "https://icons8.com/icon/21278/css3" },
    { name: "Next.js", src: next, link: "https://icons8.com/icon/9OGIyU8hrxW5/nextjs" },
    { name: "Firebase", src: firebase, link: "https://icons8.com/icon/62452/firebase" },
    { name: "Python", src: python, link: "https://icons8.com/icon/13441/python" },
    { name: "C++", src: cpp, link: "https://icons8.com/icon/40669/c-plus-plus" },
    { name: "Excel", src: excel, link: "https://icons8.com/icon/11566/microsoft-excel" },
    { name: "Power BI", src: powerbi, link: "https://icons8.com/icon/13679/power-bi" },
    { name: "Flutter", src: flutter, link: "https://icons8.com/icon/7I3BjCqe9rjG/flutter" },
    { name: "Docker", src: docker, link: "https://icons8.com/icon/22813/docker" },
    { name: "MongoDB", src: mongodb, link: "https://icons8.com/icon/74402/mongodb" },
    { name: "Snowflake", src: snowflake, link: "https://icons8.com/icon/uK7G6n3uNDTj/snowflake" },
    { name: "Swift", src: swift, link: "https://icons8.com/icon/40670/swift" }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Icons Attribution</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {icons.map((icon) => (
          <div key={icon.name} className="flex flex-col items-center text-center">
            <img src={icon.src} alt={icon.name} className="w-12 h-12 mb-2" />
            <span className="font-medium">{icon.name}</span>
            <p className="text-sm mt-1">
              <a target="_blank" rel="noopener noreferrer" href={icon.link}>
                {icon.name}
              </a>{" "}
              icon by{" "}
              <a target="_blank" rel="noopener noreferrer" href="https://icons8.com">
                Icons8
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
