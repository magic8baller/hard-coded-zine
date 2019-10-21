import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import {withStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React from "react";
// import img1 from './assets/minty-fresh.jpg';
const styles = {
	card: {
		maxWidth: 375,
		height: 800
	},
	media: {
		height: 640
	},
	text: {
		height: 800,
		textAlign: "center"
	}
};
function ImageCard (props) {
	const {classes, img} = props;
	// const individualImage = images.map(({id, src, title, description}) => (
	// const img1 = images[0]
	// const {title, id, description} = img1
	// const img2 = images[1]
	// const img3=images[2]

	// ))
	console.table(img)
	return (
		<Card className={classes.card}>
			<CardActionArea>
				<CardMedia
					className={classes.media} image={img.src} title={img.title} />


				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{/* {img.title} */}
          </Typography>
					<Typography className="text" component="p">
						{/* See these eyes so green<br />I can stare for a thousand years<br />Colder than
            the moon<br />It's been so long<br />Feel my blood enraged<br />It's just the fear
            of losing you<br />Don't you know my name?<br />You've been so long<br />And I've
            been putting out the fire with gasoline<br />See these eyes so red<br />Red
            like jungle burning bright <br />Those who feel me near<br />Pull the blinds
            and change their minds<br />It's been so long...*/}
          </Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size="small" color="primary">
					Share
        </Button>
				<Button size="small" color="primary">
					Add To Faves
        </Button>
			</CardActions>
		</Card>
	);
}

ImageCard.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ImageCard);
