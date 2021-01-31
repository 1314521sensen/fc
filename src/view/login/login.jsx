import React,{Component} from "react"
import LogoHead from "../components/logohead"
import "../../index.css"
import "../components/style/registered.css"
import Plicelogin from "../components/plicelogin"
import {registeredData} from "../../helpers/servedata/registereddata"
import {setCache} from "../../config"
import { message, Button, Space } from 'antd';
export default class Registered extends Component{
    handplicelogin(obj){
        // console.log(obj)
        // console.log(registeredData)
        registeredData.forEach((item,index)=>{
            
            if(item.phone==obj.phone){
                if(item.password==obj.password){
                    //登录成功
                    message.success('登录成功')
                    // console.log(this.props)
                    setCache('userdata',JSON.stringify(obj))
                    window.open('/index','_self');
                    return window.close();
                }else{
                    return message.error('密码错误,请重新输入')
                }
            }
        })
    }
    render(){
        return (
            <div className="registered">
                <div className="midden">
                    <LogoHead showtitle="1" title="欢迎登录" />
                </div>
                <Plicelogin loginbool="0" handplicelogin={this.handplicelogin.bind(this)} />
            </div>
        )
    }
}