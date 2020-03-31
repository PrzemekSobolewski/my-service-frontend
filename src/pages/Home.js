import React, {useEffect} from 'react';
import { useHistory } from "react-router-dom";
import Cookies from 'universal-cookie';

const Home = () => {
  const history = useHistory();
  const cookies = new Cookies();
 
  useEffect(() => {
    if(cookies.get('token') === undefined) {
      history.push('/login');
    }
  });
  
  return (
    <div style={{height: "1200px", backgroundColor: "grey"}}>
        Witaj na Stronie Głównej.
    </div>
  );
}

export default Home;