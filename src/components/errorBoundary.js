import React, { Component } from 'react';
class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            errorInfo: null,
            hasError: false
        }
    }
    componentDidCatch(error, errorInfo) {
        // This is for to log the error info into analytic service.
        console.log(error,"error11")
        console.log(errorInfo,"errorInfo12")
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
    }
    static getDerivedStateFromError(error) {
        // This method will call when any error happended due to rerendering child component and update the state
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
      }
    
    render() {
        if (this.state.hasError) {
            console.log("haserror")
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
          }
        
            return this.props.children;
        
        
           

        
    }
}

export default ErrorBoundary;