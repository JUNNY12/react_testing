import React from "react"
import axios from "axios"


 const Login = () => {
    const [error, setError] = React.useState(false)
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [user, setUser] = React.useState({})
    const [loading, setLoading] = React.useState(false)

    const handleClick = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            const { data } = await axios.get('https://jsonplaceholder.typicode.com/users/2')
            setUser(data)
            setLoading(false)
        }
        catch (err) {
            setError(true)
        }

    }


    return (
        <div style={{ marginBottom: '3rem' }}>
            <div>
                <h1>Username: {user.name}</h1>
            </div>
            <h1>Login</h1>
            <form action="">
                <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button
                    onClick={handleClick}
                    disabled={!username || !password}>{loading ? 'Loading ....' : 'Login'}</button>
                <span data-testid='error-id' style={{ 'color': 'red', visibility: error ? "visible" : 'hidden' }}>something went wrong</span>
            </form>
        </div>
    )
}

export default Login