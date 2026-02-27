import fs from 'fs/promises';
import path from 'path';
// absolute path
const accountPath = path.resolve('src', 'repositories');
//A help function to check if there are users.
export const checkAccount = async (accountName) => {
  const filePath = path.join(accountPath, `${accountName}.json`);

  try {
    await fs.access(filePath);
    return true;
  } catch (err) {
    throw new Error('This account does not exist. Please choose another name!');
  }
};
//Validate user input
export const checkInput = (min) => (input) => {
  if (!input.trim()) {
    return 'Account name be empty.';
  }

  if (/[\\/:*?"<>|]/.test(input)) {
    return 'Name contains invalid characters';
  }

  if (input.trim().length < min) {
    return `Type at least ${min} letters.`;
  }

  if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(input)) {
    return 'Name contains invalid characters';
  }

  return true;
};
//Validate user input values
export const checkInputBalance = (input) => {
  if (!/^\d+(\.\d{1,2})?$/.test(input)) {
    return 'Write only digits!';
  }

  const inputNumber = Number(input);

  if (inputNumber < 0) {
    return 'Invalid negative values';
  }
  return true;
};
