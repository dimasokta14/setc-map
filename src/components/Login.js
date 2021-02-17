import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Hi from '../assets/images/hi.png';
import {Input, Label, FormGroup, Message} from '../components/Forms';
import {userActions} from '../actions'
import {connect} from 'react-redux'


const Login = (props) => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    submitted: false
  })
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    setValues({submitted: true})
    const {dispatch} = props
    if(values.email && values.password) {dispatch(userActions.login(values.email, values.password))}
  }

  useEffect(() => {
    const {dispatch} = props
    dispatch(userActions.logout())
  },[])
  return (
  <Container>
    <ContainerContent>
      <FormContainer>
        <FormLeft>
          <img src={Hi} width='350px'/>
        </FormLeft>
        <FormRight>
            <Title>Selamat Datang!<br/>Dimas Okta Arifani</Title>
          <>
            <form onSubmit={handleSubmit()}>
              <div>
                <FormGroup>
                  <Label>Email</Label>
                  <Input
                    placeholder='Masukan Email Kamu'
                    type='text'
                    onChange={() => handleChange('email')}
                    value={values.email}
                    autoFocus
                  />
                  {
                    values.submitted && !values.email &&
                      <Message>mohon masukan email kamu</Message>
                  }
                </FormGroup>
                <FormGroup>
                  <Label>Password</Label>
                  <Input
                    type='text'
                    onChange={() => handleChange('password')}
                    value={values.password}
                    autoFocus
                  />
                  {
                    values.submitted && !values.password &&
                      <Message>mohon masukan password kamu</Message>
                  }
                </FormGroup>
              </div>
              <Button>Login</Button>
              {props.loggingIn &&
                  <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
              }
            </form>
          </>
        </FormRight>
      </FormContainer>
    </ContainerContent>
    <ContainerFooter>
      <Items>
        <Item>
          @2021 Sampoerna Entrepreneurship Training Center
        </Item>
        {/* <Item><a>Terms</a></Item> */}
      </Items>
    </ContainerFooter>
  </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  background-color: white;
  position: absolute;
  z-index: 99999;
  height: 100vh;
`
const FormContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const FormLeft = styled.div`
  float: left;
`
const FormRight = styled.div`
  float: right;
  margin-left: -200px;
  
`
const Title = styled.h1`
  font-family: 'Nunito', sans-serif;
  color: #0D2840;
`
const ContainerFooter = styled.div`
  flex: 20%;
  position: absolute;
  bottom: 0px;
  padding: 20px 20px 0px 20px;
`
const ContainerContent = styled.div`
  flex: 80%;
`
const Items = styled.ul`
  list-style: none;
`
const Item = styled.li`
  font-size: 12px;
`

const Button = styled.button`
  color: #fff;
  border: none;
  padding: 5px 10px 5px 10px;
  outline: none;
  font-size: 14px;
  background: #0D2840;
  border-radius: 5px;
  width: 100px;
  height: 40px;
  cursor: pointer;
  pointer-events: auto;
  justify-content: center;
  align-items: center;
`
const mapStateToProps = (state) => {
  return{
    loggingIn: state.authentication
  }
}

export default connect(mapStateToProps, null)(Login)
