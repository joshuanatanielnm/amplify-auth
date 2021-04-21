import { HashRouter, Route, Switch } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

import Nav from './Nav'
import Profile from './Profile'
import Protected from './Protected'
import Public from './Public'

const Router = () => {
  const [current, setCurrent] = useState('home')
  useEffect(() => {
    setRoute()
    window.addEventListener('hashchange', setRoute)
    return () => window.removeEventListener('hashchange', setRoute)
  }, [])
  function setRoute() {
    const location = window.location.href.split('/')
    const pathname = location[location.length - 1]
    setCurrent(pathname ? pathname : 'home')
  }
  return (
    <HashRouter>
      <Nav current={current} />
      <Switch>
        <Route exact path='/' component={Public} />
        <Route exact path='/protected' component={Protected} />
        <Route exact path='/profile' component={Profile} />
        <Route component={Public} />
      </Switch>
    </HashRouter>
  )
}
export default Router
