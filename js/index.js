'use strict';

/*
Реализовать класс RangeValidator
Обьекты, созданные им должны обладать следующими свойcтвами:
from(число) 5
to(число) 50

- Реализовать геттеры и сеттеры для обоих свойств.
- Реализовать getter range, который будет возвращать массив, состоящий из границ диапазона from и to.
- Реализовать метод validate, который будет принимать число и проверять входит ли число в указанный диапазон.
(метод возвращает это же число, если оно входит в диапазон. И кинет ошибку, если не входит).

* Bonus tasks:
Создать проверки которые убедятся, что число во from меньше числа to и наоборот.
Создать проверки, которые помогут избежать попадание неправильных типов данных в from и to.
*/

class RangeValidator {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  get from () {
    return this._from;
  }
  get to () {
    return this._to;
  }

  get range() {
    return [this.from, this.to]
  }

  set from (from) {
    if (typeof from !== 'number' || isNaN(from)) {
      throw new TypeError('Must be a number!');
    }
    if (from >= this.to) {
      throw new RangeError ('The first number must be less than the second!')
    }
    this._from = from;
  }

  set to (to) {
    if (typeof to !== 'number'|| isNaN (to)) {
      throw new TypeError('Must be number!');
    }
    if (to < this.from) {
      throw new RangeError ('The second number must be greater than the first!')
    }
    this._to = to;
  }

  validate(number) {
    if (typeof number !== 'number' || isNan (number)) {
      throw new TypeError('You must enter only numbers');
    }
    if (number < this.from || number > this.to) {
      throw new RangeError('number must be greater than 5 and less than 50!');
    }
    return `Congratulations! ${number} is been validated`;
  }
}

const rangeTest = new RangeValidator (5, 50);