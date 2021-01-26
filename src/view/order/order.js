import React, { Component } from "react"
import {DeleteOutlined} from '@ant-design/icons'
import Headers from "../Headers/Headers.jsx"
import Loginheader from "../components/logohead"
import Navtitle from "../components/Navtitletext"
import Footerbgprompt from "../components/footerbgprompt"
import "../../index.css"
import "./order.css"
export default class Order extends Component {
    constructor() {
        super(...arguments)
        this.state = {
            ordertitle: ['商品信息', "单价", "数量", "实付款", "交易状态", "交易操作"]
        }
    }
    render() {
        return (
            <div className="order">
                <Headers />
                <div className="midden">
                    <Loginheader />
                    <Navtitle msg={['全部订单', "代付款", "待发货", "待收货", "待评价"]} />
                </div>
                <div className="bot_hr"></div>
                <div className="midden">
                    <div className="otder_seach_box">
                        <input placeholder="请输入产品名单或订单号" />
                        <span className="seachbtn">订单搜索</span>
                    </div>
                    <div className="order_title">
                        {
                            this.state.ordertitle.map((item, index) => {
                                return (
                                    <span key={index}>{item}</span>
                                )
                            })
                        }
                    </div>
                    <div className="order_list">
                        <div className="order_big_item">
                            <div className="order-info">
                                <div className="order_info_left">
                                    <span>2016-10-20</span>
                                    <span>订单编号:1257404488169676</span>
                                    <span>店铺:我的小吃店</span>
                                    <span>卖家:开心的鱼</span>
                                </div>
                                <div className="order_info_right">
                                    <DeleteOutlined />                                   
                                </div>
                            </div>
                            <div className="order_goods_box">
                                <div className="goods_list">
                                    <div className="goods_item">
                                        <div className="order_shop_img"></div>
                                        <span className="goods_title">家村天然过火22大萨达大所多撒大多多撒</span>
                                        <span>¥29.00</span>
                                        <span>1</span>
                                    </div>
                                </div>
                                <div className="order_plice order_price">
                                    <span>¥29.00</span>
                                    <span>含运费¥0.00</span>
                                    <span>含运费险¥0.00</span>
                                </div>
                                <div className="order_plice orderstate">
                                    <span>交易成功</span>
                                    <span>订单详情</span>
                                    <span>查看物流</span>
                                    <span>已评价</span>
                                </div>
                                <div className="order_plice">
                                    <span>追加评价</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footerbgprompt />
            </div>
        )
    }
}