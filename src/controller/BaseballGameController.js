import GameAnalyzer from "../models/GameAnalyzer.js";
import OutputView from "../views/Outputview.js";
import InputView from "../views/InputView.js";
import { MESSAGES } from "../constants/messages.js";
import { USER_INPUT } from "../constants/conditions.js";

class BaseballGameController {
  #computer;

  constructor(computerNumberGenerator) {
    this.#computer = computerNumberGenerator;

    OutputView.printStaticMessage(MESSAGES.startGuide);
  }

  async startGame() {
    const computerNumber = this.#computer.getComputerNumber();
    const userNumber = await InputView.getUserNumber(MESSAGES.inputGuide);
    const { ball, strike } = GameAnalyzer.getBallAndStrike(
      userNumber,
      computerNumber
    );

    OutputView.printGameProgress(ball.strike);

    if (userNumber === computerNumber) return this.finishGame();

    return this.startGame();
  }

  async finishGame() {
    OutputView.printStaticMessage(MESSAGES.replayGuide);

    const userCommand = await InputView.getUserCommand(MESSAGES.replayGuide);

    if (userCommand === USER_INPUT.replay) {
      this.#computer.initcomputerNumber();
      return this.startGame();
    }

    return;
  }
}

export default BaseballGameController;
