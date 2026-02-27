import fs from 'fs/promises';
import path from 'path';
//absolute path
const accountPath = path.resolve('src', 'repositories');
//add value to accounts
export const addAmount = async (amount, accountName) => {
  const filePath = path.join(accountPath, `${accountName}.json`);
  //Correct JSON formatting
  const data = {
    name: accountName,
    balance: amount,
    updatedAt: new Date().toISOString(),
  };

  try {
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    throw err;
  }
};
