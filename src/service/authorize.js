export const authenticate=(response,next)=>{
    if(window !=="undefined"){
        sessionStorage.setItem("token",JSON.stringify(response.data.token))
        sessionStorage.setItem("user",JSON.stringify(response.data.payload.user.username))
        sessionStorage.setItem("role",JSON.stringify(response.data.payload.user.role))

    }
    next()
}