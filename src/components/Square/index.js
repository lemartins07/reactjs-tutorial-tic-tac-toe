import React from 'react';

import { Button } from './styles';

function Square (props){    
  return (
    <Button 
      className="square" 
      onClick={() => props.onClick()}
    >
      {props.value}
    </Button>
  );
}

export default Square;