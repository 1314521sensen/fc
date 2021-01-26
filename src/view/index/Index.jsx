import React, { Component } from "react"
import "../../index.css"
import "./index.css"
// var IndexBanner = require("./indexbanner.js")
import Headers from "../Headers/Headers"
import IndexBanner from "../components/indexbanner"
import IndexFeaturesTitle from "../components/indexfeaturesTitle"
// import Seachclassification from "../components/seachclassification"
import Shoplistvertical from "../components/shoplistvertical"
import Footerbgprompt from "../components/footerbgprompt"
import Logohead from "../components/logohead"
export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      seacharr: ['奇异果', "车厘子", "休闲零食"],
      cartnum: 0,
      baozhanglist: [
        {
          title: "品质保障",
          smalltitle: "按照国家标准质量"
        },
        {
          title: "坏单包赔",
          smalltitle: "破碎破烂腐烂包赔"
        },
        {
          title: "急速发货",
          smalltitle: "24小时内极速发货"
        }
      ],
      preferentiallist: [
        {
          title: "平和特级红心蜜柚",
          preferentialtitle: "满109.00减20.00 满189.00减30元",
          imgs: '../../staic/index/productBigPic.png'
        },
        {
          title: "四川麻辣风味猪肉脯",
          preferentialtitle: "满三送二 满五送二",
          imgs: '../../staic/index/productBigPic.png'
        },
        {
          title: "儿童眼肉牛排套餐",
          preferentialtitle: "满2件大8.00折 满2件打7.00折",
          imgs: '../../staic/index/productBigPic.png'
        }
      ],
      Leisureseachdata: ["坚果炒货", "休闲零食", "果干", "糖果巧克力", "奶酪乳品", "出口零食", "肉类即食零食"],
      shoplistdata: [
        {
          title: "东北碧根果仁奶香新炒开口250g装",
          money: '19.90',
          originalprice: "39.90"
        },
        {
          title: "飘零大叔麻辣牛板筋四川特产零食新品牛肉干",
          money: '29.90',
          originalprice: "49.90"
        },
        {
          title: "飘零大叔麻辣牛板筋川特产零食新品牛肉干",
          money: '29.90',
          originalprice: "49.90"
        },
        {
          title: "飘零大叔麻辣牛板筋川特产零食新品牛肉干",
          money: '29.90',
          originalprice: "49.90"
        }
      ],
      arr: [1, 2, 3, 4, 5]
    }
  }
  jumpgood(){
    //跳转到商品的详情
    console.log(this.props)
    this.props.history.push('/goodsdefault')
  }
  render() {
    return (
      <div className="index">
        <Headers />
        <div className="midden indexmidden">
          <Logohead 
            seacharr={this.state.seacharr} 
            cartnum={this.state.cartnum}
            showtitle="0"
          />
          <div className="indexTab_box">
            <div className="tab_All_categories">所有分类</div>
            <div className="tab_title">进口食品</div>
            <div className="tab_title">地方特色</div>
          </div>
        </div>
        <IndexBanner ></IndexBanner>
        <div className="rules">
          <div className="midden">
            <div className="rules_box">
              <ul className="rulesul">
                {
                  this.state.baozhanglist.map((item, index) => {
                    return (
                      <li
                        className="rulesul_item"
                        key={index}
                      >
                        <div className="rulesul_left"></div>
                        <div className="rulesul_right">
                          <span>{item.title}</span>
                          <span>{item.smalltitle}</span>
                        </div>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            <IndexFeaturesTitle
              title="今日优惠"
              smalltitle="仅限今日 快来抢购"
            ></IndexFeaturesTitle>
            <div className="Preferential_goods_box">
              <ul className="Preferential_goods_ul">
                {
                  this.state.preferentiallist.map((item, index) => {
                    return (
                      <li
                        className="Preferential_goods_item"
                        key={index}
                        onClick={this.jumpgood.bind(this)}
                      >
                        <div className="imgs_box">
                          <img src="../../staic/index/productBigPic.png" alt="" />
                        </div>
                        <span className="shoptitle">{item.title}</span>
                        <span className="Preferential_title">{item.preferentialtitle}</span>
                        <div className="snapbtn">快来抢购</div>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            <div>
              {
                this.state.arr.map((item, index) => {
                  return (
                    <div>
                        <IndexFeaturesTitle
                        title="休闲零食"
                        smalltitle=""
                      ></IndexFeaturesTitle>
                      <Shoplistvertical 
                        key={index}
                        Leisureseachdata={ this.state.Leisureseachdata } 
                        shoplistdata={ this.state.shoplistdata }
                        shouclassifcaon="0"
                      />
                    </div>
                  )
                })
              }
            </div>
            <Footerbgprompt />
        </div>
      </div>
      </div>
    )
  }
}

