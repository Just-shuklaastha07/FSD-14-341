import readline from "readline/promises";
import { stdin, stdout } from "process";

const main= async () => {
    let choice;
    const cin = readline.createInterface({ input: stdin, output: stdout });

    do{
  console.log("Welcome to Amazon Shopping");
  console.log("1....Show Cart");
  console.log("2....Add Product");
  console.log("3....Remove Product");
  console.log("4....Update Quantity");
  console.log("5....Checkout");
  choice = await cin.question("Enter your choice: ");

  switch ( NUmber(Choice) ) {
    case 1:
      console.log("Showing Cart");
      break;
    case 2:
      console.log("Adding Product");
      break;
    case 3:
      console.log("Removing Product");
      break;
    case 4:
      console.log("Updating Quantity");
      break;
    case 5:
      console.log("Checking Out");
      break;
    default:
      console.log("Invalid Choice");
  }
}  while(choice!=5);
cin.close();
};

main();