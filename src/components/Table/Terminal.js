import { useState, useEffect, useRef } from 'react'

import isEmpty from 'validator/lib/isEmpty';
import isEmail from 'validator/lib/isEmail';


import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'

import './Terminal.css'
import axios from 'axios';

axios.defaults.baseURL = (process.env.NODE_ENV === 'development') ?
  'http://localhost:5000/api/v1' : 'https://jassardev.herokuapp.com/api/v1'

const Terminal = ({ open, setOpen }) => {

  const [convo, setConvo] = useState([])
  const [convoCount, setConvoCount] = useState(0)

  const [userData, setUserData] = useState({})

  const printInput = async (e, name) => {
    if (e.key === 'Enter') {
      // remove the input field first
      setConvo(status => {
        const removedInput = [...status].slice(0, -1)
        return [...removedInput, { component: e.target.value }]
      })
      // Verify the input
      if (!isEmpty(e.target.value)) {
        // Sending logic for the confirmation field
        if (name === 'confirm') {
          if (e.target.value.trim().toLowerCase() === 'y') {
            try {
              setConvo(status => [...status, { component: <span className='animated'>Sending</span> },])
              const data = (await axios.post('/contact', userData)).data;
              setConvo(status => {
                const removedInput = [...status].slice(0, -1)
                return [...removedInput, { component: <span className='done'>Sending</span> }]
              })
            } catch (error) {
              console.log(error)
            }
          } else if (e.target.value.trim().toLowerCase() !== 'n') {
            return setConvo(status => [...status, { component: 'hmmmmm, is that a y or an n?' }, { component: <TInput name={name} /> }])
          }
        }

        // Checking if email is email
        if (name === 'email') {
          if (!isEmail(e.target.value)) {
            return setConvo(status => [...status, { component: 'Come on man! that\'s not an email...' }, { component: <TInput name={name} /> }])
          }
        }

        // and then let's proceed to the next step
        setConvoCount(convoCount + 1)
        setUserData({ ...userData, [e.target.name]: e.target.value })
      } else {
        // Things to do if it's empty
        const errorMessage = name === 'name' ?
          'Please enter your name'
          : name === 'business' ?
            'Now now, don\'t be so shy, I won\'t judge you ;)'
            : name === 'email' ?
              'We do need your email address to contact you!'
              : 'Talk to me, say something please!'
        setConvo(status => [...status, { component: errorMessage }, { component: <TInput name={name} /> }])
        // if someone hits 'enter' without entering something, clear the input field so that if they hit enter again it will not think that the input is filled
        setUserData(state => ({ ...state, [e.target.name]: '' }))
      }
    }
  }

  const TInput = ({ name }) => {
    return <input
      autoFocus={name === 'bot' ? false : true}
      className={'input'}
      type="text"
      value={userData[name]}
      name={name}
      onKeyDown={(e) => { printInput(e, name) }}
      onChange={(e) => {
        setUserData(state => {
          const newState = { ...state }
          newState[name] = e.target.value
          return newState;
        })
      }}
    />
  }

  const messages = [
    [
      { component: <strong style={{ color: 'rgba(255,100,100)' }}>You can get out of here by hitting ESC at any time</strong>, atOnce: true, withBefore: true },
      { component: 'Hello friend!', },
      { component: 'I\'m glad that you found me!' },
      { component: <strong style={{ color: 'rgba(100,100,255)' }}>Did you know that I can help you create awesome websites like me?</strong> },
      { component: 'Let\'s get to know each other...', },
      { component: '************************************************', },
      { component: 'What is your name?', },
      { component: <TInput name='name' />, },
    ],
    [
      { component: <>Nice to meet you,  <strong>{userData.name}</strong>!</> },
      { component: 'Please tell me a little bit about your business', },
      { component: <span style={{ color: 'rgba(255,255,100)' }} > EXAMPLE: I work for Evill Corp, and we're trying to create a system that keeps track of our... ummm... patients.</span> },
      { component: <TInput name='business' />, },
    ],
    [
      { component: <>Oh wow! That sounds Exciting!!</> },
      { component: <>And what's a good email to reach out to you?</>, },
      { component: <TInput name='email' />, },
    ],
    [
      { component: <>Wonderful!</> },
      {
        component: <div>
          Let's confirm your information:
          <br />
          <br />
          <strong>Name:</strong> {userData.name}
          <br />
          <strong>Business:</strong> {userData.business}
          <br />
          <strong>Email:</strong> {userData.email}
          <br />
          <br />
          <span style={{ color: 'rgba(255,100,100)' }}>By sending the above information, you agree to be contacted using the email that you provided above!</span>
          <br />
          <strong>Would like to send us this information? Print Y for Yes, N for No </strong>
        </div >
      },
      { component: <TInput name='confirm' />, },
    ],
    userData.confirm && userData.confirm.trim().toLowerCase() === 'y' ?
      [
        { component: <>I'll be in touch soon!</> },
        { component: <>Have a great day!</> },
        { component: <>************************************************</> },
        { component: <>Hit ESC to close this terminal.</> },
      ]
      :
      [
        { component: <>Alright, no worries :')</> },
        { component: <>When you're ready, you can come back at any time! I'll be here.</> },
        { component: <>************************************************</> },
        { component: <>Hit ESC to close this terminal.</> },
      ]

    ,
  ]



  let waitTime = 0;

  useEffect(() => {
    waitTime = 0;
    messages[convoCount].forEach((message, index) => {
      waitTime++;
      setTimeout(() => {
        setConvo(status => [...status, message])
      }, waitTime * 5)
    })
  }, [convoCount])


  return (
    <>
      <Dialog
        fullScreen
        open={open}
        onClose={() => setOpen(false)}
      >
        <DialogContent
          className='terminal'
        >
          <ul>
            {convo.map((message, index) => (
              <li key={index}>
                {message.component}
              </li>
            ))}
          </ul>
        </DialogContent>
        <div style={{ position: 'fixed', right: -100000000 }}>
          <TInput name='bot' />
        </div>
      </Dialog>


    </>
  )
}

export default Terminal