import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-direction: column;
`

export default function TeamForm(props){

    //these are the props that the form requires

    const { values, update, submit } = props;

    const onChange = evt => {
        const { name, value } = evt.target
        update(name, value);
    }

    const onSubmit = evt => {
        evt.preventDefault();

        submit(); //This pulls from the submit prop consted above on line 7
    }

    return (

    <Container>
        
        <form className='form container' onSubmit={ onSubmit }>

            <div className='form-group inputs'>

                {/* Text Inputs go here */}

                <label> Name:

                    <input 

                        type="text"
                        value={values.name}
                        placeholder="Name"
                        name="name"
                        maxLength="45"
                        onChange={onChange}
                    
                    />

                </label>    

                <label>Email:
                {/* 🔥 STEP 4 - Make an input of type `email` or `text` for email. */}
                <input 
                    type="email"
                    value={values.email}
                    placeholder="Email"
                    name="email"
                    maxLength="50"
                    onChange={onChange}
                />
                </label>

                <label>Role:

                    {/* Drop Down to select Role! */}

                    <select name="role" onChange={onChange} value={values.role}>

                        <option>Click To Select</option>
                        <option>Full-Stack</option>
                        <option>Front End</option>
                        <option>Back End</option>
                        <option>Data Scientist</option>
                        <option>UX And Design</option>

                    </select>

                </label>


                <div className='submit'>

                    <button>submit</button>

                </div>

            </div>

        </form>

        </Container>

    )

}