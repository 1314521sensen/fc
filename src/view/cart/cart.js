import React ,{Component} from "react"
import Navheaders from "../Headers/Headers.jsx"
import Loginheader from "../components/logohead"
import FooterbgPrompt from "../components/footerbgprompt"
import "../../index.css"
import './cart.css'
export default class Cart extends Component{
    render(){
        return (
            <div className="cart">
                <Navheaders />
                <div className="midden">
                    <Loginheader 
                        cartnum="1"
                        showtitle="1"
                        title="购物车"
                    />
                    <div className="cart_box">
                        <div className="cart_left">
                            <span>全部商品3</span>
                            <span>降价商品0</span>
                        </div>
                        <div className="cart_right">
                            <span>已选商品(不含运费)</span>
                            <span>¥0.00</span>
                            <span>结算</span>
                        </div>
                    </div>
                </div>
                <div className="cart-hr"></div>
                <div className="midden">
                    <div className="shoptitle">
                        <div className="shop_title_left">
                            <input type="checkbox" />
                            <span>全选</span>
                            <span>商品信息</span>
                        </div>
                        <div className="shop_title_right">
                            <span>单价</span>
                            <span>数量</span>
                            <span>金额</span>
                            <span>操作</span>
                        </div>
                    </div>
                    <div className="cart_shop_box">
                        {
                        //这是每个item大的  这里按照拆单进行划分
                        }
                        <div className="cart_item">
                            {
                                //这是店铺名称
                            }
                            <div className="shop_store">
                                <input type="checkbox" />
                                <span>店铺:我的小吃店</span>
                            </div>
                            {/* 这是里面的商品的大盒子 */}
                            <div className="shop_goods_box">
                                <div className="shop_goods_items">
                                    <div className="shop_goods_left">
                                        <input type="checkbox" />
                                        <div className="shop_goods_image"></div>
                                        <span className="shop_goods_title">
                                            包邮零食日本进口百邦布尔本得势什锦奶油曲奇丙班礼盒视频30g
                                        </span>
                                    </div>
                                    <div className="shop_goods_right">
                                        <div className="shop_goods_price">
                                            <span>¥13.80</span>
                                            <span>¥14.80</span>
                                        </div>
                                        <div className="shop_goods_nums">
                                            <span>-</span>
                                            <input />
                                            <span>+</span>
                                        </div>
                                        <div className="shop_goods_total">
                                            ¥13.80
                                        </div>
                                        <div className="shop_operation">
                                            <span>移至收藏夹</span>
                                            <span>删除</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="combined_box">
                        <div className="combined_left">
                            <div className="combined_checkbox">
                                <input type="checkbox" />
                                <span>全选</span>
                            </div>
                            <div className="combined_combined_box">
                                <span className="combined_cobined_span">删除</span>
                                <span className="combined_cobined_span">移至收藏夹</span>
                                <span>已选中</span>
                                <span className="colortext combined_combined_nums">0</span>
                                <span>件</span>
                            </div>
                        </div>
                        <div className="combined_right">
                            <span>合计(不含运费):</span>
                            <span className="colortext bot_total">¥0.00元</span>
                            <span className="bgcolor settlementbtn">结算</span>
                        </div>
                    </div>
                </div>
                <FooterbgPrompt />
            </div>
        )
    }
}