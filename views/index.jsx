import React from 'react';


class App extends React.Component {
  render() {
    return <>
			<link rel="stylesheet" href="/public/styles.css" />
      <link rel ="stylesheet" href="/public/search.css"/>
      
      <div className="App">
        <header className="App-header">
          <img src="/public/logo.png" className="App-logo" alt="logo" />
          

          <a className="App-discord" href="https://discord.gg/2FZE72sT3P">Join Discord 7 to 77+ </a> 
       

          
          
          <a
            className="App-link"
            href="https://www.udemy.com/course/technical-java-interview-prep-for-it-professionals"
            target="_blank"
            rel="noopener noreferrer"
          >
            Udemy Java Interiew Prep for IT professionals
            Learn Coding in core Java and prepare for your next technical interview
          </a>
        </header>
<div className= "flex-container">
        <div className='mid-left'>
          This is Benji Bogush, 4.0 GPA in CS Software Engineering, achieving what no one has ever done. Specialize in test automation and app development, my goal is to become full stack developer and automation specialist for both software and hardware. I'm a tough coder who disconnect entirely from the world true to the tone. Not to brag about my skill, but to emphasize how much value I bring to the companies I work for. I take ownerwhip and add more quality and value to the product being developed. 
      </div>
          
           <div className='mid-right'>
         Tech Stack:
             Java
             JavaScript
             Selenium
             Cypress IO
             Codecept Playright
             JUnit
             TestNG
             Cucumber
             Continuous Integration CI
             Continuous Deployment CD
             GitHub
             GitLab
             HTML / CSS
          There's more to add but no time to waste: continuous development is the key.   
           </div>
</div>

        <div className='search'/>
        <div className='search-container'/>
      
      </div>
    </>;
  }


  
}

export default App;