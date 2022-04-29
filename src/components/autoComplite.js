import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useState, useEffect } from "react";
import { date } from "joi";

export default function AutoComplete({ option, title, date, setDate }) {
	const [value, setValue] = useState(null);
	const [inputValue, setInputValue] = useState("");

	useEffect(() => {
		if (value !== null) {
			console.log(value);
			if (value.hasOwnProperty("tests")) {
				setDate({ ...date, category: value.name });
				return;
			}
			if (value.hasOwnProperty("termId")) {
				setDate({ ...date, discipline: value.name });
			} else {
				setDate({ ...date, teacher: value.name });
			}
		}
	}, [value]);

	return (
		<Autocomplete
			value={value}
			onChange={(event, newValue) => {
				setValue(newValue);
			}}
			inputValue={inputValue}
			onInputChange={(event, newInputValue) => {
				setInputValue(newInputValue);
			}}
			sx={{ width: "100%" }}
			options={option}
			getOptionLabel={(option) => option.name}
			renderOption={(props, option) => (
				<Box component="li" sx={{ "& > img": { mr: 2, flexShrink: 0 } }} {...props}>
					{option.name}
				</Box>
			)}
			renderInput={(params) => (
				<TextField
					{...params}
					label={title}
					inputProps={{
						...params.inputProps,
						autoComplete: "new-password", //disable autocomplete and autofill
					}}
				/>
			)}
		/>
	);
}
