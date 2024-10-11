import { USER_INPUT, GAMEBOX_CONDITION } from "../constants/conditions.js";

const InputValidator = {
  hasValidNumber(input) {
    const numberReqExp = /^\d+$/;
    const isNumberic = numberReqExp.test(input);
    const isValidLength = input.length === GAMEBOX_CONDITION.maxLength;
    const isValidUnique = new Set(input).size === GAMEBOX_CONDITION.maxLength;
    const isValidRange = !input.includes(GAMEBOX_CONDITION.limitNumber);

    return isNumberic && isValidLength && isValidUnique && isValidRange;
  },

  hasValidcommand(input) {
    const commandInput = parseInt(input, 10);

    return (
      commandInput === USER_INPUT.replay || commandInput === USER_INPUT.end
    );
  },
};

export default InputValidator;
