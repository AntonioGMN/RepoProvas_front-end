import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShowTests from "./showTests";

export default function SimpleAccordion({
	terms,
	disciplines,
	categories,
	tests,
}) {
	return (
		<section>
			{terms.map((t) => {
				return (
					<Accordion key={t.id}>
						<AccordionSummary expandIcon={<ExpandMoreIcon />} key={t.id}>
							<Typography>{t.number} Período</Typography>
						</AccordionSummary>
						<AccordionDetails>
							{disciplines.map((d) => {
								if (t.id === d.termId) {
									return (
										<Accordion key={d.id} id="diciplina">
											<AccordionSummary expandIcon={<ExpandMoreIcon />} key={d.id}>
												<Typography>{d.name}</Typography>
											</AccordionSummary>
											<AccordionDetails>
												{categories.map((c) => {
													return (
														<div key={c.id}>
															<p>{c.name}</p>
															{tests.map((test) => {
																if (
																	c.id === test.categoryId &&
																	d.id === test.teachersDiscipline.discipline.id
																) {
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
														</div>
													);
												})}
											</AccordionDetails>
										</Accordion>
									);
								} else return "";
							})}
						</AccordionDetails>
					</Accordion>
				);
			})}
		</section>
	);
}
