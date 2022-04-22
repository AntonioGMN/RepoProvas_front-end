import joi from "joi";

const cadastroSchema = joi.object({
	email: joi.string().email().required(),
	password: joi.string().required(),
	confirmPassword: joi.string().required(),
});

export default function validationDadosCadastrados(obj) {
	const validation = cadastroSchema.validate(obj, {
		abortEarly: false,
	});

	if (validation.error) {
		return {
			hasErrors: true,
			errors: validation.error.details.map((error) => `\n*${error.message}`),
		};
	}

	if (obj.password !== obj.confirmPassword) {
		return {
			hasErrors: true,
			errors: "As senhas devem ser iguais",
		};
	}

	return true;
}
