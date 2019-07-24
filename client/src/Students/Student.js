import React, {Component} from 'react';

class Students extends Component{

    constructor(){
        super();
        this.state = {
            students: [],

        }
    }

    async componentDidMount(){
        const res = await fetch('/api/students');
        const data = await res.json();
        this.setState({
          students: data,
        })
      }

      render(){
          return <div>{this.state.students}</div>;
        }

}

export default Students;