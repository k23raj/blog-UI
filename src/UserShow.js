import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class UserShow extends React.Component {
   
        constructor(props) {
        super(props)
        this.state = {
            posts: [],
            user: {},
            limit:3,
            incBy:3
            
        }
        this.handleLoad = this.handleLoad.bind(this)
    }

    handleLoad() {
        this.setState((prevState) => ({
            limit: prevState.limit + this.state.incBy
        }))
    }
    componentDidMount(){ 
        const id = this.props.match.params.id 
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => {
                // console.log(response.data) 
                const user = response.data 
                this.setState(() => ({ user }))

            })

        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then(response => {
                // console.log(response.data) 
                const posts = response.data 
                this.setState(() => ({ posts }))
                console.log(posts)
            }) 
    }

    render() {
        console.log(this.props)
        return (
            <div>
            <h1>UserShow</h1>
              <h2>{this.state.user.name}</h2>
                <p> Email{ this.state.user.email}</p>
                <h2>Listing Posts</h2>
                       
                   <ul>
                        {this.state.posts.slice(0, this.state.limit).map(post => {
                            return <li key={post.id}>
                            <Link to={`/posts/${post.id}`} target="_blank">
                                {post.title}
                            </Link>
                        </li>
                        })
                        }
                    </ul> 
                    {this.state.limit<=this.state.posts.length-this.state.incBy && <button onClick={this.handleLoad}>load more</button>}
            </div>
        )
    }
}

export default UserShow
