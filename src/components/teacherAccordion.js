import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShowTests from "./showTests";

export default function TeachersAccordion({ categories, teachers }) {
	return (
		<div>
			{teachers.map((teacher) => {
				return (
					<Accordion TransitionProps={{ unmountOnExit: true }} key={teacher.id}>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1a-content"
							id="panel1a-header"
							key={teacher.id}
						>
							<Typography>{teacher.name}</Typography>
						</AccordionSummary>
						<AccordionDetails>
							{categories.map((categorie) => {
								return (
									<section key={categorie.id}>
										<p>{categorie.name}</p>
										{categorie.tests.map((test) => {
											if (test.teachersDiscipline.teacher.id === teacher.id) {
												return (
													<ShowTests
														key={test.id}
														id={test.id}
														testName={test.name}
														teacherName={test.teachersDiscipline.teacher.name}
														originalViews={test.views}
													/>
												);
											}
										})}
									</section>
								);
							})}
						</AccordionDetails>
					</Accordion>
				);
			})}
		</div>
	);
}
