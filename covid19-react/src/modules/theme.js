// Active Type
const DARK = "theme/DARK";
const LIGHT = "theme/LIGHT";

// Action 생성 함수
export const dark = () => ({ type: DARK });
export const light = () => ({ type: LIGHT });

// 초기화
const initialState = {
  mode: true,
};

// Reducer
const mode = (state = initialState, action) => {
  switch (action.type) {
    case DARK: {
      return {
        mode: true,
      };
    }

    case LIGHT: {
      return {
        mode: false,
      };
    }

    default: {
      return state;
    }
  }
};

export default mode;
