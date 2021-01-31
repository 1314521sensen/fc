import React,{Component} from "react"
import LogoHead from "../components/logohead"
import "../../index.css"
import "../components/style/registered.css"
import Plicelogin from "../components/plicelogin"
import {registeredData} from "../../helpers/servedata/registereddata"
import { message} from 'antd';
import {setCache} from "../../config.js"
export default class Registered extends Component{
    handplicelogin(obj){
        // console.log(registeredData)
        if(registeredData.length==0){
            //当用户第一次进入网站的时候 如果数组中没有数据
            registeredData.push(obj)
            message.info("注册成功")
            this.props.history.push('/login')
        }else{
            registeredData.forEach((item,index)=>{
                if(item.phone==obj.phone){
                    return message.info("用户名已存在")
                }else{
                    if(index==registeredData.length-1){
                        registeredData.push(obj)
                        message.info("注册成功")
                        return this.props.history.push('/login')
                        
                    }
                }
            })
        }
        // console.log(registeredData)
        //将用户注册的假数据存进缓存
        setCache('registeredData',JSON.stringify(registeredData))
    }
    render(){
        // console.log(setCache)
        return (
            <div className="registered">
                <div className="midden">
                    <LogoHead showtitle="1" title="欢迎注册" />
                </div>
                <Plicelogin loginbool="1" handplicelogin={this.handplicelogin.bind(this)} />
            </div>
        )
    }
}