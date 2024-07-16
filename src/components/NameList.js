import React from 'react'
import Person from './Person'

function NameList() {
  
    const persons =[
      {
      id: 1,
      name: 'Nifesimi',
      age: '24',
      skills: ' React, Typescript, html, css, tailwind,PHP, and more',
    },
  {
    id: 2,
    name: 'Damilola',
    age: '21',
    skills: 'Accounting',
  },
{
  id: 3,
  name: 'Marvelous',
  age: '25',
  skills: 'Trading',
}]
    const personList = persons.map(person =>
      ( <Person key={person.id} person={person}> </Person>) )
  return( 
        <div> {personList}</div>
  )
}

export default NameList
