import React from 'react';

class Clock extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {date: new Date()}
  }

  render() {
    return (
      <div>
        <h1>Hello world!</h1>
        <h2>It is {this.state.date.toLocaleDateString()}.</h2>
      </div>
    )
  }
}

export default Clock;
