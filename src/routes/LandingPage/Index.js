import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MainIndex from "./MainIndex.js";
import Stuff from "./Stuff";
import VideoShow from "./VideoModel.js";

const useStyles = makeStyles({
	root: {},
});

export default function Index({ nightMode }) {
	const classes = useStyles();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className={classes.root}>
			<MainIndex nightMode={nightMode} />
			<Stuff nightMode={nightMode} />
			<VideoShow nightMode={nightMode} />
		</div>
	);
}
