import { Component } from "react";

class Price extends Component{
    constructor(props) {
        super(props);
        this.state= {
            value: this.props.price,
            changeing: true,
        };
    }
    
    changeRegion = () => {
        this.setState({
            changeing: !this.state.changeing
        })
        if(this.state.changeing == true){
            this.setState({
                value: this.props.price,
            })
        }else{
            this.setState({
                value: "387.31֏",
            })
        }
    }
    render(){
        return (
            <div className="flex">
                <p>{this.state.value}</p>
                <button onClick={this.changeRegion}>Change Currency</button>
            </div>
        )
    }
};

export default Price;