// 1, 2, 3, 1
function solution(ingredient) {
  let answer = 0;

  function makeBurger(material) {
    let temp = [];

    for (let i = 0; i < material.length; i++) {
      temp.push(material[i]);

      if (temp?.length === 3 && material[i + 1] === 1) {
        temp.push(material[i + 1]);

        material.splice(i - 2, 4);
        answer++;
        break;
      }

      if (temp[temp?.length - 1] < material[i + 1]) continue;

      temp = [];
    }

    if (temp?.length === 4) {
      makeBurger(material);
    }
  }

  makeBurger(ingredient);

  return answer;
}

// solution([2, 1, 1, 2, 3, 1, 2, 3, 1]); // 2
// solution([1, 3, 2, 1, 2, 1, 3, 1, 2]); // 0
// solution([1, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 1, 1]); // 2
// solution([1, 2, 1, 2, 3, 1, 3, 1, 2, 3, 1, 2, 3, 1]); // 3
