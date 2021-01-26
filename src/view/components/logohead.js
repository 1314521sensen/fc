import React, { Component } from "react"
import {Link} from "react-router-dom"
import "./style/logohead.css"
export default class Logohead extends Component {
    constructor(props) {
        super(props)
        this.state = {
            seacharr: props.seacharr,
            cartnum: props.cartnum,
            showtitle: Boolean(Number(props.showtitle)),
            title:props.title
        }
    }
    render() {
        return (
            <div className="index_head">
                <div 
                    className="index_left" 
                    style={
                        {'justifyContent':this.state.showtitle?'normal':'space-between',
                        'alignItems':this.state.showtitle?'center':'normal'}
                    }
                >
                    <div className="logo_box">
                        <Link to="/index"></Link>
                    </div>
                    {
                        this.state.showtitle && <span className="headtitle">{this.state.title}</span>
                    }
                    {
                        this.state.seacharr && <div className="seach_box">
                            <div className="seach_top">
                                <div className="saech_left_border">
                                    <input type="text" placeholder="请输入搜索内容" />
                                </div>
                                <div className="seach_btn">搜索</div>
                            </div>
                            <div className="seach_bot">
                                <span>热门搜索:</span>
                                {
                                    this.state.seacharr.map((item, index) => {
                                        return (
                                            <span
                                                key={index}
                                                className="seach_title"
                                            >{item}</span>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    }
                </div>
                <div className="index_right">
                    {
                        this.state.cartnum >= 0 && <div className="index_right_midden">
                            <Link to="/cart">
                            <i className="carticon"></i>
                            <span>购物车</span>
                            <span>{'(' + this.state.cartnum + ')'}</span>
                            <span>件</span>
                            </Link>
                        </div>
                    }
                </div>
            </div>
        )
    }
}