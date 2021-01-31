import axios from "axios"
import * as publicapi from './helpers/apilp'
// console.log(publicapi.publicIp)
function getDataFromServer(url,method,data){
    data.key = 'tel18769490209'
    data.secret = "20210125"
    console.log(data)
    console.log(publicapi.publicIp + url)
    return new Promise((resolve,reject)=>{
        axios({
            url:publicapi.publicIp + url,
            method,
            data,
        }).then((res)=>{
            resolve(res)
        }).catch((error)=>{
            reject(error)
        })
    })
}
export default getDataFromServer