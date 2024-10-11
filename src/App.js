import BaseballGameController from "./controller/BaseballGameController.js";
import NumberGenerator from "./models/NumberGenerator.js";

class App {
  #gameController;

  constructor() {
    this.#gameController = new BaseballGameController(new NumberGenerator());
  }

  async play() {
    await this.#gameController.startGame();
  }
}

const app = new App();
app.play();

export default App;
