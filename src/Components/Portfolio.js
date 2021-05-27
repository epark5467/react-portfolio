import React, { useState } from 'react';
import { Grid, Dialog, Button, Chip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

function Portfolio (){

  const useStyles = makeStyles({
    root: {
      minWidth: 300,
      maxWidth: 300,
      minHeight: 256,
      maxHeight: 256,
      margin: 5,
      overflow: "hidden",
    }
  });

  const [openDialog, setOpenDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState("");

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleDialogButton = (value) => {
    setDialogContent(value);
    setOpenDialog(true);
  };

  const handleDialogContent = () => {
    if( dialogContent ==="cupia") {
      return (
        <div className="portfolio-dialog-content"> 
          <img src={process.env.PUBLIC_URL + '/images/cupia.png'} />
          <h4>CUPIA Marketing</h4>
          <p>A Wordpress hosted website written in PHP and Javascript(jQuery).<br />
            Allows users to access database, perform CRUD operation on GUI. 
          </p>
          <div><Chip label="PHP" color="primary"/><Chip label="jQuery" color="secondary" /><Chip label="MariaDB" color="success" /></div>
        </div>
      );
    } else if (dialogContent === "cookit") {
      return (
        <div className="portfolio-dialog-content">
          <img src={process.env.PUBLIC_URL + '/images/cookit.jpg'} />
          <h4>Cookit!</h4>
          <p>React app created with Spoonacular Recipe and Food API for searching recipe based on its ingredients, meal type, cuisines, etc.<br />
          <a href="https://epark5467.github.io/cookit/index.html"> Click here </a>
          </p>
          <div><Chip label="React JS" color="secondary" /><Chip label="Rest API" color="success" /></div>
        </div>
      );
    } else if (dialogContent == "sync-vid") {
      return (
        <div className="portfolio-dialog-content">
          <img src={process.env.PUBLIC_URL + '/images/sync-vid.png'} />
          <h4>Sync Vid</h4>
          <p>Node JS + React web app which enables multiple users to watch online videos in sync with real-time online chat system.<br />
          <a href="http://sync-vid.herokuapp.com"> Click here </a>
          </p>
          <div><Chip label="Node.js" color="primary"/><Chip label="React JS" color="secondary" /><Chip label="SCSS" color="success" /></div>
        </div>
      );
    } else if (dialogContent == "pongpong") {
        return (
          <div className="portfolio-dialog-content">
            <img src={process.env.PUBLIC_URL + '/images/pongpong.png'} />
            <h4>Pong Pong</h4>
            <p>Under Development <br />
              An online board game developed with Unity. Each player take turns to knock out opponent's pieces.
            </p>
            <div><Chip label="Unity" color="primary"/><Chip label="C#" color="secondary" /></div>
          </div>
        );
    } else if (dialogContent == "rosystyling") {
        return (
          <div className="portfolio-dialog-content">
            <img src={process.env.PUBLIC_URL + '/images/rosystyling.jpg'} />
            <h4>Rosy Styling</h4>
            <p>Closed 2018 <br />
              A commercial website for florist and wedding event planner.
            </p>
            <div><Chip label="HTML/Javascript/CSS" color="primary"/><Chip label="PHP" color="secondary" /></div>
          </div>
        );
    }
  };

  const classes = useStyles();
    return (
      <section id="portfolio">

        <div className="row">

          <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <Grid container direction="row" justify="center">
                <Grid item>
                    <Button className={classes.root} onClick={handleDialogButton.bind(null,"cupia")}><img src={process.env.PUBLIC_URL + '/images/cupia.png'} /></Button>
                </Grid>
                <Grid item>
                  <Button  className={classes.root} onClick={handleDialogButton.bind(null,"cookit")}>
                    <img src={process.env.PUBLIC_URL + '/images/cookit.jpg'} />
                  </Button>
                </Grid>
                <Grid item>
                  <Button  className={classes.root} onClick={handleDialogButton.bind(null,"sync-vid")}>
                    <img src={process.env.PUBLIC_URL + '/images/sync-vid.png'} />
                  </Button>
                </Grid>
                <Grid item>
                  <Button className={classes.root} onClick={handleDialogButton.bind(null,"pongpong")}>
                    <img src={process.env.PUBLIC_URL + '/images/pongpong.png'} />
                  </Button>
                </Grid>
                <Grid item>
                  <Button className={classes.root} onClick={handleDialogButton.bind(null,"rosystyling")}>
                    <img src={process.env.PUBLIC_URL + '/images/rosystyling.jpg'} />
                  </Button>
                </Grid>
              </Grid>
              
              <Dialog className="portfolio-dialog" open={openDialog} onClose = {handleCloseDialog}>
                {handleDialogContent()}
              </Dialog>
            </div>
          </div>
        </div>
      </section>
    );
}


export default Portfolio;
