// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect} from 'react'
import Team from './Components/Team'
import TeamForm from './Components/TeamForm'
import axios from 'axios'


function App() {


  const defaultForms = {
    ///// TEXT INPUTS /////
    name: '',
    email: '',
    ///// DROPDOWN /////
    role: '',
  }

  //set team slice of steam to be an empty array 
  const [ members, setMembers] = useState([]); 
  const [forming, setForming] = useState(defaultForms)


  const newForm = (inputName, inputValue) => {
    setForming({...forming, [inputName]: inputValue})
  }

  const submitForm = () => {
    const newMember = {
      id: Date.now(),
      name: forming.name.trim(),
      email: forming.email.trim(),
      role: forming.role
    }

    setMembers([...members, newMember])
    setForming(defaultForms)

  }

  useEffect(() => {
    axios.get('fakeapi.com').then(res => setMembers(res.data))
  }, [])

  return (

    <div className="App">
      
      <h1>Team Builder!</h1>
      <h2>Build your team</h2>
      
      <TeamForm 

        values={forming}
        update={newForm}
        submit={submitForm}
      
      />


      {
        members.map(member => {
          return (
            <Team key={member.id} details={member} />
          )
        })
      }

    </div>

      
  );
}

export default App;
