/* eslint-disable */
import { SET_BUTTON_CSS }  from '../constants';

// state
const state = {
  buttonStyle: {
    borderRadius: 5,
    paddingX: 16,
    paddingY: 24,
    width: 100,
    fontSize: 14,
    borderWidth: 1,
    fontWeight: 700,
    color: '#ffffff',
    backgroundColor: '#191970',
    borderColor: '#ffffff',
  },
};

// getters
const getters = {
  buttonStyle: ({ buttonStyle}) => buttonStyle,
};

// mutations
const mutations = {
  SET_BUTTON_CSS(state, payload) {
    state.buttonStyle = { ...state.buttonStyle, ...payload }
  }
};

// const addPxTo =  buttonStyle => ({
//   borderRadius: `${buttonStyle.borderRadius}px`,
//   padding: `${buttonStyle.paddingX}px ${buttonStyle.paddingY}px`,
//   width: `${buttonStyle.width}px`,
//   fontSize: `${buttonStyle.fontSize}px`,
//   borderWidth: `${buttonStyle.borderWidth}px`,
//   fontWeight: buttonStyle.fontWeight,
//   color: buttonStyle.color,
//   backgroundColor: buttonStyle.backgroundColor,
//   borderColor: buttonStyle.borderColor,
// });

export default {
  state,
  getters,
  mutations,
}
