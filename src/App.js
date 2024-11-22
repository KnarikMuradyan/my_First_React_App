
import './App.css';

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";



const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(){
  return <img className='avatar' src='image/knar.jpg' alt ="Knar"/>

}

function  Intro(){
  return <div className='data'>
    <h1>Knar Muradyan</h1>
    <p> Hello! I'm Knar, a JavaScript & TypeScript Developer with proficiency in
        HTML, CSS, Bootstrap, and Git/GitHub. Currently mastering React.js for
        Frontend development.</p>
  </div>

}

function SkillList(){
  return <div className='skill-list'>
  {
    skills.map(skill => 
      <Skill  skill= {skill.skill} color={ skill.color} level = {skill.level}/>

    )
  }

  </div>

}

function Skill({skill , color, level}){
  return <div className='skill' style={{background:color}}>
    <span>{skill}</span>
    <span>

      {level === "advanced" && "💪"}
      {level === "beginner" && "💜"}
      {level === "intermediate" && "🤞🏻"}

      </span>
  </div>


}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);


export default App;
