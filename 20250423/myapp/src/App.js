import React, {Component} from "react";
// import Card from "./components/card/Card";
import Page from "./components/Naver/page/page";
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      count : 0
    }
  }
  // 카운트를 증가시킬 함수 
  counterHandler = () => {
    this.setState({count : this.state.count + 1})
  }
  // 카운트를 감소시킬 함수
  
  downHandler = () => {
    this.setState({count : this.state.count - 1})
  }

  render(){
    return (
      <>
        {/* <div>count : {this.state.count}</div> */}
        {/* <Card content="안녕"/> 
        <Card content="배고파"/> */}
        {/* <button onClick={this.counterHandler}>증가해줘!!</button>
        <button onClick={this.downHandler}>감소해줘!!</button> */}
        <Page/>
      </>
    )
  }
}
export default App;