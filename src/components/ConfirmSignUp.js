/* src/ConfirmSignUp.js */

import Button from './Button'
import React from 'react'
import { styles } from './Form'

const ConfirmSignUp = (props) => {
  return (
    <div style={styles.container}>
      <input
        name='confirmationCode'
        placeholder='Confirmation Code'
        onChange={(e) => {
          e.persist()
          props.updateFormState(e)
        }}
        style={styles.input}
      />
      <Button onClick={props.confirmSignUp} title='Confirm Sign Up' />
    </div>
  )
}
export default ConfirmSignUp
