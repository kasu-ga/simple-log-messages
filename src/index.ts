import chalk from "chalk";

const getFormatedTime = (): string => {
  const now = new Date(Date.now());
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
};

export default class messages {
  static success(message: string) {
    const time = `${chalk.gray(getFormatedTime())}`;
    console.info(`${time} [${chalk.green("SUCCESS")}] ${message}`);
  }

  static info(message: string) {
    const time = `${chalk.gray(getFormatedTime())}`;
    console.info(`${time} [${chalk.cyan("INFO")}] ${message}`);
  }

  static warn(message: string) {
    const time = `${chalk.gray(getFormatedTime())}`;
    console.info(`${time} [${chalk.yellow("INFO")}] ${message}`);
  }

  static error(message: string) {
    const time = `${chalk.gray(getFormatedTime())}`;
    console.info(`${time} [${chalk.red("ERROR")}] ${message}`);
  }
}
