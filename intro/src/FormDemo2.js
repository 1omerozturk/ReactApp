import React, { Component } from 'react'
import alertify from 'alertifyjs'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
export default class FormDemo2 extends Component {
  state = { email: '', password: '', city: '', desctiprion: '' }

  handleChange = (event) => {
    let name = event.target.name
    let value = event.target.value

    this.setState({ [name]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    alertify.success(this.state.email + ' added to db!')
    alertify.success('Password added to db!')
    alertify.success('Description added to db!')
    alertify.success('City added to db!')
  }

  render() {
    return (
      <div className='float-right'>
        <Form className="bg-info" onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              onChange={this.handleChange}
              id="email"
              placeholder="Enter email"
            ></Input>
          </FormGroup>

          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              onChange={this.handleChange}
              id="password"
              placeholder="Enter password"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              type="textarea"
              name="description"
              onChange={this.handleChange}
              id="description"
              placeholder="Enter description"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="city">City</Label>
            <Input
              type="select"
              name="city"
              id="city"
              onChange={this.handleChange}
              >
              <option>Adana</option>
              <option>Adıyaman</option>
              <option>Ağrı</option>
              <option>Afyonkarahisar</option>
              <option>Amasya</option>
            </Input>
          </FormGroup>
          <Button className='btn btn-success float-end' type='submit' >Save</Button>
        </Form>
      </div>
    )
  }
}
