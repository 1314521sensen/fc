import react, { Component } from "react"
import "./style/navtitle.css"
export default class Navtitle extends Component {
    constructor(props) {
        // console.log(props)
        super(props)
        this.state = {
            navtitle: props.msg
        }
    }
    render() {
        return (
            <div className="navtitle">
                {
                    this.state.navtitle.map((item, index) => {
                        return (
                            <span key={index}>{ item }</span>
                        )
                    })
                }
            </div>
        )
    }
}