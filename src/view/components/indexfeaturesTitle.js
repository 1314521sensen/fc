import React,{Component} from "react"
import "./style/IndexFeaturesTitle.css"
export default class IndexFeaturesTitle extends Component {
    constructor(props){
        super(...arguments)
        // console.log(props)
    }
    render(){
        return (
            <div className="IndexFeaturesTitle">
                <div>
                    <span>{this.props.title}</span>
                    <span>{this.props.smalltitle}</span>
                </div>
            </div>
        )
    }
}