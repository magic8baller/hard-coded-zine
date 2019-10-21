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

const styles = {
	card: {
		maxWidth: 375,
		height: 800
	},
	media: {
		height: 140
	},
	text: {
		height: 800,
		textAlign: "center",
		font: 'Verdana',
		fontSize: '1.5em',
		whiteSpace: 'pre'
	}
};

function PoemCard (props) {
	const {classes, poem, img} = props;
	return (
		<Card className={classes.card}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image={img}
					title='ok'
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
					<span style={{font: 'Impact'}}>
						<em><b><u>{poem.title}</u></b></em></span>
						<br/><span style={{fontSize: '0.8rem'}}>{poem.createdAt}</span>

          </Typography>
					<Typography className={classes.text}>
						{poem.body}
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

PoemCard.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PoemCard);
