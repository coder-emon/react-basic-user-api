
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Person name='Rabbi' profession='Designer' ></Person>
      <Person name='Emon' profession='Frontend Developer' ></Person>
      <Person name='Rabbi' profession='Backend Developer' ></Person>
      <Users></Users>
    </div>
  );
}
function Person(props){
  const [power, setPower] = useState(1)
  const increasePower = () => {
    let newPower = power *2;
    setPower(newPower)
  }
  return ( 
    <div className="person">
      <h2>Name: {props.name} </h2>
      <h3>Profession: {props.profession}</h3>
      <h5>Power: {power}</h5>
      <button onClick={increasePower}>Boost Power</button>
    </div>
  );
}
function Users(){
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return(
    <div className='users-container'>
      {users.map(user => <User name={user.name} email={user.email}></User>)}
    </div>
  )
}
function User(props){
  const{name, email} = props
  return(
    <div className='user'>
      <h2>Name: {name}</h2>
      <h3>Email: {email}</h3>
    </div>
  )
}
export default App;
