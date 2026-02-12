import { createAccount } from "../ui/systemInterface.js";

const menuControl = (answerUser) => {
  switch (answerUser) {
    case "Create account":
      createAccount();
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
