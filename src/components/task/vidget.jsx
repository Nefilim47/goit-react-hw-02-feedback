import React from 'react';

export class Vidget extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return (good + neutral + bad) / 3;
  };
  goodDecrement = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  neutralDecrement = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  badDecrement = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };
  render() {
    const total = this.state.bad + this.state.good + this.state.neutral;
    return (
      <div>
        <div>
          <h1>Pleae leave feedback</h1>
          <button onClick={this.goodDecrement}>Good</button>
          <button onClick={this.neutralDecrement}>Neutral</button>
          <button onClick={this.badDecrement}>Bad</button>
        </div>

        {total ? (
          <div>
            <h1>Statictic</h1>
            <ul>
              <li>
                Good: <span>{this.state.good}</span>
              </li>
              <li>
                Neutral:<span>{this.state.neutral}</span>
              </li>
              <li>
                Bad:<span>{this.state.bad}</span>
              </li>
              <li>
                Total:
                <span>{+this.countTotalFeedback()}</span>
              </li>
              <li>
                Positive feedback:
                <span>{+this.countPositiveFeedbackPercentage()}</span>
              </li>
            </ul>
          </div>
        ) : (
          <h3>There is no feedback</h3>
        )}
      </div>
    );
  }
}
