import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  heading: {
    fontSize: theme.typography.pxToRem(15)
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  icon: {
    verticalAlign: "bottom",
    height: 20,
    width: 20
  },
  details: {
    alignItems: "center"
  },
  column: {
    flexBasis: "33.33%"
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline"
    }
  }
});

function ManageBlogContent(props) {
  const { classes } = props;

  return (
    <div id="wrapper">
      <Grid
        container
        spacing={0}
        justify="center"
        alignItems="center"
        className="gridContainer"
      >
        <Grid item xs={11} md={9}>
          <Paper className={classes.root} elevation={1}>
            <Typography variant="headline" component="h1">
              Manage Blog
            </Typography>

            <Typography component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed
              facilisis metus, et lobortis lectus. Integer lacus risus,
              fringilla vitae neque at, iaculis tincidunt justo. Vestibulum sed
              leo a erat vehicula facilisis.
            </Typography>

            <Grid
              container
              spacing={0}
              justify="center"
              alignItems="center"
              className="gridContainer"
            >
              <Grid item xs={12} md={12}>
                <ExpansionPanel>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <div className={classes.column}>
                      <Typography className={classes.heading}>
                        Blog Title 1
                      </Typography>
                    </div>
                    <div className={classes.column}>
                      <Typography className={classes.secondaryHeading}>
                        Author: Alfe Caesar Lagas
                      </Typography>
                    </div>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails className={classes.details}>
                    <Typography component="p">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla sed facilisis metus, et lobortis lectus. Integer
                      lacus risus, fringilla vitae neque at, iaculis tincidunt
                      justo. Vestibulum sed leo a erat vehicula facilisis.
                    </Typography>
                  </ExpansionPanelDetails>
                  <Divider />
                  <ExpansionPanelActions>
                    <IconButton aria-label="Delete">
                      <DeleteIcon />
                    </IconButton>
                    <Button size="small">Cancel</Button>
                    <Button size="small" color="secondary" variant="contained">
                      Save
                    </Button>
                  </ExpansionPanelActions>
                </ExpansionPanel>

                <ExpansionPanel>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <div className={classes.column}>
                      <Typography className={classes.heading}>
                        Blog Title 2
                      </Typography>
                    </div>
                    <div className={classes.column}>
                      <Typography className={classes.secondaryHeading}>
                        Author: Alfe Caesar Lagas
                      </Typography>
                    </div>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails className={classes.details}>
                    <Typography component="p">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla sed facilisis metus, et lobortis lectus. Integer
                      lacus risus, fringilla vitae neque at, iaculis tincidunt
                      justo. Vestibulum sed leo a erat vehicula facilisis.
                    </Typography>
                  </ExpansionPanelDetails>
                  <Divider />
                  <ExpansionPanelActions>
                    <IconButton aria-label="Delete">
                      <DeleteIcon />
                    </IconButton>
                    <Button size="small">Cancel</Button>
                    <Button size="small" color="secondary" variant="contained">
                      Save
                    </Button>
                  </ExpansionPanelActions>
                </ExpansionPanel>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

ManageBlogContent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ManageBlogContent);
