import React from 'react';

export default class HelloWorld extends React.Component {
    state = {
        user: {

        },

        isHelloVisible: true,
        message: 'hello',
        age: 35
    }

    toggleVisibility = () => {
        // this will be the instance
        console.log('button clicked');
        // {isHelloVisible: true/false, message, age}        
        this.setState({
            isHelloVisible: !this.state.isHelloVisible
        });

        // this.setState(() => {

        // })
    }

    // toggleVisibility2() {
    // this will be undefined
    // }

    render() {
        // {name: '...', age: '...'}
        // this.props

        return (
            <div>
                {
                    this.state.isHelloVisible && (
                        <h1>
                            Hello world class {this.props.name}
                        </h1>
                    )
                }
                <button onClick={this.toggleVisibility}>
                    Toggle visibility
                </button>
            </div>
            
        )
    }
}