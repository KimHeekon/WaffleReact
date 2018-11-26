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

  renderFirst(){
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
  }


  renderPage(i){
    return (
      <div>
        <div class="jumbotron" style={{'max-width': '36rem',}}>
        <p style={{'text-align':'right',}}>{i+1}/6</p>
        <h4>{this.props.author}</h4>
        <h1 class="display-4"><b>{this.props.questions[i].subject+'?'}</b></h1>
        <button type="button" class="btn btn-success btn-lg btn-block"
        onClick={() => this.setState({answer:this.state.answer.concat("like"),num:i+1,})}>호</button>
        <button type="button" class="btn btn-danger btn-lg btn-block"
        onClick={() => this.setState({answer:this.state.answer.concat("dislike"),num:i+1,})}>불호</button>
        </div>
      </div>
    );
  }

  badge(i){
    if(this.state.answer[i]===this.props.questions[i].choice)
      return(
          <span class="badge badge-success">{this.props.questions[i].subject}</span>
      );
    else return(
      <span class="badge badge-danger">{this.props.questions[i].subject}</span>
    )
  }
  renderResult(){
    let count = 0;
    for (var i = 0; i < this.state.answer.length; i++) {
      if(this.state.answer[i]===this.props.questions[i].choice)
        count++;
    }
    return(
      <div class="jumbotron" style={{'max-width': '36rem',}}>
      <h1 class="display-4"><b>{this.props.author}님과의 호불호 일치도입니다!</b></h1>
      <div style={{"textAlign":"center"}}>
        <span style={{"fontSize":"90px",}}>{Math.round(100*(count)/(6))}</span>점
        <p>{'총 6개 중 '+ count+'개 일치'}</p>
      </div>
      <hr class="my-4"></hr>
        <h2>
          {this.state.usrname+'님:'}
          {this.badge(0)}
          {this.badge(1)}
          {this.badge(2)}
          {this.badge(3)}
          {this.badge(4)}
          {this.badge(5)}
        </h2>
        <h1>
          <button type="button" class="btn btn-primary"
          onClick={() => this.setState({usrname:null,answer:[],num:0,})}>다시하기!</button>
        </h1>
      </div>
    )
  }
  render() {
    if(this.state.usrname == null)
      return(
        <div>
          {this.renderFirst()}
        </div>
      );
    else if(this.state.num < 6) {
      return(
        <div>
          {this.renderPage(this.state.num)}
        </div>
      );
    } else {

      return (
        <div>
            {this.renderResult()}
        </div>
      );
    }
  }
}



export default HobulhoApp;
