import { Component } from "react";

export default class Card extends Component {
  // 여기서 props를 전달받을 수 있다
  constructor(props) { // 생성자를 호출할 때 props를 전달받음
    super(props); // 부모 생성자 호출
    console.log(props); // {} 빈 객체 출력
    // 상태

    this.state = {
        count : 0,
        user : "이수호"
    }
  }


  // 초기에 상태가 업데이트 되서 렌더링
  componentDidMount(){
    console.log(this.state.count);
    console.log(this.state.user);
    console.log("나 이제 탄생했어~~")
  }

  componentDidUpdate(){
    console.log("내가 변화했어 성장기야~")
    this.reward(this.state.count);
}

  increamentCounter = () => {
    this.setState({count : this.state.count + 1});
    console.log("카운트가 증가되었습니다 : ", this.state.count)
  }

  decreamentCounter = () => {
    this.setState({count : this.state.count - 1});
    console.log("카운트가 감소되었습니다 : ", this.state.count)
  }

  reward = (count) => {
    if(count >= 10){
        console.log("보상 당첨!!!!")
    }
  }

  changeName = (newUser) => {
    this.setState({user : newUser}, () => {
      console.log("사용자 이름이 변경되었습니다!", this.state.user)
    })
  }

    render(){
        console.log(`${this.props.content} 나 렌더링 되었어!!!`)
        return (
            <div className="card">
                <div>내 카운트 : {this.state.count}</div>
                <input type="text" value={this.state.user} onChange={(e) => this.changeName(e.target.value)}/>
                <div className="title"></div>
                <div className="contnet"></div>
                <div>{this.props.content}</div>
                <div>1234</div>
                <button onClick={this.increamentCounter}>증가</button>
                <button onClick={this.decreamentCounter}>감소</button>
            </div>
        )
    }
}