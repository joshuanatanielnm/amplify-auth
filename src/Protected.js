import React, { useEffect } from 'react'

import Container from './Container'
import protectedRoute from './protectedRoute'

function Protected(props) {
  return (
    <Container>
      <h1>Protected route</h1>
    </Container>
  )
}

export default protectedRoute(Protected)
