import React from 'react'
import { Link, Redirect } from 'react-router-dom';
import Card from './../../components/shared/Card/Card';
import Button from './../../components/shared/Button/Button';

const Home = () => {

//    const navigate = useNavigate();

    function startRegister(){
        // navigate('/register')
        console.log('Registering')
    }



  return (
  <Card title="Welcome to Blithe!!">
  <p
    className="text-xl text-gray-400"
    >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, voluptatibus! Placeat ab culpa nemo quis quod distinctio enim delectus! Ducimus provident omnis laborum odit error fugiat rerum obcaecati unde suscipit?
    </p>
    <div>
        <Button
            onClick={startRegister}
            text="Get a Username"
        />
    </div>

    <div>
        <span 
        className="text-twitterBlue font-bold mx-1"
        >Have an invite text?</span>
        <Link
        to="/login"
        className="mx-1 font-bold"
        >Sign In</Link>
    </div>
  </Card>
  )
}

export default Home