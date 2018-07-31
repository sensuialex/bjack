import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor (props) {
    super(props)

    this.state = {
      deelerhand: 0,
      playerhand1: 0,
      playerhand2: 0,
      Hand1: 0,
      Hand2: 0,
      deeler: 0,
      player: 0,
      splitchance: false,
      isSoft: false,
      isCorrect: false,
      answer: ''
    }
  }




  doChange (e) {

    this.setState({splitchance: false, isSoft: false})
    const deelerhand = Math.floor(Math.random() * Math.floor(13)) +1
    const playerhand1 = Math.floor(Math.random() * Math.floor(13)) +1
    const playerhand2 = Math.floor(Math.random() * Math.floor(13)) +1
    //console.log(deelerhand +' : '+ playerhand1+' : '+playerhand2)
    this.setState({deelerhand: deelerhand})
    this.setState({playerhand1: playerhand1})
    this.setState({playerhand2: playerhand2})

    const deelerVal = deelerhand >= 10 ? 10 : deelerhand;

    const hand1 = playerhand1 > 10 ? 10 : playerhand1;
    const hand2 = playerhand2 > 10 ? 10 : playerhand2;
    //console.log(hand1 +' : '+ hand2)
    if(hand1 === hand2){
      this.setState({splitchance: true})
    }
    if(hand1 ===1 || hand2 === 1){
      this.setState({isSoft: true})
    }
    this.setState({Hand1: hand1, Hand2: hand2})
    const playerVal = hand1 + hand2
    this.setState({deeler: deelerVal, player: playerVal})
    /*
    this.checkStand(e)
    this.checkHit(e)
    this.checkDouble(e)
    if(this.state.splitchance){
      this.checkSplit(e)
    }
    console.log(this.state.answer)
    */



  }

  checkStand(e) {
      this.doStand(e)
      if(this.state.isCorrect){
        console.log("stand")
        this.setState({answer: 'Stand'})
        this.setState({isCorrect: false})
      }
    }
  checkHit(e) {
      this.doHit(e)

      if(this.state.isCorrect){
        console.log("hit")
        this.setState({answer: 'Hit'})
        this.setState({isCorrect: false})
      }
    }
  checkDouble(e) {
      this.doDouble(e)
      if(this.state.isCorrect){
        console.log("dbl")
        this.setState({answer: 'Doubledown'})
        this.setState({isCorrect: false})
      }
    }
  checkSplit(e) {
      this.doSplit(e)
      if(this.state.isCorrect){
        console.log("split")
        this.setState({answer: 'Split'})
        this.setState({isCorrect: false})
      }
    }






  doStand (e) {
    if(this.state.isSoft){
      if(
      (this.state.player ===8 && (this.state.deeler === 2)) ||
      (this.state.player ===8 && (this.state.deeler >= 7 && this.state.deeler <= 8)) ||
      (this.state.player ===9 && (this.state.deeler >= 1 && this.state.deeler <= 10))
    ) {
      this.setState({isCorrect: true})
    }else{
      this.setState({isCorrect: false})
    }
    this.doChange(e)
    }else if(this.state.splitchance){
      if (
      (this.state.player ===18 && this.state.deeler === 7) ||
      (this.state.player ===18 && this.state.deeler === 1) ||
      (this.state.player ===18 && this.state.deeler === 10) ||
      (this.state.player ===20)
    ) {
      this.setState({isCorrect: true})
    }else{
      this.setState({isCorrect: false})
    }
    this.doChange(e)
    }
    else {
      if(
        (this.state.player ===12 && (this.state.deeler >= 3 && this.state.deeler <= 6)) ||
        ((this.state.player >= 13 && this.state.player <= 16) && (this.state.deeler >= 2 && this.state.deeler <= 6)) ||
        (this.state.player >=17)
      ) {
        this.setState({isCorrect: true})
      }else{
        this.setState({isCorrect: false})
      }
    }
    this.doChange(e)
  }

  doDouble (e) {
    if(this.state.isSoft){
      if(
      (this.state.player ===3 && (this.state.deeler >= 5 && this.state.deeler <= 6)) ||
      (this.state.player ===4 && (this.state.deeler >= 5 && this.state.deeler <= 6)) ||
      (this.state.player ===5 && (this.state.deeler >= 4 && this.state.deeler <= 6)) ||
      (this.state.player ===6 && (this.state.deeler >= 4 && this.state.deeler <= 6)) ||
      (this.state.player ===7 && (this.state.deeler >= 3 && this.state.deeler <= 6)) ||
      (this.state.player ===8 && (this.state.deeler >= 3 && this.state.deeler <= 6))
    ) {
      this.setState({isCorrect: true})
    }else{
      this.setState({isCorrect: false})
    }
    this.doChange(e)
    }else if(this.state.splitchance){
      if(this.state.player ===10 && (this.state.deeler >= 2 && this.state.deeler <= 9)){
        this.setState({isCorrect: true})
      }else{
        this.setState({isCorrect: false})
      }
      this.doChange(e)
    }
    else {
      if(
        (this.state.player ===9 && (this.state.deeler >= 3 && this.state.deeler <= 6)) ||
        (this.state.player ===10 && (this.state.deeler >= 2 && this.state.deeler <= 9)) ||
        (this.state.player ===11 && (this.state.deeler >= 2 && this.state.deeler <= 10))
      ) {
        this.setState({isCorrect: true})
      }else{
        this.setState({isCorrect: false})
      }
    }
    this.doChange(e)
  }

  doSplit (e) {
    if(
      (this.state.player ===2) ||
      (this.state.player ===4 && (this.state.deeler >= 2 && this.state.deeler <= 7)) ||
      (this.state.player ===6 && (this.state.deeler >= 2 && this.state.deeler <= 7)) ||
      (this.state.player ===8 && (this.state.deeler >= 5 && this.state.deeler <= 6)) ||
      (this.state.player ===12 && (this.state.deeler >= 2 && this.state.deeler <= 6)) ||
      (this.state.player ===14 && (this.state.deeler >= 2 && this.state.deeler <= 7)) ||
      (this.state.player ===16) ||
      (this.state.player ===18 && (this.state.deeler >= 2 && this.state.deeler <= 6)) ||
      (this.state.player ===18 && (this.state.deeler >= 8 && this.state.deeler <= 9))
    ) {
      this.setState({isCorrect: true})
    }else{
      this.setState({isCorrect: false})
    }
    this.doChange(e)
  }

  doHit(e){
    if(this.state.isSoft){
      if(
      !(this.state.player ===8 && (this.state.deeler === 2)) &&
      !(this.state.player ===8 && (this.state.deeler >= 7 && this.state.deeler <= 8)) &&
      !(this.state.player ===9 && (this.state.deeler >= 1 && this.state.deeler <= 10)) &&
      !(this.state.player ===3 && (this.state.deeler >= 5 && this.state.deeler <= 6)) &&
      !(this.state.player ===4 && (this.state.deeler >= 5 && this.state.deeler <= 6)) &&
      !(this.state.player ===5 && (this.state.deeler >= 4 && this.state.deeler <= 6)) &&
      !(this.state.player ===6 && (this.state.deeler >= 4 && this.state.deeler <= 6)) &&
      !(this.state.player ===7 && (this.state.deeler >= 3 && this.state.deeler <= 6)) &&
      !(this.state.player ===8 && (this.state.deeler >= 3 && this.state.deeler <= 6))
    ) {
      this.setState({isCorrect: true})
    }else{
      this.setState({isCorrect: false})
    }
    this.doChange(e)
    }else if(this.state.splitchance){
      if (
      !(this.state.player ===18 && this.state.deeler === 7) &&
      !(this.state.player ===18 && this.state.deeler === 1) &&
      !(this.state.player ===18 && this.state.deeler === 10) &&
      !(this.state.player ===20) &&
      !(this.state.player ===10 && (this.state.deeler >= 2 && this.state.deeler <= 9)) &&
      !(this.state.player ===2) &&
      !(this.state.player ===4 && (this.state.deeler >= 2 && this.state.deeler <= 7)) &&
      !(this.state.player ===6 && (this.state.deeler >= 2 && this.state.deeler <= 7)) &&
      !(this.state.player ===8 && (this.state.deeler >= 5 && this.state.deeler <= 6)) &&
      !(this.state.player ===12 && (this.state.deeler >= 2 && this.state.deeler <= 6)) &&
      !(this.state.player ===14 && (this.state.deeler >= 2 && this.state.deeler <= 7)) &&
      !(this.state.player ===16) &&
      !(this.state.player ===18 && (this.state.deeler >= 2 && this.state.deeler <= 6)) &&
      !(this.state.player ===18 && (this.state.deeler >= 8 && this.state.deeler <= 9))
    ) {
      this.setState({isCorrect: true})
    }else{
      this.setState({isCorrect: false})
    }
    this.doChange(e)
    }
    else {
      if(
        !(this.state.player ===12 && (this.state.deeler >= 3 && this.state.deeler <= 6)) &&
        !((this.state.player >= 13 && this.state.player <= 16) && (this.state.deeler >= 2 && this.state.deeler <= 6)) &&
        !(this.state.player >=17) &&
        !(this.state.player ===9 && (this.state.deeler >= 3 && this.state.deeler <= 6)) &&
        !(this.state.player ===10 && (this.state.deeler >= 2 && this.state.deeler <= 9)) &&
        !(this.state.player ===11 && (this.state.deeler >= 2 && this.state.deeler <= 10))
      ) {
        this.setState({isCorrect: true})
      }else{
        this.setState({isCorrect: false})
      }
      this.doChange(e)
    }


















/*
    console.log(this.state.isCorrect)
    //this.setState({isCorrect: false})
    //Stand
    this.doStand()
    if(this.state.isCorrect){
      this.setState({isCorrect: false})

    }
    else{
      //Double
      this.doDouble() //true
      if(this.state.isCorrect){
        this.setState({isCorrect: false})
      }else{
        /*
        if(this.state.splitchance){
          //Split
          this.doSplit()
          if(this.state.isCorrect){
            this.setState({isCorrect: false})
          }else{

          }

        }
        *
        this.setState({isCorrect: true})
      }
    }
  */

  }



  render() {
    //console.log(this.state.deeler)
    const doChange = (e) => this.doChange(e)
    const doHit = (e) => this.doHit(e)
    const doStand = (e) => this.doStand(e)
    const doDouble = (e) => this.doDouble(e)
    const doSplit = (e) => this.doSplit(e)
    const msg = this.state.isCorrect ? 'Correct!' : 'It\'s Wrong...'
    //console.log(msg)
    const isPocket = this.state.splitchance ? false : true
    //const answer = this.state.answer
    //console.log(answer)
    /*
    let log = 'Deeler : '+this.state.deelerhand+
    '  &  Player : '+this.state.playerhand1+' & '+this.state.playerhand2+
    ' , you have to do is'+answer;
    */

    return (

      <div style={{background: '#00947a'}}>

      <h3> BlackJack Basic Strategy Training</h3>
      <p>ブラックジャックの基本戦術を練習できるサイトです。</p>
      <p>基本戦術に関しては<a style={{color: '#ffd1ff'}} href="https://www.xn--jp-kh4aa8bwdc2mye8b.com/bjstrategy/bj175.html">こちら</a></p>
      <hr />
      <p>● 使い方 ●</p>
      <p>最初にPlayを押して、出た数字を判断して４つのボタンを押してください。下に結果が表示されます。</p>
      <button className='btn btn-circle btn-light' style={{'fontWeight': 'bold'}} onClick={doChange}>Play</button>
      <p />
      <p>Deeler Hand : <span style={{fontSize: '180%'}}>{this.state.deelerhand}</span></p>
      <p>Player Hand : <span style={{fontSize: '180%'}}>{this.state.playerhand1}</span> & <span style={{fontSize: '180%'}}>{this.state.playerhand2}</span></p>
      <button className='btn btn-circle btn-dark' onClick={doHit}>Hit</button>
      <button className='btn btn-circle btn-danger' onClick={doStand}>Stand</button>
      <button className='btn btn-circle btn-dark' onClick={doDouble}>Double<br/>Down</button>
      <button className='btn btn-circle btn-danger' onClick={doSplit} disabled={isPocket}>Split</button>
      <p />
      <h4> {msg} </h4>
      <hr />
      {/* ...
      <p>Logs</p>
      <p>{log}</p>
      */}
      </div>

    );
  }
}

export default App;
