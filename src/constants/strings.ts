export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['이제 당신도 어엿한 블롭??']
export const GAME_COPIED_MESSAGE = '클립보드에 복사했어요!'
export const NOT_ENOUGH_LETTERS_MESSAGE = '블롭이 부족해요...'
export const WORD_NOT_FOUND_MESSAGE = '이 메세지는 어떻게 보고 있는 거에요...???'
export const HARD_MODE_ALERT_MESSAGE =
  '하드모드는 시작할 때만 설정할 수 있어요!'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `답은 ${solution}이였어요...`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `${guess} <- 얘를 ${position} 위치에 써야해요`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `${letter} <- 얘가 포함되야 해요`
export const ENTER_TEXT = '입력'
export const DELETE_TEXT = '지우기'
export const STATISTICS_TITLE = '통계'
export const GUESS_DISTRIBUTION_TEXT = '시도 횟수 분포'
export const NEW_WORD_TEXT = '새 블롭은 언제?'
export const SHARE_TEXT = '공유'
export const TOTAL_TRIES_TEXT = '총 시도'
export const SUCCESS_RATE_TEXT = '성공률'
export const CURRENT_STREAK_TEXT = '연속 정답'
export const BEST_STREAK_TEXT = '최대 연속 정답'
