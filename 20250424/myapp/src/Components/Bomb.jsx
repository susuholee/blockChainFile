import { Component } from "react";
import { BombImage, BoombImageActive } from "../images";

export default class Bomb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive : false
        }
    }
    
    componentDidMount() {
        console.log("폭탄 생성되었어요")
    }

    componentDidUpdate() {
        console.log("나 터진다")
    }

    bombActiveHandler = () => {
        if(this.state.isActive) return // 상태를 변환하기 전에 조건부 렌더링
        this.setState({...this.state, isActive : true})
        this.props.setValue();
    }

    render() {
        return (
            <div className="bomb-wrap" onClick={this.bombActiveHandler}>
                <img src={this.state.isActive ? BoombImageActive : BombImage } alt="Bomb"/>
            </div>
        )
    }
}