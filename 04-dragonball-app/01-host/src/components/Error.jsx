import React from 'react'

export class Error extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true }
  }
  
  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo)
  }
  
  render() {
    console.log(this.state.hasError)
    if (this.state.hasError) {
      return <h1>ERROR!!! Something went wrong.</h1>
    }
    return this.props.children
  }
}