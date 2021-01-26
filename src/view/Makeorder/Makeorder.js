import React, { Component } from "react"
import Headers from "../Headers/Headers.jsx"
import Logohead from "../components/logohead"
import Navtitletext from "../components/Navtitletext"
import "../../index.css"
import "./makeorder.css"
export default class Makeorder extends Component {
    constructor() {
        super(...arguments)
        this.state = {
            addreslist: [1, 2, 3, 4]
        }
    }
    render() {
        return (
            <div className="makeorder">
                <Headers />
                <div className="midden">
                    <Logohead showtitle="1" title="确认订单" />
                    <Navtitletext msg={['确认收货地址']} />
                </div>
                <div className="bot_hr"></div>
                <div className="midden">
                    <div className="addresses_list">
                        {
                            this.state.addreslist.map((item, index) => {
                                return (
                                    <div className="addresses_item" key={index}>
                                        <div className="user_info_addres">
                                            <span>李青松</span>
                                            <span>18769490209</span>
                                        </div>
                                        <div>山东省 德州市 德城区 城阳街道 春阳路 营园国际商务中心</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <Navtitletext msg={['确认订单信息']} />
                </div>
                <div className="bot_hr"></div>
                <div className="midden">
                    <div className="makeorder_box">
                        <div className="order_title">
                            <span>商品信息</span>
                            <span>商品属性</span>
                            <span>单价</span>
                            <span>数量</span>
                            <span>金额</span>
                            <span>优惠方式</span>
                        </div>
                        <div className="order_shop_box">
                            <div className="order_big_item">
                                {/* 这是店铺的名称 */}
                                <div className="order_store">
                                    <span className="inline_block">店铺:我的小吃店</span>
                                    <span>卖家:开心的鱼</span>
                                </div>
                                {/* 这是订单的商品 大盒子*/}
                                <div className="order_goods_box blocks makeorder_goods">
                                    <div className="order_goods_item">
                                        <div className="order_goods_image"></div>
                                        <span className="goods_title">包邮零食日本进口百邦布尔什锦奶油曲奇饼干</span>
                                        <span className="colorgray">口味:青葡萄</span>
                                        <div className="order_goods_price">
                                            <span className="colorgray blocks">¥69.00</span>
                                            <span className="blocks">¥42.00</span>
                                        </div>
                                        <span>¥42.00</span>
                                        <span className="order_goods_nums">1</span>
                                        <span>以省27元，商家促销</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order_otherinfo_title">
                        订单的其他信息
                    </div>
                    <div className="flexlayout flexjus_con_bet order_Comments_operation">
                        <div className="flexlayout order_Comments_left">
                            <span>
                                给卖家留言&nbsp;&nbsp;
                            </span>
                            <input placeholder="选填:对本次订单的补充说明" />
                        </div>
                        <div className="order_Comments_right">
                            <div className="flexlayout flexjus_con_bet order_distribution_plice">
                                <span>运送方式:普通配送(免运费)</span>
                                <span className="colortext">¥0.00</span>
                            </div>
                            <div className="flexlayout flexjus_con_bet order_distribution_plice">
                                <span>运费险:送运费险</span>
                                <span className="colortext">¥0.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="flexlayout order_settlement_box">
                        <div className="order_settlement_left">
                            <ul className="order_ul">
                                <li>
                                    <span>合计:</span>
                                    <span className="colortext m_left inline_block total_price">0.00</span>
                                </li>
                                <li>
                                    <span>配送至:</span>
                                    <span className="m_left inline_block">山东省 青岛市 城阳区 城阳街道 春阳路 影院国际商务中心 821</span>
                                </li>
                                <li>
                                    <span>收货人信息:</span>
                                    <span className="m_left inline_block">李青松</span>
                                    <span className="m_left inline_block">(18769490209)</span>
                                </li>
                                <li className="flexlayout">
                                    <span>付款方式:</span>
                                    <div className="m_left">
                                        <input type="checkbox" />
                                        <span>快捷支付</span>
                                    </div>
                                    <div className="m_left">
                                        <input type="checkbox" />
                                        <span>微信支付</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="flexlayout flexjus_con_cen flexalu_con_cen order_settlement_right">
                            <span className="bgcolor colorwhite">结算</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}