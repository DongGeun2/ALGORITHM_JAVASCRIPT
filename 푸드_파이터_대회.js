function solution(food) {
  var answer = "";

  function foodEat(arg) {
    const temp = [];

    arg.forEach((a, index) => {
      let format = Math.floor(a / 2);

      for (let i = 1; i <= format; i++) {
        temp.push(index);
      }
    });

    return temp;
  }

  function arrayReturnText(arr) {
    let temp = "";

    arr.forEach((a) => {
      temp += a;
    });

    return temp;
  }

  answer = `${arrayReturnText(foodEat(food))}0${arrayReturnText(
    foodEat(food).reverse()
  )}`;

  console.log(answer);

  return answer;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/134240?language=javascript

solution([1, 3, 4, 6]); // 122333 0 333221
solution([1, 7, 1, 2]); // 1113 0 3111
