import styled from 'styled-components';
import LoadingImg from '../assets/rolling.gif'

export const FormGroup = styled.div`
	color: palevioletred;
  display: block;
	width: 100%;
	margin: 10px 0px;
`;

export const Label = styled.label`
	margin-bottom: 0.5em;
	color: #686f65;
  display: block;
  font-weight: 800;
`;


export const Input = styled.input`
	padding: 1em;
	color: black;
	background: white;
	border: solid #686f65 1px;
	border-radius: 5px;
	width: 100%;
  margin-bottom: 0.5em;
  font-size: 14px;
`;

export const TextArea = styled.textarea`
  padding: 1em;
  color: black;
  background: white;
  border: solid #686f65 1px;
  border-radius: 5px;
  width: 100%;
  margin-bottom: 0.5em;
  font-size: 14px;
`

export const Message = styled.label`
	margin-bottom: 0.5em;
	color: red;
    display: block;
    font-size: 12px;
`;

export const Select = styled.select`
  padding: 1em;
  color: black;
  background: white;
  border: solid #686f65 1px;
  border-radius: 5px;
  width: 100%;
  margin-bottom: 0.5em;
  font-size: 14px;
`

export const CustomInput = styled.input`
  padding: 1em;
  color: black;
  background: white;
  border: solid #686f65 1px;
  border-radius: 5px;
  width: 100%;
  margin-bottom: 0.5em;
  font-size: 14px;
  + .unmask {
    position: absolute;
    right: 5%;
    top: 10px;
    width: 25px;
    height: 25px;
    background: transparent;
    border-radius: 50%;
    cursor:pointer;
    border: none;
    font-family:'fontawesome';
    font-size:14px;
    line-height:24px;
    -webkit-appearance:none;
    outline:none
  };
  .unmask&:before{
    content: "\f06e";
    position:absolute;
    top:0; left:0;
    width: 25px;
    height: 25px;
    background: rgba(205,205,205,0.2);
    z-index:1;
    color:#aaa;
    border:2px solid;
    border-radius: 50%;
  };
  [type='text'] + .unmask&:before{
    content:"\f070";
    background: rgba(105,205,255,0.2);
    color:#06a
  }
`

export const Loading = ({width}) => {
  return(
    <img src={LoadingImg} width={width}/>
  )
}


export const Options = styled.option``
