import MissionUtils from "@woowacourse/mission-utils";
import { GAMEBOX_CONDITION } from "../constants/conditions.js";

MissionUtils.Random;

class NumberGenerator {
  #computerNumber;

  constructor() {
    this.#computerNumber = this.generateRandomNumbers();
  }

  generateRandomNumbers() {
    const digitArray = new Set();

    while (digitArray.size < GAMEBOX_CONDITION.maxLength) {
      const randomNumber = Random.pickNumberInRange(
        GAMEBOX_CONDITION.startNumber,
        GAMEBOX_CONDITION.endNumber
      );
      digitArray.add(randomNumber);
    }

    return parseInt([...digitArray].join(""), 10);
  }

  getcomputerNumber() {
    return this.#computerNumber;
  }

  initcomputerNumber() {
    this.#computerNumber = this.generateRandomNumbers();
  }
}

export default NumberGenerator;
