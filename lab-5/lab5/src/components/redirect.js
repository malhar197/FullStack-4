import React from 'react';

const Redirect = (props)=>{
    const handleRedirectClick = ()=>{
        const { history } = props;
        if(history) history.push('/');
        else console.log('No history');
    };

    return (
      <div>
        <p>Redirect</p>
        <button onClick={handleRedirectClick}>Redirect</button>
      </div>
    );
};

export default Redirect; 