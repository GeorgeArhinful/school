import axios from 'axios';

export function loadUser(parms) {
    return (dispatch)=>{
        axios.get('http://localhost:9000/book').then((res)=>{
            return dispatch({
                type:'DATA',
                payload: res
            })
        })
    }
}