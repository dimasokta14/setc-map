import React, { useState } from 'react';
import {FormGroup, Label, Input, Select, Options, CustomInput} from '../Forms';
import styled from 'styled-components';

export const Name = ({onChangeFirstName, valueFirstName, currentStep, navigation, onChangeLastName, valueLastName}) => {

  if(currentStep !== 'name') {
    return null
  }

  const {next} = navigation

  return (
    <div>
      <div className='row'>
        <FormGroup>
          <Label>Boleh tau Nama Lengkap Kamu ?</Label>
          <Input
            className='u-full-width'
            placeholder='Nama Depan'
            type='text'
            onChange={onChangeFirstName}
            value={valueFirstName}
            autoFocus
          />
        </FormGroup>
        <FormGroup>
          <Input
            className='u-full-width'
            placeholder='Nama Belakang'
            type='text'
            onChange={onChangeLastName}
            value={valueLastName}
            autoFocus
          />
        </FormGroup>
      </div>
      <Row>
        <ButtonNext onClick={next}>Lanjut</ButtonNext>
      </Row>
    </div>
  )
}

export const EmailPhone = ({onChangeEmail, onChangePhone, valueEmail, valuePhone, currentStep, navigation}) => {

  const {prev, next} = navigation

  if(currentStep !== 'email') {
    return null
  }

  return (
    <div>
      <div className='row'>
        <FormGroup>
          <Label>Silahkan Masukan Email Kamu</Label>
          <Input
            className='u-full-width'
            placeholder='contoh: admin@mail.com'
            type='text'
            onChange={onChangeEmail}
            value={valueEmail}
            autoFocus
          />
        </FormGroup>
      </div>
      <div className='row'>
        <FormGroup>
          <Label>Silahkan Masukan Nomor HP Kamu</Label>
          <Input
            className='u-full-width'
            placeholder='contoh: 08134566XXXX'
            type='text'
            onChange={onChangePhone}
            value={valuePhone}
            autoFocus
          />
        </FormGroup>
      </div>
      <Row>
        <ButtonPrev onClick={prev}>Kembali</ButtonPrev>
        <ButtonNext onClick={next}>Lanjut</ButtonNext>
      </Row>
    </div>
  )
}

export const Institusi = ({onChangeGroup, onChangeInstitusi, valueGroup, valueInstitusi, currentStep, navigation}) => {

  const {next, prev} = navigation

  if(currentStep !== 'group') {
    return null
  }

  return (
    <div>
      <div className='row'>
        <FormGroup>
          <Label>Kamu dari Kelompok Mana ?</Label>
          <Select
            onChange={onChangeGroup}
            value={valueGroup}
            autoFocus
          >
            <Options>Pilih Kelompok</Options>
            <Options>Akademi</Options>
          </Select>
        </FormGroup>
      </div>
      <div className='row'>
        <FormGroup>
          <Label>Silahkan Masukan Asal Institusi Kamu</Label>
          <Input
            className='u-full-width'
            placeholder='contoh: Sampoerna Entrepreneurship Training Center'
            type='text'
            onChange={onChangeInstitusi}
            value={valueInstitusi}
            autoFocus
          />
        </FormGroup>
      </div>
      <Row>
        <ButtonPrev onClick={prev}>Kembali</ButtonPrev>
        <ButtonNext onClick={next}>Lanjut</ButtonNext>
      </Row>
    </div>
  )
}

export const NewsLetter = ({valueNews, onChangeNews, currentStep, onSubmit, navigation}) => {
 
  const {prev} = navigation

  if(currentStep !== 'news') {
    return null
  }

  return (
    <div>
      <div className='row'>
        <FormGroup>
          <Label>Kamu dari Kelompok Mana ?</Label>
          {/* <Input
            className='u-full-width'
            placeholder='contoh: admin@mail.com'
            type='text'
            onChange={onChangeNews}
            value={valueNews}
            autoFocus
          /> */}
          <Radio type='radio' value={valueNews} onChange={onChangeNews} checked={valueNews}/>Ya
          <Radio type='radio' value={valueNews} onChange={onChangeNews} checked={!valueNews}/>Tidak
        </FormGroup>
      </div>
      <Row>
        <ButtonPrev onClick={prev}>Kembali</ButtonPrev>
        <ButtonNext onClick={onSubmit}>Simpan</ButtonNext>
      </Row>
    </div>
  )
}

export const Password = ({
  currentStep, 
  navigation, 
  onChangePassword, 
  onChangeRetypePassword, 
  valuePassword, 
  valueRetypePassword,
  onClickPwd,
  onClickRePwd,
  visibilityPwd,
  visibilityRePwd
}) => {

  const {prev, next} = navigation

  if(currentStep !== 'password') {
    return null
  }

  return(
    <>
      <div className='row'>
        <FormGroup>
          <Label>Buat Password</Label>
          <div style={{position:'relative'}}>
            <CustomInput
              className='u-full-width'
              type={visibilityPwd ? 'text' : 'password'}
              onChange={onChangePassword}
              value={valuePassword}
              autoFocus
            />
            <button className='unmask' onClick={onClickPwd}>
              {
                !visibilityPwd ? 
                  <i className='far fa-eye-slash' style={{color:'#686f65'}}/> :
                  <i className='far fa-eye' style={{color:'#0D2840'}}/>
              }
            </button>
          </div>
        </FormGroup>
      </div>
      <div className='row'>
        <FormGroup>
          <Label>Ketik Ulang Password</Label>
          <div style={{position:'relative'}}>
            <CustomInput
              className='u-full-width'
              onChange={onChangeRetypePassword}
              value={valueRetypePassword}
              type={visibilityRePwd ? 'text' : 'password'}
              autoFocus
            />
            <button className='unmask' onClick={onClickRePwd}>
              {
                !visibilityPwd ? 
                  <i className='far fa-eye-slash' style={{color:'#686f65'}}/> :
                  <i className='far fa-eye' style={{color:'#0D2840'}}/>
              }
            </button>
          </div>
        </FormGroup>
      </div>
      <Row>
        <ButtonPrev onClick={prev}>Kembali</ButtonPrev>
        <ButtonNext onClick={next}>Lanjut</ButtonNext>
      </Row>
    </>
  )
}

const ButtonNext = styled.button`
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
const ButtonPrev = styled.button`
  color:  #0D2840;
  border: solid #0D2840 1px;
  padding: 5px 10px 5px 10px;
  outline: none;
  font-size: 14px;
  background: white;
  border-radius: 5px;
  width: 100px;
  height: 40px;
  cursor: pointer;
  pointer-events: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`
const Row = styled.div`
  display: flex;
  margin-top: 30px;
`
const Radio = styled.input`

`