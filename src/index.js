
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
    if (!matrix || matrix.length === 0) return []; // проверяем точно ли матрица
    let newArr =[]; // создаем массив
    matrix.forEach((item,i) =>{ // для каждого элемента матрицы задаем положение
      if(i%2==0){ // если строка матрицы четная - то просто добавляем элемент
        item.forEach(element => {
          newArr.push(element);
        });
      }else{ // а если строка нечетная - на месте обращает порядок следования элементов массива. Первый элемент массива становится последним, а последний — первым.
        item = item.reverse();
        item.forEach(element => {
          newArr.push(element);
        });
      }
    })
    return newArr;
  }
