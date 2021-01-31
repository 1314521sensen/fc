import React,{Component} from "react"
//引入路由
// import {Route,Switch} from "react-router-dom"
import {Switch,Route} from "react-router-dom"

//引入路由视图
import Index from "../view/index/Index.jsx"
import My from "../view/my/My.js"
import Shop from "../view/shop/Shop.jsx"
import Notdefault from "../view/Notdefault/Notdefault.jsx"
import Registered from "../view/registered/registered.jsx"
import Login from "../view/login/login"
import Goodsdefault from "../view/Goodsdefault/Goodsdefault"
import Cart from "../view/cart/cart"
import Order from "../view/order/order"
import Makeorder from "../view/Makeorder/Makeorder"
import Footers from "../view/Footers/Footers"

class AppRouter extends Component{
  render(){
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/index" component={Index} />
          <Route path="/shop" component={Shop} />
          <Route path="/my" component={My} />
          <Route path="/notdefault" component={Notdefault} />
          <Route path="/goodsdefault" component={Goodsdefault} />
          <Route path="/cart" component={Cart} ></Route>
          <Route path="/registered" component={Registered} />
          <Route path="/login" component={Login} />
          <Route path="/order" component={Order} />
          <Route path="/makeorder" component={Makeorder} />
        </Switch>
        <Footers></Footers>
      </div>
    )
  }
}

export default AppRouter;
