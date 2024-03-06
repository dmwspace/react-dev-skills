import { useState } from 'react';
import './NewSkillForm.css';

export default function NewSkillForm({ createNewSkill }) {

    const [newSkill, setNewSkill] = useState({
        name: '',
        level: 3
    });

    function handleSubmit(e) {
        e.preventDefault();
        createNewSkill(newSkill)
        setNewSkill({name: '', level: 3})
    }

    function handleChange(e) {
        const currentNewSkill = {...newSkill, [e.target.name]: e.target.value};
        setNewSkill(currentNewSkill)
        console.log('newSkill: ', newSkill) 
    }

    return (
        <form className="NewSkillForm" onSubmit={handleSubmit}>
            <label>Skill</label>
            <input 
                onChange={handleChange} 
                name="name"
                value={newSkill.name} 
                type="text"
                autoFocus
            >
            </input>
            <label>Level</label>
            <select 
                onChange={handleChange}  
                name="level" 
                value={newSkill.level}
                type="number"
            >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
            <button type="submit">ADD SKILL</button>
        </form>
    )
}