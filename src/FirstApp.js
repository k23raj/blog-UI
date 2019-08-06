import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import About from './About'
import Posts from './Posts'
import PostShow from './PostShow'

import UserShow from './UserShow'
import Users from './Users'

class FirstApp extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <h2>Blog</h2>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/posts">Posts</Link></li>
                        <li><Link to="/users">Users</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>

                    <Route path="/" component={Posts} exact={true} />
                    <Route path="/about" component={About} />
                    <Route path="/posts" component={Posts} exact={true} />
                    <Route path="/Users" component={Users} exact={true} />
                    <Route path="/Posts/:id" component={PostShow} /> {/* dynamic URL Naming */}
                    <Route path="/Users/:id" component={UserShow} /> {/* dynamic URL Naming */}

                </div>
            </BrowserRouter>
        )
    }
}

export default FirstApp