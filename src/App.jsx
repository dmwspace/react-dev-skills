import './App.css'
import SkillList from './SkillList/SkillList';
import NewSkillForm from '../NewSkillForm/NewSkillForm';

function App() {

  const skills = [
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 },
  ];
  
  return (
    <>
      <h1 />
      <SkillList skills={skills}/>
      <hr />
      <NewSkillForm />
    </>
  )
}

export default App
