import React,{Component} from "react";
import {Link} from "react-router-dom"
import {getCache} from "../../config"
import "../../index.css"
import "./headers.css"
export default class Headers extends Component{
    constructor(){
        super(...arguments)
        this.state = {
            headerdata:[
                {
                    title:"请登录",
                    url:'/login'
                },
                {
                    title:"注册",
                    url:"/registered"
                },
                {
                    title:"个人中心",
                    url:"/my"
                },
                {
                    title:"我的订单"
                },
                {
                    title:"我的收藏"
                },
                {
                    title:"客户服务"
                },
                {
                    title:"更多"
                }
            ]
        }
        this.Whetherlogin()
    }
    Whetherlogin(){
        let headercopy = this.state.headerdata
        if(getCache('userdata')){
            for(let i=0;i<=1;i++){
                delete headercopy[i]
            }
            headercopy.unshift({
                title:'您好,'+getCache('userdata').phone
            })
        }    
    }
    render(){
        return (
            <div className="header_box">
                <div className="midden header-midden">
                    <div className="headers-left">
                        配送至:山东
                    </div>
                    <div className="headers-right">
                        <ul className="headers-right_list">
                            {
                                this.state.headerdata.map((item,index)=>{
                                    return (
                                        <li className="headers-right_item" key={index}>
                                                <span>
                                                    <Link to={item.url}>{item.title}</Link>
                                                </span>
                                            <span></span>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}