import React,{Component} from "react";
import "../../index.css"
import "./Footers.css"
export default class Footers extends Component{
    constructor(){
        super(...arguments)
        this.state = {
            footersToplist:['关于我们',"合作伙伴","营销中心","廉正举报","联系客服","开放平台","诚征英才","联系我们","网站地图","法律声明","知识产权","© 2003-2016 chihou.com 版权所有"]
        }
    }
    render(){
        return (
            <div className="footers">
                <div className="midden footers_midden">
                    <div className="footers_top">
                        {
                            this.state.footersToplist.map((item,index)=>{
                                return (
                                    <span key={index}>{item}</span>
                                )
                            })
                        }
                    </div>
                    <span className="license">网络文化经营许可证:浙网文[2013]0268-000号|增值电信业务经营许可证:京B2-20081001|信息网络传播视听节目许可证:1109364号|互联网违法和不良信息举报电话:400-800-8000</span>
                </div>
            </div>
        )
    }
}