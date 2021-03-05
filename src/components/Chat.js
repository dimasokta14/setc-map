import React, {useState} from 'react'
import styled from 'styled-components'
import {FormGroup, Label, TextArea, Select, Loading, Input} from './Forms'
import EmailJs from 'emailjs-com'
import SentMail from '../assets/sent-mail.gif'
import EmailErr from '../assets/email-error.gif'

const Sent = ({onClick}) => (
  <div style={{
    padding: '0px 0px 20px 0px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }}>
    <img src={SentMail} style={{maxWidth:'150px'}}/>
    <div
      style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
    >
      <h5
        style={{margin: '0px'}}
      >Berhasil Mengirim Pesan</h5>
      <h6 style={{margin: '0px', fontWeight: '500', fontSize: '12px'}}>Pertanyaan kamu akan kami balas secepatnya.</h6>
    </div>
    <div style={{marginTop: '10px'}}>
      <Button onClick={onClick}>Kembali</Button>
    </div>
  </div>
)

const Error = ({onClick}) => (
  <div style={{
    padding: '0px 0px 20px 0px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }}>
    <img src={EmailErr} style={{maxWidth:'150px'}}/>
    <div
      style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
    >
      <h5
        style={{margin: '0px'}}
      >Gagal Mengirim Pesan</h5>
      <h6 style={{margin: '0px', fontWeight: '500', fontSize: '12px'}}>Coba ulangi beberapa saat lagi.</h6>
    </div>
    <div style={{marginTop: '10px'}}>
      <Button onClick={onClick}>Kembali</Button>
    </div>
  </div>
)

const SentStatus= ({status, onClick}) => {
  return(
     <>
      {
        status === 'success' ? <Sent onClick={onClick}/> : <Error onClick={onClick}/>
      }
     </>
  )
}

const Chat = ({display, onClose}) => {

  const[isLoading, setIsLoading] = useState(false)
  const[status, setStatus] = useState('')
  const [isProccessed, setIsProcessed] = useState(false)
  const [mailTo, setMailTo] = useState('')
  const [values, setValues] = useState({
    topik: '',
    pesan: '',
    name:'',
    email: ''
  })

  console.log(values)
  console.log(mailTo)

  const handleSubmit = e => {
    e.preventDefault()
    setIsLoading(true)
    EmailJs.init("user_SsxDEOGOXgwF7dRhTTEs6");
    try {
      EmailJs.send("service_d2k0ccr","template_phjayrs",{
        topik: values.topik,
        name: values.name,
        message: values.pesan,
        email: values.email,
        reply_to: values.email,
        to_email: mailTo
      }).then((res) => {
        setValues({})
        setStatus('success')
        setIsProcessed(true)
        setIsLoading(false)
      })
    } catch (error) {
      setValues({})
      setStatus('error')
      setIsProcessed(true)
      setIsLoading(false)
    }
  }

  const selectEmail = (topik, prop) => {
    switch (topik) {
      case 'Pelatihan':
        setMailTo('ifanrizky@apps.ipb.ac.id')
      break;
      case 'Fasilitas Gedung':
        setMailTo('muhammadlaila058@gmail.com')
      break;
      case 'Fasilitas Lahan':
        setMailTo('muhammadlaila058@gmail.com')
      break;
      default: 
        setMailTo('setcsartc@gmail.com')
      break;
    }
  }

  const handleChange = (prop) => e => {
    console.log(prop)
    if (prop === 'topik') {
      selectEmail(e.target.value)
      setValues({...values, [prop]: e.target.value})
    } else {
      setValues({...values, [prop]: e.target.value})
    }
  }

  return (
    <Card display={display}>
      <CardHeader>
        <TextHeader>Kirim Pertanyaan</TextHeader>
        <CloseButton onClick={onClose}>
          <icon class='fas fa-times'/>
        </CloseButton>
      </CardHeader>
      <CardBody>
        {
          isProccessed ?
          <SentStatus onClick={() => setIsProcessed(false)} status={status}/>
          :
          <form onSubmit={handleSubmit}>
            <div>
              <FormGroup>
                <Label
                  style={{fontSize: '14px', fontWeight: '600'}}
                >Nama Lengkap</Label>
                <Input
                  placeholder='Nama lengkap kamu'
                  value={values.name}
                  onChange={handleChange('name')}
                  style={{padding: '0.5em'}} 
                />
              </FormGroup>
              <FormGroup>
                <Label
                  style={{fontSize: '14px', fontWeight: '600'}}
                >Email</Label>
                <Input
                  placeholder='Masukan email kamu'
                  value={values.email}
                  onChange={handleChange('email')}
                  style={{padding: '0.5em'}} 
                />
              </FormGroup>
              <FormGroup>
                <Label
                  style={{fontSize: '14px', fontWeight: '600'}}
                >Topik Pertanyaan</Label>
                <Select required style={{padding: '0.5em'}} onChange={handleChange('topik')} value={values.topik}>
                  <option value=''>Pilih topik pertanyaan</option>
                  <option value='Fasilitas Gedung'>Fasilitas Gedung</option>
                  <option value='Fasilitas Lahan'>Fasilitas Lahan</option>
                  <option value='Pelatihan'>Pelatihan</option>
                  <option value='Layanan lainnya'>Lainya</option>
                </Select>
              </FormGroup>
              <FormGroup>
                <Label
                  style={{fontSize: '14px', fontWeight: '600'}}
                >Pesan</Label>
                <TextArea
                  type='text'
                  value={values.pesan}
                  onChange={handleChange('pesan')}
                  required
                />
              </FormGroup>
            </div>
            <Button>
              {
                isLoading ? <Loading width='30px'/> : 'Kirim'
              }
            </Button>
          </form>
        }
      </CardBody>
    </Card>
  )
}

const Card = styled.div`
  bottom: 85px;
  left: 23px;
  width: 350px;
  max-height: 85vh;
  z-index: 99999 !important;
  position: fixed;
  overflow: hidden;
  border-radius: .25rem;
  --bg-opacity: 1;
  background-color: rgba(255,255,255,var(--bg-opacity));
  display: ${props => props.display || 'none'};
  flex-direction: column;
`

const CardHeader = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #407352;
  width: 100%;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const TextHeader = styled.h3`
  line-height: 28px;
  font-weight: 600;
  margin: 0px;
`

const CardBody = styled.div`
overflow-y: scroll;
max-height: 70vh;
overflow-x: hidden !important;
width: 100%;
padding: 10px;
--bg-opacity: 1;
    background-color: rgba(255,255,255,var(--bg-opacity));
`

const CloseButton = styled.div`
  width: 20%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  pointer-events: auto;
`

const Button = styled.button`
  color: #fff;
  border: none;
  padding: 5px 5px 5px 5px;
  outline: none;
  font-size: 14px;
  background: #407352;
  border-radius: 5px;
  width: 100px;
  height: 40px;
  cursor: pointer;
  pointer-events: auto;
  justify-content: center;
  align-items: center;
`
const Text = styled.p`
  color: #686f65;
  display: block;
  font-weight: 600;
  font-size: 12px;
`

export default Chat
