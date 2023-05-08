import axios from "axios";

export const currentUser = async (authtoken) => {
    return await axios.post(`${process.env.REACT_APP_API}/current-user`,
        {},
        {
            headers: {
                authtoken,

            }
        })
}

export const currentAdmin = async (authtoken) => {
    return await axios.post(`${process.env.REACT_APP_API}/current-admin`,
        {},
        {
            headers: {
                authtoken,
            }
        })
}

export const changepassworduser = async (authtoken , tidcard , values) => {
    return await axios.put(process.env.REACT_APP_API + "/chngepassword/" + tidcard,values, {
        headers: {
            authtoken
        }
    }).then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err.response)
    })
}
