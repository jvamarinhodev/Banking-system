import chalk from 'chalk';
import { getAccountBalance } from '../services/checkBalance.js';

export const AccountBalanceUI = async (accountName) => {
  const balance = await getAccountBalance(accountName);
  successMessage(balance, accountName);
};

const successMessage = (balance, accountName) => {
  console.log(chalk.green(`Congratulation Mrs (a) ${accountName}`));
  console.log(chalk.green(`Your have the funds $${balance} in your account.`));
};
