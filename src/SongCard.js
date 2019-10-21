import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {withStyles} from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React from "react";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

const styles = theme => ({
	card: {
		display: "flex",
		height: "470px",
		width: "305px",
		boxSizing: "borderBox",
		padding: "4rem",
		border: "2px solid gray",
		textAlign: "center",
		borderRadius: "2em"
	},
	details: {
		display: "flex",
		flexDirection: "column",
		marginBottom: "8rem"
	},
	content: {
		flex: "1 0 auto",
		marginTop: "1.3rem",
		marginBottom: "-2.5rem"
	},
	cover: {
		display: "inline-flex",
		flexDirection: "row",
		width: 151
	},
	controls: {
		display: "flex",

		paddingLeft: theme.spacing.unit,
		margin: "0rem 0 0.1rem 3rem"
	},
	playIcon: {
		height: 38,
		width: 38
	},

	media: {
		height: 150
	},
	text: {
		height: 800,
		textAlign: "center",
		font: 'Verdana'
	}
});

function SongCard (props) {
	const {classes, theme, title, uri, img} = props;
// console.log(iframe)
	return (
		<Card className={classes.card}>
		<CardActionArea>
			<div className={classes.details}>
					<Typography gutterBottom component="h5" variant="h5">
						🎵🎹<br/>
						<em><b>{title}</b></em><br/><br/>
          </Typography>
			<CardMedia className={classes.media} image={img} title={title}/>
				<CardContent className={classes.content}>

					{/* <Typography variant="subtitle1" color="textSecondary">
					</Typography> */}

				</CardContent>
					<h2 style={{marginBottom: '2rem'}}>TAKE ME THERE</h2>
				<div className={classes.controls}>
					<IconButton aria-label="Previous">
            {theme.direction === "rtl" ? (
              <SkipNextIcon />
            ) : (
              <SkipPreviousIcon />
            )}
          </IconButton>
          <IconButton aria-label="Play/pause">
           <a href={uri} title={uri}><PlayArrowIcon className={classes.playIcon} /></a>
          </IconButton>
          <IconButton aria-label="Next">
            {theme.direction === "rtl" ? (
              <SkipPreviousIcon />
            ) : (
              <SkipNextIcon />
            )}
          </IconButton>
				</div>

			{/* <CardMedia
        className={classes.cover}
        image={img}
        title="Live from space album cover"
      /> */}
			{/* <img src={img} className={classes.cover} title={img}/> */}
			<CardActions style={{paddingBottom: '3rem', margin: "0 auto"}}>
				<Button size="small" color="primary">
					Share
        </Button>
				<Button size="small" color="primary">
					Add To Faves
        </Button>
			</CardActions>
			</div>
			</CardActionArea>
		</Card>
	);
}

SongCard.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired
};

export default withStyles(styles, {withTheme: true})(SongCard);
