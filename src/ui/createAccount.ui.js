import chalk from "chalk";
import inquirer from "inquirer";
//service
import buildAccount from '../services/createAccount.js'

//welcome message account creation
export const createAccount = async () => {
  console.log(chalk.bgGreen.black("Congratulation on choosing our bank."));
  console.log(chalk.green("Please set your account option below."));
  await requestNameAccount();
};

//request for user name entry
export const requestNameAccount = async () => {
 while(true){
  try {
    const answerUser = await inquirer.prompt([
      {
        name: "accountName",
        message: "Enter a name for your account: ",
        validate(value) {
          if(!value.trim()) return "Account name cannot be empty";
          return true
        }
      },
    ]);

    const accountName = answerUser.accountName

    await buildAccount(accountName)

    successMessage(accountName)
    break;
  } catch (err) {
    console.log(chalk.bgRed(err.message));
  }
 } 
  
};

//success when creating account
export const successMessage = (accountName) => {
    console.log(chalk.green(`Congratulation Mr(s) ${accountName}, you account has bee created`))
}