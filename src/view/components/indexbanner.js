import React, { Component } from "react"
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
const contentStyle = {
    height: '300px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
export default class IndexBanner extends Component {
    constructor(){
        super(...arguments)
        this.state = {
            bannerList:[
                require("../../staic/index/banner/banner01.png"),
                require("../../staic/index/banner/banner02.jpg"),
                require("../../staic/index/banner/banner03.jpg")
            ]
        }
    }
    render() {
        console.log(1111)
        return (
            <div className="banner">
                <Carousel autoplay>
                    {
                        this.state.bannerList.map((item,index)=>{
                            return (
                                <div 
                                    key={index}
                                >
                                    <img 
                                        src="../../staic/index/banner/banner01.png"
                                        style={{'height':'300px','backgroundColor':'green'}} 
                                    />
                                </div>
                            )
                        })
                    }
                </Carousel>
            </div>
        )
    }
}