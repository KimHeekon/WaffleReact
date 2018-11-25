import React, { Component } from 'react';

class HobulhoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usrname: null,
      answer:[],
      num:0,
    };
  }
  handleChange(evt) {
    this.setState({ name:evt.target.value });
  }

  render() {
    if(this.state.usrname == null)
      return (
        <div>
          <div class="jumbotron" style={{'max-width': '36rem',}}>
            <h1 class="display-4"><b>{this.props.author}님의 취향을 알아보아요!</b></h1>
            <hr class="my-4"></hr>
            <form>
              <div class="form-group">
                <label for="inputName">당신의 이름을 입력해주세요.</label>
                  <input type="name" name="inputName" class="form-control" placeholder="익명" value={this.state.name}
                    onChange={this.handleChange.bind(this)} />
                  <button type="submit" class="btn btn-primary" style={{'margin-top':'15px'}}
                    onClick={() => this.setState({usrname : this.state.name||"익명"})}>
                      시작하기!
                  </button>
              </div>
            </form>
          </div>
        </div>
      );
    else if(this.state.num < 6) {
      return (
        <div>
          <div class="jumbotron" style={{'max-width': '36rem',}}>
          <p style={{'text-align':'right',}}>{this.state.num+1}/6</p>
          <h4>{this.props.author}</h4>
          <h1 class="display-4"><b>{this.props.questions[this.state.num].subject+'?'}</b></h1>
          <button type="button" class="btn btn-success btn-lg btn-block"
          onClick={() => this.setState({answer:this.state.answer.concat("like"),num:this.state.num+1,})}>호</button>
          <button type="button" class="btn btn-danger btn-lg btn-block"
          onClick={() => this.setState({answer:this.state.answer.concat("dislike"),num:this.state.num+1,})}>불호</button>
          </div>
        </div>
      )
    } else {
      let count = 0;
      for (var i = 0; i < this.state.answer.length; i++) {
        if(this.state.answer[i]==this.props.questions[i].choice)
          count++;
      }
      return (
        <div>
          <div class="jumbotron" style={{'max-width': '36rem',}}>
          <h1 class="display-4"><b>{this.props.author}님과의 호불호 일치도입니다!</b></h1>
          <div style={{"text-align":"center"}}>
            <span style={{"font-size":"90px",}}>{Math.round(100*(count)/(6))}</span>점
            <p>{'총 6개 중 '+ count+'개 일치'}</p>
          </div>
          <hr class="my-4"></hr>
          {this.state.usrname+'님:'}
          </div>
        </div>
      );
    }
  }
}

class NameForm extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    };
  }
  handleChange(evt) {
    this.setState({ name:evt.target.value });
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.name}
          onChange={this.handleChange.bind(this)} />
        <input type="button" value="Greet"
          onClick={() => alert(`Hi, ${this.state.name}!`)} />
      </div>
    );
  }
}

export default HobulhoApp;
