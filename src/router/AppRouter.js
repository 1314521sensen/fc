import React,{Component} from "react"
//引入路由
// import {Route,Switch} from "react-router-dom"
import {Switch,Route} from "react-router-dom"

//引入路由视图
import Index from "../view/index/Index.jsx"
import My from "../view/my/My.jsx"
import Shop from "../view/shop/Shop.jsx"
import Notdefault from "../view/Notdefault/Notdefault.jsx"

class AppRouter extends Component{
  render(){
      console.log(Index)
    return (
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/index" component={Index} />
        <Route path="/shop" component={Shop} />
        <Route path="/my" component={My} />
        <Route path="/notdefault" component={Notdefault} />
        {/* <Route path="/index" component={Index} /> */}
      </Switch>
    )
  }
}

export default AppRouter;
