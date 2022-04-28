import { Box } from "@mui/system";
import * as api from "../services/testsApiService";
import { useAuth } from "../contexts/AppContext";
import { useState } from "react";

const styleBox = {
	display: "flex",
	justifyContent: "space-between",
};

export default function ShowTests({
	id,
	testName,
	teacherName,
	originalViews,
}) {
	const { token } = useAuth();
	const [views, setViews] = useState(originalViews);

	function update() {
		api
			.updateViews(id, token)
			.then((response) => setViews(response.data.views))
			.catch((erro) => console.log(erro));
	}

	return (
		<Box
			onClick={() => {
				update();
			}}
			sx={styleBox}
		>
			<span>
				{testName}({teacherName})
			</span>
			<span>Views: {views}</span>
		</Box>
	);
}
