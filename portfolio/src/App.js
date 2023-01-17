
import './App.css';
import {useEffect, useState} from 'react'
import React from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import {FaHtml5, FaGithub, FaCss3Alt, FaReact, FaNodeJs, FaGit} from 'react-icons/fa'
import {DiJavascript1, DiPython, DiMongodb} from 'react-icons/di'
import {SiExpress, SiLinkedin} from 'react-icons/si'
import {CgProfile} from 'react-icons/cg'
import img1 from './images/gundam.png'
import img2 from './images/boutique.png'
import img3 from './images/port.png'
import Resume from './images/resume.pdf'

const App = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])
  return(
    <>

    {/* nav bar */}
      <nav>
        <div>
          <img src='https://i.pinimg.com/originals/7d/04/06/7d040649c4b10465d6d848473cbecde3.jpg' className='logo'></img>
          <div className='nav'>
            <ul className='navbar'>
              <li><a href='#top'>home</a></li>
              <li><a href='#about'>about</a></li>
              <li><a href='#skills'>skills</a></li>
              <li><a href='#projects'>projects</a></li>
              <li><a href='#contact'>contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* intro section */}
      <div className='intro'>
        <p className='intros'>Hi, my name is </p>
        <h1 className='name'>Mar Mar Min</h1>
        <p className='intros'>I'm a </p>
        <div className='box'>
          <div className='info'>
            <div className='intros'><span>full stack developer</span></div>
            <div className='intros'><span>passionate coder</span></div>
            <div className='intros'><span>hard worker</span></div>
            <div className='intros'><span>quick learner</span></div>
          </div>
        </div>
        
        
        <a href='#projects'><button className='work'>View My Work</button></a>
      </div>

      {/* about section */}
      <div className='about' id='about'>
        <h2 className='about-heading' data-aos='fade-right'>About</h2>
        <div className='left' data-aos='fade-right'>
          <p className='abouts'>Hi there, I'm Mar Mar!</p>
          <br></br>
          <p className='abouts' id='margin' data-aos='fade-right'>What was my life like before?</p>
          <br></br>
          <br></br>
          <p className='abouts' id='margin' data-aos='fade-right'>I'm glad I took up coding as a hobby!</p>
          <br></br>
          <br></br>
          <p className='abouts' id='margin' data-aos='fade-right'>Relevent Experience: </p>
          
        </div>

        <div className='right'>
          <p className='abouts' data-aos='fade-left'>I'm an aspiring software engineer, working day and night to make my code come to life.</p>
         
          <p className='abouts' data-aos='fade-left' id='margin'>I was a nail tech through highschool and afterwards before I switched over to childcare. I also lived in Boston, Massachusetts for a little bit to help my family with their sushi business.</p>
        
          <p className='abouts' data-aos='fade-left' id='margin'>While living in Boston, I had a lot of free time so I took up coding for fun. I fell in love with how wonderful and satisfying coding is and now I'm here!</p>

          <p className='abouts' data-aos='fade-left' id='margin'>General Assembly was 500+ hours of coding experience that taught me many useful skills to apply to my next job.</p>
        </div>
      </div>

      {/* skills section */}
      <div className='skills' id='skills'>
        <h2 className='skills-heading' data-aos='zoom-in'>Skills</h2>

        <div className='container'>
          <div>
            <FaHtml5 className='icon'></FaHtml5>
            <p>HTML</p>
          </div>

          <div>
          <FaCss3Alt className='icon'></FaCss3Alt>
          <p>CSS</p>
          </div>

          <div>
          <DiJavascript1 className='icon'></DiJavascript1>
          <p>Javascript</p>
          </div>

          <div>
          <DiPython className='icon'></DiPython>
          <p>Python</p>
          </div>

          <div>
          <FaReact className='icon'></FaReact>
          <p>React</p>
          </div>
          
          <div>
          <DiMongodb className='icon'></DiMongodb>
          <p>MongoDB</p>
          </div>
          
          <div>
          <SiExpress className='icon'></SiExpress>
          <p>Express</p>
          </div>
          
          <div>
          <FaNodeJs className='icon'></FaNodeJs>
          <p>Node.js</p>
          </div>
          
          <div>
          <FaGit className='icon'></FaGit>
          <p>Git</p>
          </div>

        </div>

      </div>

      {/* projects section */}
      <div className='projects' id='projects'>
        <h2 className='skills-heading' data-aos='zoom-in'>Projects</h2>

        <div className='card' data-aos='zoom-in'>
          <img src={img1} className='img1'></img>
          <h3>Simple Gundam Website</h3>
          <p>MongoDB | Express | Javascript</p>
          <p>Mockup of the USA Gundam Website</p>
          <a href='https://intense-sierra-54650.herokuapp.com/users/new' target='_blank'><button className='bttn'>Demo</button></a>
          <a href='https://github.com/mnmmar/Gundam' target='_blank'><button className='bttn'>Code</button></a>
        </div>
        <br></br>
        <br></br>

        <div className='card' data-aos='zoom-in'>
          <img src={img2} className='img1'></img>
          <h3>Boutique</h3>
          <p>MongoDB | React | BootStrap</p>
          <p>A small clothing website</p>
          <a href='https://powerful-sierra-23754.herokuapp.com/' target='_blank'><button className='bttn'>Demo</button></a>
          <a href='https://github.com/rphm95/project3FrontEnd' target='_blank'><button className='bttn'>Code</button></a>
        </div>
        <br></br>
        <br></br>

        <div className='card' data-aos='zoom-in'>
          <img src={img3} className='img1'></img>
          <h3>first portfolio</h3>
          <p>HTML | CSS | Javascript</p>
          <p>My very first portfolio example</p>
          <a href='https://mnmmar-portfolio.netlify.app/index.html'><button className='bttn' target='_blank'>Demo</button></a>
          <a href='https://github.com/mnmmar/portfolio' target='_blank'><button className='bttn'>Code</button></a>
        </div>


      </div>

      {/* contact section */}
      <div className='contact' id='contact'>
        <h2 className='skills-heading' data-aos='zoom-in'>Contact</h2>

          <form action='https://formsubmit.co/313614d2ad3dada1275c1c90bf835ba8' method='POST'>
            <label>Name: </label>
            <br></br>

            <input type='text' name='name' required></input>
            <br></br>

            <label>Email:</label>
            <br></br>
            <input type='text' name='email' required></input>
            <br></br>

            <label>Message:</label>
            <br></br>
            <textarea id='text' name='message' required></textarea>
            <br></br>

            <button type='submit' id='submit'>send</button>
          </form>
          <br></br>
          <div className='containerB'>
            <div>
            {/* <a href='https://docs.google.com/document/d/e/2PACX-1vSNwxVpQjnmz_kBSQjZNL3D1IaXj1csE0GUZmkqYyjrWWwS8DqAeLcs8Ra2dOx5VmQcNw1d-i4s4Ar9/pub' target='_blank'><CgProfile className='icon' ></CgProfile></a> */}
            <a rel='noreferrer' href={Resume} target='_blank'><CgProfile className='icon' ></CgProfile></a>
            <p>Resume</p>
            </div>

            <div>
            <a href='https://www.linkedin.com/in/marmar-min' target='_blank'><SiLinkedin className='icon'></SiLinkedin></a>
            <p>LinkedIn</p>
            </div>

            <div>
            <a href='https://github.com/mnmmar' target='_blank'><FaGithub className='icon'></FaGithub></a>
            <p>Github</p>
            </div>
          </div>

          <a href='#top'><button className='top'>Back to Top </button></a>

      </div>

    </>
  )
}

export default App;
