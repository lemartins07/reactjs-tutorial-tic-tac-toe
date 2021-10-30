import styled from 'styled-components';

export const Container = styled.div`
  
  height: 100vh;  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color:  #61dafb;
    font-size: 45px;
    margin-bottom: 40px;
  }
  .game-info {
    margin-top: 20px;
    width: 100%;
    max-width: 297px;
  }

  ol {        
    margin-top: 20px;
    color: #fff;  
  }

  ol li {   
     display: inline-block; 
     width: 100%; 
     margin-bottom: 20px;    
  }

  li button { 
    width: 100%; 
    height: 34px;
    background: #61dafb;
    border: 0;
    border-radius: 3px;
    font-size: 18px;
    cursor: pointer;   

    &:hover{ 
      filter: brightness(0.9);
    }

    &:active {
      filter: brightness(0.5);
      position:relative;
      top:5px;
    }
  }

  .game-status {
    font-size: 2.5em;
  }
`;

