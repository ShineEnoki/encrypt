import { styled } from 'styled-components';

export const RootContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
`
export const ChangeProcess = styled.div`
  width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const ProcessBox = styled.p`
  background-color: rgba(0, 0, 0, 0.2);
  color: blue;
  width: 100px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  margin: 12px 0 0 0;

  input{
    width: 300px;
    height: 40px;
    border-radius: 27px;
    padding-left: 10px;
    font-size: 16px;
  }
`

export const Textarea = styled.textarea`
  padding: 4px;
  width: 300px;
  height: 150px;
  padding: 12px;
  font-size: 16px;
  font-family: 'BenchNine', serif;
`

export const Output = styled.p`
  width: 300px;
  height: 100px;
  background-color: rgba(0, 0, 0, 0.2);
  color: black;
  padding: 8px;
  margin: 12px 0 0 0;
  border-radius: 12px;
  white-space: pre-wrap; 
  word-wrap: break-word; 
`

export const Button = styled.button`
  width: 300px;
  height: 45px;
  border-radius: 25px;
`