import React, { useEffect } from "react";
import MainIndex from "./MainIndex.js";
import Stuff from "./Stuff";

export default function Index({ nightMode }) {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<MainIndex nightMode={nightMode} />
			<Stuff nightMode={nightMode} />
		</div>
	);
}
