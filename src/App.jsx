import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import UserForm from './UserForm'
import GameApp from './GameApp'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase'

export default function App() {
    const [user, loading, error] = useAuthState(auth)

    if (loading) {
        return 'Now loading ...'
    }
    if (error) {
        return 'Error, please try again'
    }
    if (!user) {
        return <UserForm />
    }

    return (
        <Router basename="/chass_aws">
            <Routes>
                <Route exact path="/">
                  <Route exact path='/' element={<Home/>}/>
                </Route>
                <Route path="/game/:id">
                    <Route path="/game/:id" element={<GameApp/>}/>
                </Route>
            </Routes>
        </Router>
    )
}