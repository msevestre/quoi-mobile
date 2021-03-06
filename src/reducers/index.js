import { combineReducers } from "redux";
import * as types from '../actions/actionTypes';

/*************************
Initial state
**************************/
const initialGameState = {
  foundServer: false,
  serverIP: '',
  running: false,
  questionGo: false,
  currentQuestion: {
    id: -1,
    type: ''
  },
  showQuestionCorrection: false,
  questionWasCorrect: false,
  ended: false,
  showRanking: false,
  name: '',
  token: '',
  ranking: -1
};

const game = (state = initialGameState, action) => {
  switch (action.type) {

    case types.LOGIN:
      return Object.assign({}, state, {
        running: true
      });

    case types.QUESTION_READY:
      return Object.assign({}, state, {
        currentQuestion: {
          id: action.questionId,
          type: action.questionType
        },
        showQuestionCorrection: false,
        questionWasCorrect: false
      });

    case types.QUESTION_GO:
      return Object.assign({}, state, {
        questionGo: true
      });

    case types.QUESTION_ANSWER:
      return Object.assign({}, state, {
        questionGo: false,
        currentQuestion: {
          id: -1,
          type: ''
        }
      });

    case types.QUESTION_CORRECTION:
      return Object.assign({}, state, {
        showQuestionCorrection: true,
        questionWasCorrect: action.questionWasCorrect
      });

    case types.GAME_END:
      return Object.assign({}, state, {
        running: false,
        showRanking: true,
        showQuestionCorrection: false,
        questionWasCorrect: false,
        ranking: action.ranking
      });

    case types.SAVE_TOKEN:
      return Object.assign({}, state, {
        name: action.name,
        token: action.token
      });

    case types.FOUND_SERVER:
      return Object.assign({}, state, {
        foundServer: true,
        serverIP: action.serverIP
      });

    case types.GAME_FINISHED:
      return initialGameState;

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  game
});

export default rootReducer;
