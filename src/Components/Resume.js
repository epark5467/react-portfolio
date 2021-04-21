import React, { Component } from 'react';
import { Grid, List, ListItem } from "@material-ui/core";

class Resume extends Component {
  render() {

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                  <div key="SCHOOL"><h3>University of Auckland </h3> 
                    <p className="info">Bachelor of Science in Computer Science and Information Systems<span>&bull;</span><em className="date">2016</em></p>
                    <p> Object-Oriented Programming, Algorithms and Data Structures, Human-computer Interactions, Database Systems, Computer Organisation, Computer Graphics and Image Processing</p>
                  </div>
              </div>
            </div>
         </div>
      </div>


      <div  className="row work">

<div className="three columns header-col">
   <h1><span>Work</span></h1>
</div>

<div className="nine columns main-col">
   <div key="auror"><h3>AUROR LTD, AUCKLAND</h3>
     <p className="info">DEVELOPER INTERN<span>&bull;</span> <em className="date">Nov 2015 - Feb 2016</em></p>
     <p> Participated in creating a real-time notification API with a responsive front-end using AngularJS + ASP.NET framework. <br />
         Redesigned database schema to increase efficiency of the solution. 
     </p>
   </div>
   <div key="cupia"><h3>CUPIA, SEOUL</h3>
     <p className="info">DEVELOPER INTERN<span>&bull;</span> <em className="date">Nov 2015 - Feb 2016</em></p>
       Participated in designing and building a database using MariaDB. <br />
       Created a web app using php and jQuery to fetch data from the database and produce reports. 
       Worked on a user interface to receive and process data using AJAX calls <br />
     <p>
     </p>
   </div>
 </div>
</div>

<div  className="row skills">
  <Grid container className="nine columns" justify="center" spacing={3}>
      <Grid item  className="skills-grid-item">
        <h4>Frontend</h4>
        <List dense className="skills-list">
          <ListItem className="skills-list-item">
            ReactJS
          </ListItem>
          <ListItem className="skills-list-item">
            Javascript
          </ListItem>
          <ListItem className="skills-list-item">
            jQuery
          </ListItem>
          <ListItem className="skills-list-item">
            HTML/CSS/SASS
          </ListItem>
        </List>
      </Grid>
      <Grid item className="skills-grid-item">
        <h4>Backend</h4>
        <List dense className="skills-list">
          <ListItem className="skills-list-item">
            Java
          </ListItem>
          <ListItem className="skills-list-item">
            PHP
          </ListItem>
          <ListItem className="skills-list-item">
            ASP.NET C#
          </ListItem>
          <ListItem className="skills-list-item">
            MariaDB
          </ListItem>
        </List>
      </Grid>
      <Grid item className="skills-grid-item">
        <h4>Others</h4>
        <List dense className="skills-list">
          <ListItem className="skills-list-item">
            Git
          </ListItem>
          <ListItem className="skills-list-item">
            Unity
          </ListItem>
          <ListItem className="skills-list-item">
            Wordpress
          </ListItem>
        </List>
      </Grid>
    </Grid>
  </div>
</section>
    );
  }
}

export default Resume;
