import {withStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";
import ImageCard from "./ImageCard";
import PoemCard from "./PoemCard";
import SongCard from "./SongCard";

const styles = theme => ({
	root: {
		display: "grid",
		gridTemplateColumns: "max-content max-content",
		gridGap: "8px 8px",
		gridAutoFlow: "row dense",
		boxSizing: "border-box",
		margin: "3em",
		width: "70vw",
		font: 'Helvetica'

	},
	item: {
		padding: "2em"
	},
	large: {
		gridRow: "auto / span 2"
	}
});

function ComplexGrid (props) {
	const {classes, poems, images} = props;

	return (
		<div className={classes.root}>
			<div className={classes.large}>
				<PoemCard poem={poems[0]} img={poems[0].img}/>
			</div>
			<div className={classes.large}>
				<SongCard uri="https://open.spotify.com/playlist/3MXpifLwW0UUN23dbY15k0" title="🍸 BoozeCotv@ 🎶" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGnbpKxKyZ7CAnWxKtNIOUH5h2tdhqfp5oIGFG0SF_B7r7tTW3nA"/>
			</div>
			<div>
				<ImageCard img={images[2]} />
			</div>
			<div className={classes.large}>
				<PoemCard poem={poems[0]} img={poems[0].img} />
			</div>
			<div>
				<SongCard uri="https://open.spotify.com/playlist/0LMRW5n645F40QwaT5oVeA?si=M8mhH1GzSNW_kNtNl1UnmA" title="After after after party" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ctJIIbjpEIuzo2FUVwXyF-_8Dyaf1gr86Sv62oAJnkC7UxwubQ"/>
			</div>
			<div className={classes.large}>
				<PoemCard poem={poems[1]} img={poems[1].img}/>
			</div>
			<div>
				<ImageCard img={images[1]} />
			</div>
			<div className={classes.large}>
				<PoemCard poem={poems[3]} img={poems[3].img}/>
			</div>
			<div>
				<ImageCard img={images[3]}/>
			</div>
			<div>
				<PoemCard poem={poems[2]} img={poems[2].img}/>
			</div>
			<div><ImageCard img={images[0]}/></div>
			<div>
				<SongCard uri="https://open.spotify.com/playlist/2TIiWOTrPdQl5vAguJuTyt?si=zu0ySHs4SGWthaZF8d0Rew" title=" como french dj Xavier" img="http://images.45cat.com/the-temptations-get-ready-tamla-motown-5.jpg"/>
			</div>
			<div><ImageCard img={images[4]}/></div>
		</div>
	);
}

ComplexGrid.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ComplexGrid);
