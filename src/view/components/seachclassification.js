import React ,{Component} from "react"
import "./style/seachclassification.css"
export default class Seachclassification extends Component{
    constructor(opction){
        super(...arguments)
        console.log(opction)
        this.state = {
            list:opction.Leisureseachdata
        }
    }
    render(){
        return (
            <div className="seachclassification">
                {
                    this.state.list.map((item,index)=>{
                        console.log(item)
                        return (
                            <span key={index}>{item}</span>
                        )
                    })
                }
                

            </div>
        )
    }
}