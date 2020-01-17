import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions/userActions'
import logo from '../../logo.svg'
import '../../App.css'

type Props = {
  getUser: (any) => mixed
}

const Login = ({ getUser }: Props) => {
  useEffect(() => {
    // dispatching action call
    getUser({ userId: 'testLogin2' })
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/componentes/Login</code> and save to reload.
        </p>
      </header>
    </div>
  )
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...actions }, dispatch)

export default connect(null, mapDispatchToProps)(Login)
