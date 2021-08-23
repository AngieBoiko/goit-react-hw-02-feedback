import { FeedbackOptions } from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Section from './components/Section';
import Notification from './components/Notification';
import React, { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedbackCounter = event => {
    this.setState(prevState => {
      if (event.target.textContent.toLowerCase() === 'good') {
        return { good: prevState.good + 1 };
      }
      if (event.target.textContent.toLowerCase() === 'neutral') {
        return { neutral: prevState.neutral + 1 };
      }
      if (event.target.textContent.toLowerCase() === 'bad') {
        return { bad: prevState.bad + 1 };
      }
    });
  };

  countTotalFeedback = () => {
    const array = Object.values(this.state);
    const total = array.reduce((acc, curr) => acc + curr);
    return total;
  };
  positivePercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <div>
        <Section title="Please leave your feedback">
          <FeedbackOptions onLeaveFeedback={this.feedbackCounter} />
        </Section>
        <Section title="Statics">
          <Notification totalFeedbacks={this.countTotalFeedback()}>
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.positivePercentage()}
            />
          </Notification>
        </Section>
      </div>
    );
  }
}

export default App;
