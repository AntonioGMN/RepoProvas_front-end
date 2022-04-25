import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1a-content"
							id="panel1a-header"
							key={t.id}
							disableGutters={true}
						>
							<Typography>{t.number} Período</Typography>
						</AccordionSummary>
						<AccordionDetails>
							{disciplines.map((d) => {
								if (t.id === d.termId) {
									return (
										<Accordion key={d.id}>
											<AccordionSummary
												expandIcon={<ExpandMoreIcon />}
												aria-controls="panel1a-content"
												id="panel1a-header"
											>
												<Typography>{d.name}</Typography>
											</AccordionSummary>
											<AccordionDetails>
												{categories.map((c) => {
													return (
														<di>
															<p>{c.name}</p>
															{tests.map((test) => {
																if (
																	c.id === test.categoryId &&
																	d.id === test.teachersDiscipline.discipline.id
																) {
																	return (
																		<div>
																			<span>
																				{test.name}({test.teachersDiscipline.teacher.name})
																			</span>
																		</div>
																	);
																}
															})}
														</di>
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
