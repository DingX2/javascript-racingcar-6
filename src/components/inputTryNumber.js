import { MissionUtils } from "@woowacourse/mission-utils";
import { ERROR, GAME } from "../pages/text.js";

/** 숫자 입력받는 기능 */
export default async function inputTryNumber() {
  const TRYS = await MissionUtils.Console.readLineAsync(GAME.TRY);

  if (isNaN(TRYS) || !Number.isInteger(Number(TRYS))) {
    throw new Error("TRYS is not an integer.");
  }

  if (TRYS <= 0) throw Error(ERROR.INCLUDE_0);
  return TRYS;
}
