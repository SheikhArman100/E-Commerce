import { AiOutlineClose } from 'react-icons/ai';
import styled from "styled-components";

export const FormContainer=styled.div`
  margin: 20px auto;
  width: 400px;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
  position: relative;
  border-radius: 10px;
  height: 600px;
  display: grid;
  grid-template-columns: 1fr;
`
export const SignupClose=styled(AiOutlineClose)`
  position: absolute;
  top: 2%;
  right: 3%;
  font-size: 1.5rem;
  z-index: 1;
  color: #fff;
  cursor: pointer;
`

export const FormContentRight=styled.div`
  border-radius: 0 10px 10px 0;
  position: relative;
  
  background: linear-gradient(90deg, rgb(40, 40, 40) 0%, rgb(17, 17, 17));
  
  form{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h1{
    font-size: 1rem;
     text-align: center;
    width: 80%;
    margin-bottom: 1rem;
    color: #fff;
  }
  img{
    width: 60%;
    height: 60%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`
export const FormInputs=styled.div`
    margin-bottom: 0.5rem;
    width: 80%;
    label{
        display: inline-block;
        font-size: 0.8rem;
        margin-bottom: 6px;
        color: #fff;
    }
    input{
        display: block;
        padding-left: 10px;
        outline: none;
        border-radius: 2px;
        height: 40px;
        width: 100%;
        border: none;
        &::placeholder{
            color: #595959;
            font-size: 12px;
        }
    }
    p{
        font-size:0.8rem ;
        color:red;
    }
`
export const FormInputButton=styled.button`
width: 80%;
  height: 50px;
  margin-top: 10px;
  border-radius: 2px;
  background: linear-gradient(
    90deg,
    rgb(39, 176, 255) 0%,
    rgb(0, 232, 236) 100%
  );
  outline: none;
  border: none;
  color: #fff;
  font-size: 1rem;

  &:hover{
    cursor: pointer;
  background: linear-gradient(
    90deg,
    rgb(39, 143, 255) 0%,
    rgb(12, 99, 250) 100%
  );
  transition: all 0.4s ease-out;
  }
`
export const FormInputLogin=styled.span`
    font-size: 0.8rem;
    margin-top: 10px;
    color: #fff;
    width: 80%;
    text-align: center;
    a{
        text-decoration: none;
        color: #27cdff;
        font-weight: 600;
    }
`
export const FormInputSignup=styled.span`
    font-size: 0.8rem;
    margin-top: 10px;
    color: #fff;
    width: 80%;
    text-align: center;
    a{
      text-decoration: none;
      color: #27cdff;
      font-weight: 600;
    }
    `
   export const Errormsg=styled.p`
   color:red;
   font-size:1rem ;
   font-weight:bolder ;
   `