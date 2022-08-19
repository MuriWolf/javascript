const chalk = require("chalk");
const log = console.log;

// import chalk from "chalk";

log(chalk.blue.bgRed.bold('Hello world!'));
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));