import Button from './Button'
import React from 'react'
import { styles } from './Form'

const ForgotPasswordSubmit = (props) => {
  return (
    <div style={styles.container}>
      <input
        name='confirmationCode'
        placeholder='Confirmation code'
        onChange={(e) => {
          e.persist()
          props.updateFormState(e)
        }}
        style={styles.input}
      />
      <input
        name='password'
        placeholder='New password'
        type='password'
        onChange={(e) => {
          e.persist()
          props.updateFormState(e)
        }}
        style={styles.input}
      />
      <Button onClick={props.forgotPasswordSubmit} title='Save new password' />
    </div>
  )
}
export default ForgotPasswordSubmit
