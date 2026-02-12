import fs from "fs";

const accountPath = `/src/repositories`;

const buildAccount = (accountName) => {
  //validate path
  if (!fs.existsSync(accountPath)) {
    fs.mkdirSync(accountPath);
  }
  //validate account
  if (fs.existsSync(`${accountPath}/${accountName}.json`)) {
    return false;
  }
};

export default buildAccount;
