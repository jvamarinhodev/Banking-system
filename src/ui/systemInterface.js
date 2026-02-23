import inquirer from "inquirer";
//control
import menuControl from "../controllers/answer.js";
//system interface
export const systemInterface = async () => {
  let logOut = false;

  try {
    while (!logOut){

      const answerUser = await inquirer.prompt([
      {
        type: "list",
        name: "action",
        message: "What do you want to do?",
        choices: [
          "Create account",
          "Check balance",
          "Deposit",
          "Withdraw",
          "Log Out",
        ],
      },
    ]);

    if(answerUser.action === 'Log Out'){
      logOut = true
      break;
    }

    await menuControl(answerUser.action);
  }
    
  } catch (err) {
    console.log(err);
  }
};

