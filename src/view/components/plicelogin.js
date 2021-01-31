import React, { Component } from "react"
import { Link } from "react-router-dom"
import "../../index.css"
import "./style/picelogin.css"
export default class Plicelogin extends Component {
    constructor(opction) {
        super(...arguments)
        this.state = {
            registered: [
                {
                    placeholder: "请输入手机号",
                    name: "phone"
                },
                {
                    placeholder: "输入验证码",
                    name: "code"
                },
                {
                    placeholder: "设置密码",
                    name: "password"
                },
                {
                    placeholder: "确认密码",
                    name: "quepassword"
                }
            ],
            logindata: [
                {
                    placeholder: "用户名/已验证的手机",
                    name: "username"
                },
                {
                    placeholder: "密码",
                    name: "userpassword"
                },
            ],
            loginbool: Boolean(Number(opction.loginbool))
        }
    }
    pliceloginlogin(e){
        e.preventDefault()
        let inputs = document.getElementsByTagName('input')
        // console.log(inputs)
        // console.log(this.state.loginbool)
        let obj = {}
        if(this.state.loginbool){
            obj = {
                phone:inputs[0].value,
                code:inputs[1].value,
                password:inputs[2].value
            }
        }else{
            obj = {
                phone:inputs[0].value,
                password:inputs[1].value
            }
        }
        // console.log(obj)
        //将参数传递出去
        this.props.handplicelogin(obj)
    }
    render() {
        return (
            <div className="pliceLogoin">
                <div className="login_bg">
                    <div className="midden loginmidden">
                        <div className="right_login_box">
                            <div className="login_title">{this.state.loginbool ? '欢迎注册' : '欢迎登录'}</div>
                            <div className="from_box">
                                <form 
                                    className="form" 
                                    method="post"
                                    onSubmit={this.pliceloginlogin.bind(this)}
                                >
                                    {
                                        this.state.loginbool && <div className="registered_box">
                                            {
                                                // 这是注册
                                            }
                                            {
                                                this.state.registered.map((item, index) => {
                                                    return (
                                                        <div 
                                                            className="registered_item"
                                                            key={index}
                                                        >
                                                            <input
                                                                placeholder={item.placeholder}
                                                                name={item.name}
                                                            />
                                                            <div
                                                                className="Verification"
                                                                style={{ 'display': index == 1 ? 'block' : 'none' }}
                                                            >获取验证码</div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    }
                                    {
                                        this.state.loginbool == false && <div className="login_box">
                                            {/* 这是登录 */}
                                            {
                                                this.state.logindata.map((item, index) => {
                                                    return (
                                                        <div
                                                            className="login_item"
                                                            key={index}
                                                        >
                                                            <i></i>
                                                            <input
                                                                placeholder={item.placeholder}
                                                                name={item.placeholder}
                                                            />
                                                        </div>
                                                    )
                                                })
                                            }
                                            <p className="forgetword">忘记密码</p>
                                        </div>
                                    }
                                    <div className="login_btn_box">
                                        <button 
                                            className="loginbtn"
                                        >{this.state.loginbool ? '立即注册' : '登录'}</button>
                                    </div>
                                    <div className="other_login">
                                        {
                                            this.state.loginbool == false && <div className="other_left">
                                                <i></i>
                                                <i></i>
                                            </div>
                                        }
                                        <div className="other_right">
                                            <span>
                                                <Link to={this.state.loginbool ? '/login' : '/registered'}>{this.state.loginbool ? '已有账号' : '立即注册'}</Link>
                                            </span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}