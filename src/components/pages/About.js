//About the RESTaurateurs

import {
  Grid,
  Paper,
  Button,
  Typography,
  ThemeProvider,
  ButtonBase
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import theme from '../../theme/theme';


const About = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: 600,
      margin: "0 auto"
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    paperBio: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Grid container spacing={3} >
          {/* TODO: title should embedded on the beneath background */}
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Paper square elevation={0} className={classes.title}>
                <Typography>
                  Meet the RESTaurateurs!
                </Typography>
              </Paper>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paperBio}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img src="https://ca.slack-edge.com/T0351JZQ0-U01GJ7CJ4TW-763c30cac9ec-512" style={{"maxWidth": "100px"}}/>
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        Whitney Koslik <span id="position">- Full Stack Lead</span>
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        As an avid rock climber  and kombucha brewer, Whitney brought her passion for creative problem solving and full stack development as the Technical Lead for The RESTaurateurs. With over a decade of experience in the Hotel Industry and focused in program management for loyalty strategy, Whitney brings a unique, user-centric approach focused on creating web applications that enhance a users experience with a brand.                      </Typography>
                    </Grid>
                    <Grid item>
                      <Button href="https://drive.google.com/file/d/1_D_gYI5VxJftwaiSkUvhnBSXhTtQzs3I/view" target="_blank" rel="noopener noreferrer">
                        resume
                      </Button>
                      <Button href="https://www.linkedin.com/in/wkoslik/" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                      </Button>
                      <Button href="https://github.com/Wkoslik" target="_blank" rel="noopener noreferrer">
                        github
                      </Button>
                      <Button href="https://www.whitneykoslik.com" target="_blank" rel="noopener noreferrer">
                        Portfolio
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper className={classes.paperBio}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <Typography>
                      <img src="https://ca.slack-edge.com/T0351JZQ0-U01GQM3NBUH-080ccfa2ef15-512" style={{"maxWidth": "100px"}}/>
                    </Typography>
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        Youngsang Kim <span id="position">- Frontend</span>
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                      Just another full-stack developer / graphic designer.
Expertise in functional based designs includes producing, branding, and managing with corporate identities, vector/pixel graphics, photo editing, UI/UX design, printed/web deployed materials, and advertisement campaigns. Proficient in delivering visual languages as well as logical mapping in developments.
Most importantly, living another happy day.
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Button href="https://drive.google.com/file/d/1ludrrUAsFFopnH-OxWjIMLWrGdu_Vb29/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        resume
                      </Button>
                      <Button href="https://www.linkedin.com/in/youngsang-kim/" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                      </Button>
                      <Button href="https://github.com/kys3923" target="_blank" rel="noopener noreferrer">
                        github
                      </Button>
                      <Button href="https://www.designykim.com/" target="_blank" rel="noopener noreferrer">
                        Portfolio
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paperBio}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <Typography>
                      <img src="https://ca.slack-edge.com/T0351JZQ0-U01FU3D36EP-ea4209b5cef3-512" style={{"maxWidth": "100px"}}/>
                    </Typography>
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        Sean Feiner <span id="position">- Backend</span>
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                      I am a full stack developer and software engineer based in Brooklyn, New York. I have also served outside the tech industry as an educator, writer, curator, and artist with a passion for emergent art and music technologies and the cultures and platforms they generate. As a digital and performative creative my expertise is developed through research, dynamic and agile problem solving, and project development and management between academic, music, nightlife, and tech industries. I have 10 years of experience curating and producing digital, performance, and mixed-media installation art. I am passionate about music cultures and the way in which technology and distribution platforms intersect with particular communities. 
I am currently interested in modern web full stack application frameworks including descendants of the MEAN/MERN stack architecture and new applications and design implementing Python and GraphQL. While I enjoy full stack engineering, I am most excited about data: its architecture, management, and how it can serve clients and users.
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Button href="https://drive.google.com/file/d/1T1objZL39vIcPBFEmb0qhPwVEg1jw3QC/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        resume
                      </Button>
                      <Button href="https://www.linkedin.com/in/seanmichael-feiner/" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                      </Button>
                      <Button href="https://github.com/sameghosts" target="_blank" rel="noopener noreferrer">
                        github
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </ThemeProvider>
      </div>
  );
}
export default About;