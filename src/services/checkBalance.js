import fs from 'fs/promises';
import path from 'path';
//helpers

const accountPath = path.resolve('src', 'repositories');

export const getAccountBalance = async (accountName) => {
  const filePath = path.join(accountPath, `${accountName}.json`);
  try {
    const accountJSON = await fs.readFile(filePath, 'utf-8');

    const accountBalance = JSON.parse(accountJSON);

    return accountBalance.balance;
  } catch (err) {
    throw new Error('Account not found or invalid');
  }
};
