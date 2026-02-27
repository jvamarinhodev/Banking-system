import chalk from 'chalk';
import inquirer from 'inquirer';
import { addAmount } from '../services/deposit.js';
//helpers
import { checkInputBalance } from '../services/helpers.js';

export const depositAccountUI = async (accountName) => {
  try {
    const answerUser = await inquirer.prompt([
      {
        name: 'amount',
        message: `How much you wish to deposit Mr (a) ${accountName}:`,
        validate: checkInputBalance,
      },
    ]);

    const amountUser = Number(answerUser.amount);

    await addAmount(amountUser, accountName);

    successMessage(accountName, amountUser);
  } catch (err) {
    console.log(chalk.bgRed.black('DepositAccount failed:'), err);
    throw err;
  }
};

const successMessage = (accountName, amountUser) => {
  console.log(chalk.green(`Congratulation Mrs (a) ${accountName}`));
  console.log(chalk.green(`The amount of R$${amountUser} into your account!`));
};
