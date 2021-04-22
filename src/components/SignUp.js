import Button from './Button'
import React from 'react'
import { styles } from './Form'

const SignUp = ({ updateFormState, SignUp }) => {
  return (
    <div style={styles.container}>
      <input
        type='text'
        name='username'
        style={styles.input}
        placeholder='username'
        onChange={(e) => {
          e.persist()
          updateFormState()
        }}
      />
      <input
        type='password'
        name='password'
        style={styles.input}
        placeholder='password'
        onChange={(e) => {
          e.persist()
          updateFormState()
        }}
      />
      <input
        type='text'
        name='email'
        style={styles.input}
        placeholder='email'
        onChange={(e) => {
          e.persist()
          updateFormState()
        }}
      />

      <Button onClick={SignUp} title='Sign Up' />
    </div>
  )
}

export default SignUp
