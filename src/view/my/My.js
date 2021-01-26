import React, { Component} from "react"
import {Link,NavLink,Route,Switch} from "react-router-dom"
import Headers from "../Headers/Headers"
import Logoheader from "../components/logohead"
import Footerbgprompt from "../components/footerbgprompt"
import Mydefault from "../components/my/mydefailt"
import Accountsecurity from "../components/my/accountsecurity"
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import "../../index.css"
import "./my.css"
const { SubMenu } = Menu;
export default class My extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      cartnum: 0,
      myOption: [
        {
          title: "我的资料",
          url:"/my/mydefailt",
          components:'Mydefault',
          path:"/my/"
        },
        {
          title: "账号安全",
          url:"/my/accountsecurity"
        },
        {
          title: "收货地址",
          url:"/my/Shippingaddress"
        },
        {
          title: "购买记录",
          url:'/my/Purchaserecords'
        },
        {
          title: "优惠信息",
          url:"/my/Preferentialinformation"
        },
        {
          title: "我的评价",
          url:"/my/Myevaluation"
        },
        {
          title: "游览记录"
        },
        {
          title: "我的收藏"
        }
      ]
    }
  }
  render() {
    return (
      <div className="my">
        <Headers />
        <div className="midden">
          <Logoheader
            title="个人中心"
            showtitle="1"
            cartnum={this.state.cartnum}
          />
          <div className="mymidden_box">
            <Menu
              style={{ width: 256,color:'#ff751f' }}
              defaultSelectedKeys="0"
              mode="inline"
            >
              <Menu.ItemGroup>
                {
                  this.state.myOption.map((item, index) => {
                    return (
                      <Menu.Item key={index}>
                        <Link to={item.url}>{item.title}</Link>
                      </Menu.Item>
                    )
                  })
                }
              </Menu.ItemGroup>
            </Menu>
            <div className="myright_route">
              {/* <Mydefault /> */}
              <Switch>
                <Route exact path="/my/" component={Mydefault}></Route>
                <Route component={Accountsecurity}></Route>
              </Switch>
            </div>
          </div>
          <Footerbgprompt />
        </div>
      </div>
    )
  }
  handleClick = e => {
    console.log('click ', e);
  };
}

