import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
  }

  *:focus{
    outline: 0;
  }

  html,body,#root{
    display:flex;
    align-items:center;
    justify-content: center;
    height: 100%;
  }
  
  body{
    background: #171923;
    -webkit-font-smoothing: antialiase;
  }

  body, input, button, textarea{
    font: 14px 'Roboto', sans-serif;
    color: white;
  }

  input{
    height: 50px;
    width: 100%;
    border-radius: 8px;
    padding: 0 16;
    background: #FFF;
    border: 2px solid #519;
    color: #2c2c2c;
  }

  input::placeholder{
    color: #519;
  }

  button{
    cursor: pointer;
    height: 50px;
    width: 150px;
    border-radius: 8px;
    font-weight: 500;
    color: #FFF;
    border: 0;
    background: #519;
  }
`;