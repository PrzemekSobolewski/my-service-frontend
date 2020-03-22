import React, {useEffect} from 'react';
import { useHistory } from "react-router-dom";
import { useCookies } from 'react-cookie';

const Home = () => {
  const history = useHistory();
  const [cookies] = useCookies(['token']);

  useEffect(() => {
    if(cookies.token === undefined) {
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