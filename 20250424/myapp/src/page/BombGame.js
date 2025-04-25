import { Component } from "react";
import Bomb from "../Components/Bomb";

export default class BombGame extends Component {
    constructor() {
        super();
        this.state = {
            Over : false,
            Count : 0,
            bomb : Math.floor(Math.random() * 9),
            bombCount : 20,
            timer : 60
        }
    }
    componentDidMount() {
        this.setTimer();
    }

    componentWillUnmount() {
        clearInterval(this.timer); // 컴포넌트가 제거 될때 타이머 제거
    }

    setTimer = () => {
        this.timer = setInterval(() => {
            if(this.state.timer <= 1){
                this.setState({Over : true});
                setInterval(this.timer);
            }else {
                this.setState((prevState) => ({timer : prevState.timer - 1}))
            }
        }, 1000)
    }

    setCount = () => {
        clearInterval(this.timer);
        this.setState({...this.state, Count : this.state.Count + 1});
    }

    setGameOver = () => {
        clearInterval(this.timer);
        this.setState({...this.state, Over: true});
    }

    reStart = () => {
        clearInterval(this.timer);
        this.setState({
            Over : false,
            Count : 0,
            bomb : Math.floor(Math.random() * 9),
            bombCount : 20
        }, () => {
            this.setTimer();
        })

    }
        


    setBomb = () => {
        const { bombCount } = this.state;
        // let a = {name : "suho"}
        // 참조타입, 원시타입 불변성 
        // fill () : 배열안에 값을 채우는 메서드
        // 9의 자리를 가지고 있는 배열에 0의 값이 모두 할당
        // Array(9).fill(0) 주소를 할당하면 안됨, 그 이유는 여러개의 주소를 바라보기 때믄믄 
        // 새로운 주소를 만들어서 할당 해줘야한다.
        // index를  Bomb 컴포넌트에 전달한다. 
        return (Array(bombCount).fill(0).map((el,index) => <Bomb setValue={
            index === this.state.bomb ? this.setGameOver : this.setCount}
            /> ))
    }

    render() {
        if(this.state.Over) {
            return (
            <div>
                <div>{this.state.Count}점</div>
                <div>게임 오버 ㅜㅜ</div>
                <button className="rebtn" onClick={this.reStart}>재시작</button>
            </div>
        )
    }

        return (
            <div className="bomb-game-wrap">
                <div> 남은 시간 : {this.state.timer} 초</div>
               <this.setBomb />
            </div>
        )
    }
}