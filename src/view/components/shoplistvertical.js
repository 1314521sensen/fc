import React, { Component } from "react"
import Seachclassification from "./seachclassification"
import "./style/shoplistvertical.css"
export default class Shoplistvertical extends Component {
    constructor(opction) {
        super(...arguments)
        // console.log(opction)
        this.state = {
            Leisureseachdata: opction.Leisureseachdata,
            shoplistdata: opction.shoplistdata,
            shouclassifcaon: opction.shouclassifcaon
        }
    }
    render() {
        return (
            <div className="Shoplistvertical">
                <Seachclassification Leisureseachdata={this.state.Leisureseachdata} />
                {
                    this.state.shoplistdata.map((item, index) => {
                        return (
                            <div className="shoplist_item" key={index}>
                                <div className="shopimgs">

                                </div>
                                <div className="shoplist_bot">
                                    <span>{item.title}</span>
                                    <span>{'¥' + item.money}</span>
                                    <span>{'¥' + item.originalprice}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}