// [카카오 인턴쉽] 키패드 누르기

/**
 *
 *  1 2 3
 *  4 5 6
 *  7 8 9
 *  * 0 #
 *
 */

function solution(numbers, hand) {
  let answer = "";

  const LEFT = "L";
  const RIGHT = "R";
  const KEYPAD = [
    [1, 4, 7, "*"], // [0]  Left
    [2, 5, 8, 0], // [1]  Middle
    [3, 6, 9, "#"], // [2]  Right
  ];

  let leftPosition = [0, 3]; // *
  let rightPosition = [2, 3]; // #

  numbers.forEach((number) => {
    if (KEYPAD[0].includes(number)) {
      // LEFT
      answer += LEFT;
      leftPosition = [0, KEYPAD[0].findIndex((a) => a === number)];
      return;
    }

    if (KEYPAD[2].includes(number)) {
      // RIGHT
      answer += RIGHT;
      rightPosition = [2, KEYPAD[2].findIndex((a) => a === number)];
      return;
    }

    if (KEYPAD[1].includes(number)) {
      const TPosition = [1, KEYPAD[1].findIndex((a) => a === number)];

      const LDistance =
        Math.abs(TPosition[0] - leftPosition[0]) +
        Math.abs(TPosition[1] - leftPosition[1]);

      const RDistance =
        Math.abs(TPosition[0] - rightPosition[0]) +
        Math.abs(TPosition[1] - rightPosition[1]);

      if (LDistance === RDistance) {
        if (hand === "left") {
          // 왼손잡이
          answer += LEFT;
          leftPosition = TPosition;
        } else if (hand === "right") {
          // 오른손잡이
          answer += RIGHT;
          rightPosition = TPosition;
        }
      }

      if (LDistance < RDistance) {
        // 왼손잡이
        answer += LEFT;
        leftPosition = TPosition;
      }

      if (LDistance > RDistance) {
        // 오른손잡이
        answer += RIGHT;
        rightPosition = TPosition;
      }
    }
  });

  return answer;
}

const Q1 = [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2]; // left
const Q2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]; // right
const Q3 = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]; // right
const Q4 = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7]; // right
const Q5 = [5, 5, 5, 1, 2, 3, 4, 5, 6, 7, 8, 9]; // right
const Q6 = [2, 5, 8, 0]; // right
const Q7 = [0, 5, 8, 2]; // "left"

// solution(Q1, "left"); // LRLLRRLLLRR
// solution(Q2, "right"); // LLRLLRLLRL
// solution(Q3, "right"); // LRLLLRLLRRL
// solution(Q4, "right"); //
// solution(Q5, "right"); //
// solution(Q6, "right"); // RRRR
// solution(Q7, "left"); // LLLL
