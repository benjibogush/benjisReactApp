import React from 'react';

class App extends React.Component {
  render() {
    return <>
			<link rel="stylesheet" href="/public/styles.css" />
      <div className="App">
        <header className="App-header">
          <img src="/public/logo.png" className="App-logo" alt="logo" />
          <p>
            Go to <a href="https://discord.gg/2FZE72sT3P">Join Discord 7 to 77+ </a> and save to reload.
          </p>
          
          
          <a
            className="App-link"
            href="https://www.udemy.com/course/technical-java-interview-prep-for-it-professionals"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Coding in core Java and prepare for your next tech interview
          </a>
        </header>
      </div>
    </>;
  }
}

export default App;