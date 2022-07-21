import React,{useState} from 'react'
import axios from 'axios'

function forgotPassword() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [email, setEmail] = useState('')

    const onChange = (e) => {
        setEmail(e.target.value)

    }

    const onSubmit = async (e) => {
        // si hay un email valido, se envia una peticion al servidor
        if (email.length > 0) {
            e.preventDefault()
            const res = await axios.post('http://localhost:3001/user/forgotPassword', { email })
            if (res.data.success) {
                alert('Se ha enviado un correo con las instrucciones para restablecer la contraseña')
            } else {
                alert('El correo no existe')
            }
        }

    }

  return (
    <div>
        <h1>Forgot Password</h1>
        <form onSubmit={onSubmit}>
            <label>Email</label>
            <input type="email"
            className='emailInput'
            placeholder='Email'
            id='email'
            value={email}
            onChange={onChange} />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default forgotPassword