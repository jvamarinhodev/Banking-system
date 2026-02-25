import fs from 'fs/promises';
import path from 'path';
//absolute path
const accountPath = path.resolve('src', 'repositories');
//throws invalid name error
export default async function buildAccount(accountName) {
  if (!accountName || !accountName.trim()) {
    throw new Error('Account name cannot be empty');
  }

  const safeName = accountName.replace(/[<>:"/\\|?*]/g, ''); // valid characters

  await fs.mkdir(accountPath, { recursive: true }); //creates and validates if it exists

  const filePath = path.join(accountPath, `${safeName}.json`);

  try {
    await fs.access(filePath); // If it exists, it doesn't throw an error, if it exists, it throws an error.
    throw new Error('Account already exists');
  } catch (err) {
    if (err.code !== 'ENOENT') {
      throw err;
    }

    const data = {
      name: accountName,
      balance: 0,
    };
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
    return true;
  }
}
