import React, { Component } from "react"
import Headers from "../Headers/Headers"
import Logoheader from "../components/logohead"
import { Button } from "antd"
import "../../index.css"
import "./Goodsdefault.css"
export default class Goodsdefault extends Component {
    constructor(props) {
        super(props)
        this.state = {
            smailimg: [1, 2, 3, 4],
            size: 'large',
            instructionslist: [1, 2, 3, 4, 5, 6]
        }
    }
    render() {
        const { size } = this.state;
        return (
            <div className="goodsdefault">
                <Headers />
                <div className="midden">
                    <Logoheader showtitle="0" cartnum="0" />
                    <div className="goods_box">
                        <div className="goods_left">
                            <div className="goods_big_imgs">

                            </div>
                            <div className="goods_small_imgs_box">
                                <ul className="goods_small_imgs_ul">
                                    {
                                        this.state.smailimg.map((item, index) => {
                                            return (
                                                <li className="small_image_item" key={index}></li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="goods_right">
                            <p className="goods_title">平和红心蜜柚 2粒 琯溪红肉柚子新鲜水果红柚 多省包邮</p>
                            <div className="goods_small_title_box">
                                <span className="goods_smail_title">正宗福建平和琯溪蜜柚 红肉柚子 原产地12斤毛重 净重约10斤</span>
                                <span className="collection_btn">收藏</span>
                            </div>
                            <div className="goods_price_box">
                                <div className="goods_price_top">
                                    <div className="goods_price_top_left">
                                        <span>价格</span>
                                        <span>¥48.00</span>
                                    </div>
                                    <div className="goods_price_top_right">
                                        <span>累计评论   1000+</span>
                                    </div>
                                </div>
                                <div className="goods_price_bottom">
                                    促销信息:满109.00减20.00 满189.00减30.00
                                </div>
                            </div>
                            <div className="distribution_box">
                                <span>配送</span>
                                <span>北京</span>
                                <span>至</span>
                                <span className="destination_opctin">山东省青岛市城阳区</span>
                                <span>快递免运费</span>
                                <span>卖家承诺24小时内发货</span>
                            </div>
                            <div className="goods_nums_box goods_margin">
                                <span>数量</span>
                                <div className="choose_nums">
                                    <span>-</span>
                                    <input />
                                    <span>+</span>
                                </div>
                            </div>
                            <div className="species">
                                <span>种类</span>
                                <div className="species_radio">
                                    <div>
                                        <input type="radio" />
                                        <span className="radioname">红肉蜜柚</span>
                                    </div>
                                    <div>
                                        <input type="radio" />
                                        <span className="radioname">红肉蜜柚</span>
                                    </div>
                                </div>
                            </div>
                            <div className="commitment_box">
                                <span>承诺</span>
                                <span>运费险</span>
                            </div>
                            <div className="pay_box">
                                <span>支付</span>
                                <span>快捷支付</span>
                                <span>微信支付</span>
                            </div>
                            <div className="remind_box">
                                <span>提醒</span>
                                <span>此商品为鲜活易腐类，不支持7天无理由退货</span>
                            </div>
                            <div className="goodsbtn">
                                <button>加入购物车</button>
                                <button>立即购买</button>
                            </div>
                        </div>
                    </div>
                    <div className="product_box">
                        <span>
                            产品详情
                        </span>
                    </div>
                </div>
                <div className="border_hr"></div>
                <div className="product_instructions">
                    <div className="midden">
                        <div className="product_instructions_midden">
                            {
                                this.state.instructionslist.map((item, index) => {
                                    return (
                                        <div className="instructions_item" key={index}>
                                            <span>产品名称</span>
                                            <span>平和红心蜜柚</span>
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <div className="product_box">
                            <span>
                                产品评论
                            </span>
                        </div>
                    </div>
                </div>

                <div className="border_hr"></div>
                <div className="midden">
                    <div className="comments_box">
                        <span>全部评价(1000+)</span>
                        <span>好评(900+)</span>
                        <span>有图(240)</span>
                        <span>中评(30+)</span>
                        <span>差评(20+)</span>
                    </div>
                    <div className="comments_list">
                        <div className="comments_item">
                            <div className="comments_left">
                                <div className="user_acative"></div>
                            </div>
                            <div className="comments_midden">
                                <span>天**心</span>
                                <span>很好吃，很甜，分量足，吃三四顿就包了！性价比高！下次还会购买</span>
                                <div className="comments_img_box">
                                    <div className="imgs"></div>
                                    <div className="imgs"></div>
                                </div>
                            </div>
                            <div className="comments_titme">
                                <span>评价时间2019-9-26</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}