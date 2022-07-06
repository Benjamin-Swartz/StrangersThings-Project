const URLBase = 'https://strangers-things.herokuapp.com/api'
const cohort = '2206-ftb-et-web-ft'
const API = `${URLBase}/${cohort}`

function registerNewUser(){
    fetch(`${API}/users/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: '',
            password: ''
        })
    })
}

export default registerNewUser