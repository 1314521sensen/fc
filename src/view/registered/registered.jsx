import React,{Component} from "react"
import LogoHead from "../components/logohead"
import "../../index.css"
import "../components/style/registered.css"
import Plicelogin from "../components/plicelogin"
export default class Registered extends Component{
    render(){
        return (
            <div className="registered">
                <div className="midden">
                    <LogoHead showtitle="1" title="欢迎注册" />
                </div>
                <Plicelogin loginbool="1" />
            </div>
        )
    }
}