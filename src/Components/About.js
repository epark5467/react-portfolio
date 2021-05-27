import React, { Component } from 'react';

class About extends Component {
  render() {

    

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>A Junior web developer with 1 year experiences and B.S. in Computer Science and Information Systems, seeking to work in a creative and challenging environment where I could utilize and enhance my knowledge in software development.</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>Eugene Park</span><br />
						   <span>68B Donovan Avenue Masey<br />
						         Auckland , 0614
                   </span><br />
						   <span>021 0249 0523</span><br />
                     <span>epark5467@gmail.com</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href="http://github.com/epark5467" className="button"><i className="fa fa-github"></i>Github</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
