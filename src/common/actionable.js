class Actionable {

  constructor(actionTrue, actionFalse) {
    this._actionTrue = actionTrue
    this._actionFalse = actionFalse
  }

  doIfElse(test) {
    if (test) {
      if (this._actionTrue) this._actionTrue()
    } else {
      if (this._actionFalse) this._actionFalse()
    }
  }

}

export default Actionable