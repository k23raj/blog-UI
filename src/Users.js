import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
class Users extends React.Component {
    constructor(props) {
        console.log('constructor')
        super(props) 
        this.state = {
            users: []
        }
    }

    
    // after the first render 
    componentDidMount() {
        console.log('component did mount')
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                // console.log(response.data)
                this.setState(() => ({
                        users: response.data
                    })
               )
            })
    }

    render() {
        console.log('render')
        return (
            <div>
                <h2> Listing Users - { this.state.users.length } </h2> 
                <ul>
                        {this.state.users.map(user => <li key={user.id}>
                            <Link to={`/users/${user.id}`}      target="_blank">
                                {user.name}
                            </Link>
                        </li>)
                        }
                    </ul>
            </div> 
        )
    }
}

export default Users