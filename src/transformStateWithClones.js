'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  // write code here
  let prevState = { ...state };
  const result = [];

  for (const action of actions) {
    let newState = { ...prevState };

    if (action.type === 'addProperties') {
      Object.assign(newState, action.extraData);
      result.push(newState);
    }

    if (action.type === 'removeProperties') {
      for (const key of action.keysToRemove) {
        delete newState[key];
      }
      result.push(newState);
    }

    if (action.type === 'clear') {
      newState = {};
      result.push(newState);
    }
    prevState = newState;
  }

  return result;
}

module.exports = transformStateWithClones;
