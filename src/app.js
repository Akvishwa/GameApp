import React, { Component } from "react";
import "./app.css";
// import Hobbies from './hobbies.js';
// import './Pet.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initial1: 100,
      initial2: 100,
      new: true
    };
    this.ShowDiv = this.ShowDiv.bind(this);
  }
  handleAttack = () => {
    var random1 = Math.floor(Math.random() * 20);
    var random2 = Math.floor(Math.random() * 20);
    this.setState(
      {
        initial1: this.state.initial1 - random1,
        initial2: this.state.initial2 - random2
      },
      () => {
        if (this.state.initial1 <= 0) {
          this.setState({ initial1: 0 });
          alert("Game over!");
        } else if (this.state.initial2 <= 0) {
          this.setState({ initial1: 0 });
          alert("You win!");
        }
      }
    );
  };

  handleSpecial = () => {
    var random1 = Math.floor(Math.random() * 10);
    var random2 = Math.floor(Math.random() * 20);
    this.setState(
      {
        initial1: this.state.initial1 - random1,
        initial2: this.state.initial2 - random2
      },
      () => {
        if (this.state.initial1 <= 0) {
          this.setState({ initial1: 0 });
          alert("Game over!");
        } else if (this.state.initial2 <= 0) {
          this.setState({ initial1: 0 });
          alert("You win!");
        }
      }
    );
  };

  handleHeal = () => {
    var random1 = Math.floor(Math.random() * 5);

    this.setState({
      initial1: this.state.initial1 + random1
    });
  };

  handleReset = () => {
    this.setState({ initial1: 100 });
    this.setState({ initial2: 100 });
  };
  ShowDiv = () => {
    this.setState({
      new: false
    });
  };
  render() {
    return (
      <div className="container">
        <div class="row">
          <div class="col-xs-6">
            <h1>YOU</h1>
            <div class="ok">
              <h1>{this.state.initial1}</h1>
            </div>
          </div>
          <div class="col-xs-6">
            <h1>MONSTER</h1>
            <div class="ok">
              <h1>{this.state.initial2}</h1>
            </div>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-xs-12">
            <div class="thumbnail">
              {!this.state.new && (
                <div>
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={this.handleAttack}
                    id="attack"
                  >
                    Attack
                  </button>
                  <button
                    type="button"
                    class="btn btn-success"
                    onClick={this.handleSpecial}
                    id="special"
                  >
                    Special Attack
                  </button>
                  <button
                    type="button"
                    class="btn btn-info"
                    onClick={this.handleHeal}
                    id="heal"
                  >
                    Heal
                  </button>
                  <button
                    type="button"
                    class="btn btn-warning"
                    onClick={this.handleReset}
                    id="reset"
                  >
                    Give up
                  </button>
                </div>
              )}
              {this.state.new && (
                <button
                  class="btn btn-default"
                  onClick={this.ShowDiv}
                  id="button-id"
                >
                  Start Here
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
