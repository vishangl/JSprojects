const numeric = "123456";
console.log(validator.isNumeric(numeric)
    ? chalk.green("number is valid"):chalk.red("number is invalid")
);

const email = "vishnag1807@gmail.com";
console.log(validator.isEmail(email)
    ? chalk.green("email is vlaid"): chalk.red("email is invalid")
);
