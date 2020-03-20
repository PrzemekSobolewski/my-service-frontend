import React, {useEffect} from 'react';
import {getUser} from '../utils/Common';
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  useEffect(() => {
    let user = getUser()
    if(user === null) {
      history.push('/login')
    }
  })
  return (
    <div style={{height: "1200px", backgroundColor: "grey"}}>
        Witaj na Stronie Głównej.
    </div>
  );
}

export default Home;