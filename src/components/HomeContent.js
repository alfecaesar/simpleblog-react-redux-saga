import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

function HomeContent(props) {
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
              Welcome to My Personal Blog!
            </Typography>

            <Typography component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed
              facilisis metus, et lobortis lectus. Integer lacus risus,
              fringilla vitae neque at, iaculis tincidunt justo. Vestibulum sed
              leo a erat vehicula facilisis. Nunc ac ullamcorper nunc. Vivamus
              dignissim nisl nunc, ut maximus nibh mollis vitae. Duis vitae
              iaculis nibh. Sed venenatis egestas odio, eu luctus ante.
              Curabitur ullamcorper ex ante, quis volutpat odio volutpat eget.
              Sed quam purus, feugiat a diam ac, accumsan sagittis odio.
              Pellentesque et ligula sem. Etiam posuere convallis posuere.
            </Typography>
            <Typography component="p">
              Nulla volutpat fermentum euismod. In a erat in purus eleifend
              dictum. Fusce lobortis venenatis turpis, congue semper sapien
              imperdiet vel. Mauris laoreet est vehicula pharetra rhoncus. Duis
              lacus risus, dictum vel congue ac, vulputate nec orci. Aliquam ac
              egestas diam, ac vulputate lacus. Ut et feugiat lacus. Nunc sed
              ipsum ex. Pellentesque euismod, augue vel feugiat semper, ipsum
              tellus euismod nunc, et tincidunt odio turpis dictum ligula.
              Aenean placerat sem dui, id molestie elit mollis eget. Suspendisse
              potenti. Nunc ac tristique purus. Cras vitae aliquet enim. Nullam
              ac scelerisque dolor. Curabitur dictum dui quis ligula luctus
              venenatis.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

HomeContent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HomeContent);
