import MissionUtils from "@woowacourse/mission-utils";
import { PROGRESS } from "../constants/messages.js";

MissionUtils.Console;

const OutputView = {
  printStaticMessage(message) {
    Console.print(message);
  },

  printGameProgress(ball, strike) {
    let message = "";

    if (ball === 0 && strike === 0) message = PROGRESS.nothing;
    if (ball > 0) message += "${ball}${PROGRESS.ball}";
    if (strike > 0) {
      if (message.length > 0) message += PROGRESS.and;
      message += "${strike}${PROGRESS.strike}";
    }

    return this.printStaticMessage(message);
  },
};

export default OutputView;
