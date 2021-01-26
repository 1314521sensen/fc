import React, { Component } from "react"
import { FormOutlined } from "@ant-design/icons"
import "../style/mydefailt.css"
export default class MyDefault extends Component {
    constructor() {
        super(...arguments)
        this.state = {
            userRightInfo: [
                {
                    key: "用户昵称",
                    value: '你若盛开，清风自来'
                },
                {
                    key: "用户账号",
                    value: '18769490209'
                },
                {
                    key: "用户姓名",
                    value: '刘伟森'
                },
                {
                    key: "性别",
                    value: '男'
                },
                {
                    key: "出生日期",
                    value: '2019年6月6日'
                },
                {
                    key: "所在地",
                    value: '山东青岛'
                }
            ]
        }
    }
    render() {
        return (
            <div className="mydefault">
                <p className="mudefault_title">
                    <span className="title_text">基本信息</span>
                    <FormOutlined />
                </p>
                <div className="user_info_box">
                    <div className="user_left">
                        <img src="" className="imgs" />
                        <div className="user_info">
                            <p>18769490209</p>
                            <p>用户等级：3</p>
                            <p>账号安全等级:中</p>
                        </div>
                    </div>
                    <div className="user_right">
                        {
                            this.state.userRightInfo.map((item, index) => {
                                return (
                                    <div className="user_right_item" key={index}>
                                        <div>{item.key}</div>
                                        <div>{item.value}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}