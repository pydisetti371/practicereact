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
        console.log(error,"error11")
        console.log(errorInfo,"errorInfo12")
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
    }
    static getDerivedStateFromError(error) {
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