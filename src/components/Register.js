import React, {useState} from 'react';
import styled from 'styled-components';
import Hi from '../assets/images/hi.png';
import {Name, EmailPhone, Institusi, NewsLetter, Password} from '../components/FormStep/MultiStep';
import {useForm, useStep} from 'react-hooks-helper'
import {userActions} from '../actions'
import {connect} from 'react-redux'

const steps = [
  {id: 'name'},
  {id: 'email'},
  {id: 'password'},
  {id: 'group'},
  {id: 'news'},
  {id: 'submit'}
]


const Register = (props) => {
  // const [currentStep, setCurrentStep] = useState(1)
  const {step, navigation} = useStep({initialStep: 0, steps})
  const [visibilityPassword, setVisibilityPassword] = useState(false)
  const {id} = step
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    group: '',
    institusi: '',
    newsletter: false,
    password: '',
    rePassword: ''
  })
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleShowPassword = () => {
    setVisibilityPassword(!visibilityPassword)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      props.signUp(values)
      return console.log('success')
    } catch (error) {
      console.log(error)
    }
  }
  return (
  <Container>
    <ContainerContent>
      <FormContainer>
        <FormLeft>
          <img src={Hi} width='350px'/>
        </FormLeft>
        <FormRight>
            <Title>Selamat Datang!<br/>{values.firstName !== '' ? `${values.firstName} ${values.lastName}` : null}</Title>
          <>
              <Name 
                onChangeFirstName={handleChange('firstName')}
                onChangeLastName={handleChange('lastName')}
                valueFirstName={values.firstName}
                valueLastName={values.lastName}
                currentStep={id}
                navigation={navigation}
              />
              <EmailPhone 
                onChangeEmail={handleChange('email')}
                valueEmail={values.email}
                onChangePhone={handleChange('phone')}
                valuePhone={values.phone}
                currentStep={id}
                navigation={navigation}
              />
              <Password
                onChangePassword={handleChange('password')}
                onChangeRetypePassword={handleChange('rePassword')}
                valuePassword={values.password}
                valueRetypePassword={values.rePassword}
                currentStep={id}
                navigation={navigation}
                onClickPwd={handleShowPassword}
                onClickRePwd={handleShowPassword}
                visibilityPwd={visibilityPassword}
                visibilityRePwd={visibilityPassword}
              />
              <Institusi 
                onChangeGroup={handleChange('group')}
                valueGroup={values.group}
                onChangeInstitusi={handleChange('institusi')}
                valueInstitusi={values.institusi}
                currentStep={id}
                navigation={navigation}
              />
              <NewsLetter 
                onChangeNews={handleChange('name')}
                valueNews={values.name}
                currentStep={id}
                navigation={navigation}
                onSubmit={handleSubmit}
              />
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
const ButtonEnter = styled.div`
  color: #fff;
  border: none;
  padding: 5px 10px 5px 10px;
  outline: none;
  font-size: 18px;
  margin-top: -60px;
  background: #0D2840;
  border-radius: 5px;
  -webkit-box-shadow: 0 0 20px rgba(0,0,0,0.1);
          box-shadow: 0 0 20px rgba(0,0,0,0.1);
  -webkit-transition: 300ms ease-in-out;
  -o-transition: 200ms ease-in-out;
  transition: 200ms ease-in-out;
  width: 300px;
  height: 50px;
  cursor: pointer;
  pointer-events: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ButtonNext = styled.button`
  color: #fff;
  border: none;
  padding: 5px 10px 5px 10px;
  outline: none;
  font-size: 18px;
  margin-top: -60px;
  background: #0D2840;
  border-radius: 5px;
  -webkit-box-shadow: 0 0 20px rgba(0,0,0,0.1);
          box-shadow: 0 0 20px rgba(0,0,0,0.1);
  -webkit-transition: 300ms ease-in-out;
  -o-transition: 200ms ease-in-out;
  transition: 200ms ease-in-out;
  width: 300px;
  height: 50px;
  cursor: pointer;
  pointer-events: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Form = styled.div`
  width: 100%
`

//Dispatch to props
const mapDispatchToProps = dispatch => {
  return {
    signUp: (userInfo) => dispatch(userActions.signUp(userInfo))
  }
}

export default connect(null, mapDispatchToProps)(Register)
