import React, { Component } from 'react'
import './App.css'

import QRCode from 'qrcode.react'

import { Card, CardPanel, Col, Row, TextInput, Button, Icon } from 'react-materialize'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      token: "",
      generated: false
    }
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
      generated: false
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    const { token, name, email } = this.state
    if (token !== "" && name !== "" && email !== "") {
      this.setState({
        generated: true
      })
    }
  }

  generateQRCode() {
    const { token, name, email } = this.state
    const encodedString = btoa(token + ":" + name + ":" + email)
    return (
      <div style={{backgroundColor: `white`, marginTop: `50px`, padding: `10px 10px 0 10px`}}>
        <QRCode value={`https://mdzkm.github.io/qr-attendance?key=${encodedString}`} />
      </div>
    )
  }

  getParameterByName(name) {
    let url = typeof window !== "undefined" && window.location.href
    name = name.replace(/[\[\]]/g, "\\$&")
    let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url)
    if (!results) return null
    if (!results[2]) return ""
    return decodeURIComponent(results[2].replace(/\+/g, " "))
  }  

  render() {
    const { token, name, email, generated } = this.state

    var signed = false

    var signedName = ""
    var signedEmail = ""

    if (this.getParameterByName("key") !== null && this.getParameterByName("key") !== "") {
      var temp = atob(this.getParameterByName("key"))
      temp = temp.split(":")
      signedName = temp[1]
      signedEmail = temp[2]
      
      signed = true
    }

    return (
      <div className="App App-header">
        {signed ? 
          <Row>
            <Col
              m={6}
              s={12}
            >
              <Card
                actions={[
                  <a key="1" href="https://mdzkm.github.io/qr-attendance">Return to home</a>,
                  <a key="2" href="https://github.com/mdzkm/qr-attendance">Visit repo</a>
                ]}
                className="blue-grey darken-1"
                closeIcon={<Icon>close</Icon>}
                revealIcon={<Icon>more_vert</Icon>}
                textClassName="white-text"
                title="Your attendance has been recorded"
              >
                Name: <b>{signedName}</b><br/>
                Email: <b>{signedEmail}</b>
              </Card>
            </Col>
          </Row> :
          <>
            <Row>
              <Col
                m={12}
                s={12}
              >
                <CardPanel className="teal" style={{ fontSize: `18px` }}>
                  <span className="white-text">
                    Enter your token, name, and email in the input boxes below to unlock today's attendance QR code!
                  </span>
                </CardPanel>
              </Col>
            </Row>
            <TextInput
              label="Token"
              name="token"
              password
              className="white-text"
              value={token}
              style={{ minWidth: `25vw` }}
              onChange={event => this.handleInputChange(event)}
            />
            <TextInput
              label="Name"
              name="name"
              className="white-text"
              value={name}
              style={{ minWidth: `25vw` }}
              onChange={event => this.handleInputChange(event)}
            />
            <TextInput
              email
              name="email"
              error="Enter a valid email address!"
              label="Email"
              validate
              className="white-text"
              value={email}
              style={{ minWidth: `25vw` }}
              onChange={event => this.handleInputChange(event)}
            />
            <Button
              node="button"
              type="submit"
              waves="light"
              style={{ marginTop: `10px` }}
              onClick={event => this.handleSubmit(event)}
            >
              Generate
              <Icon right>
                image
              </Icon>
            </Button>
            { generated ? this.generateQRCode() : <></> }
          </>
        }
      </div>
    )
  }
}

export default App
