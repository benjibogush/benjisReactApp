import React from 'react';
// import React, { useEffect, useState } from "react";

class Home extends React.Component {
  render() {
    return <>
      <title>benji bogush - reactjs</title>
			<link rel="stylesheet" href="/public/styles.css" />
          <link rel="shortcut icon" href="../public/favicon.ico" />
      <link rel ="stylesheet" href="/public/searching.css"/>
      <link rel ="stylesheet" href="/public/lookup.css"/>
      
<body className="App" id="root">
        <header className="App-header">
          <img src="/public/logo.png" className="App-logo" alt="logo" />
          

          <a className="App-discord" href="https://discord.gg/2FZE72sT3P">Join Discord 7 to 77+ </a> 
      
          <a
            className="App-link"
            href="https://www.udemy.com/course/crack-java-coding-interview/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Crack Java Coding Interview
          </a>
          <a className="meetBenji" href="/public/meetbenji.html" > Meet Benji </a>
        </header>
<div className= "flex-container">
        
        <div className='mid-left'>
          
          This is Benji. I would not brag about college stuff however 4.0 GPA in CS Software Engineering, achieving my dreams by doing what I love. Specialize in frontend and backend automation and web app development, my goal is to become full stack AI developer for both software and hardware. I'm a tough coder who disconnect entirely from the world true to the tone. Read more about me here"<b><a href='/public/meetbenji.html'>meet benji</a></b>"and see what I lose or gain by disconnection. Not to brag about my skills, but to emphasize how much value I bring to the companies, I will say that I take ownerwhip of the apps and add more quality, feature and value to the product being developed. 
        </div>
          
           <div className='mid-right'>
         <b>Tech Stack: </b>
             Java, 
             Spring, Springboot
             Continuous Integration CI
             Continuous Deployment CD
             Junit, TestNg
             Azure,
             KarateUI,
             KarateAPI,
             JavaScript,
             TypeScript,
             Selenium,
             WebDriverIO,
             Cypress IO,
             Codecept Playright,
             Cucumber,
             GitHub
             GitLab
             HTML, CSS.
             
           </div>


  
</div>


</body> 

    
</>; // return end


  } // render end
  
}

 



export default Home;