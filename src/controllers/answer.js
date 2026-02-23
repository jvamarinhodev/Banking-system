import { createAccount } from "../ui/createAccount.ui.js";

const menuControl = async (answerUser) => {
  switch (answerUser) {
    case "Create account":
      await createAccount();
      break;
    case "Check balance":
      break;
    case "Deposit":
      break;
    case "Withdraw":
      break;
    default:
      process.exit();
  }
};

export default menuControl;
