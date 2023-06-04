import React from 'react';
import axios from 'axios';
import '../styles/Home.css';

interface UserFormProps {
    onSubmit: (username: string) => void;
}
  
  const UserForm: React.FC<UserFormProps> = ({ onSubmit }) => {
    const [username, setUsername] = React.useState('');
  
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
  
      try {
        await axios.post('/api/users', { username });
        onSubmit(username);
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
        <div className='mainContainer'>
            <form onSubmit={handleSubmit} className='nameForm'>
            <div className="input-group"> 
                <input type="text" placeholder=" " value={username} onChange={(event) => setUsername(event.target.value)} />
                <label className='lbl-nombre'> <span className="text-nomb">Nombre</span> </label> 
            </div> 
                <div className='btnContainer'>
                    <button className="btn">
                        <span>aceptar</span>
                        <div className="dot"></div>
                    </button>
                </div>

            </form>
        </div>

    );
  };
  
  class Home extends React.Component {
    render() {
      return (
        <div>
          <h1>Bienvenido</h1>
          <UserForm onSubmit={(username) => console.log(`El nombre de usuario es ${username}`)} />
        </div>
      );
    }
  }

export default Home;