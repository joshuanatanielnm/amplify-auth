import Button from './Button'
import React from 'react'
import { styles } from './Form'

const SignIn = ({ signIn, updateFormState }) => {
  return (
    <div style={styles.container}>
      <input
        type='text'
        name='username'
        style={styles.input}
        placeholder='username'
        onChange={(e) => {
          e.persist()
          updateFormState(e)
        }}
      />
      <input
        type='password'
        name='password'
        style={styles.input}
        placeholder='password'
        onChange={(e) => {
          e.persist()
          updateFormState(e)
        }}
      />
      <Button title='Sign In' onClick={signIn} />
    </div>
  )
}

export default SignIn
