
import './App.css';

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

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
    <Skill skill ="JavaScript" emoji="💪" color ="red" />
    <Skill skill ="TypeScript" emoji ="💪" color ="yellow"/>
    <Skill skill = "Git & GitHub" emoji ="💪"  color ="pink"/>
    <Skill  skill = "Wed Design" emoji ="💪" color ="green"/>
    <Skill skill ="React" emoji ="💪" color ="grey"/>
  </div>

}

function Skill(props){
  return <div className='skill' style={{background:props.color}}>
    <span>{props.skill}</span>
    <span>{props.emoji}</span>
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
