import MissionUtils from "@woowacourse/mission-utils";
import InputValidator from "../models/InputValidator.js";
import { MESSAGES } from "../constants/messages.js";

MissionUtils.Console;

const InputView = {
  async getUserNumber(message) {
    const userNumber = await Console.readLineAsync(message);

    if (!InputValidator.hasValidNumber(userNumber))
      throw new Error(MESSAGES.inputError);

    return parseInt(userNumber, 10);
  },

  async getUserCommand(message) {
    const userCommand = await Console.readLineAsync(message);

    if (!InputValidator.hasValidcommand(userCommand))
      throw new Error(MESSAGES.inputError);

    return parseInt(userCommand, 10);
  },
};

export default InputView;
