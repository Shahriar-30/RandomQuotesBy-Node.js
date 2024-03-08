let random = {};

random.getRandomNum = function getRandomNums(min, max) {
    let minimum = min;
    let maximum = max;

    typeof minimum === 'number' ? minimum : 1;
    typeof maximum === 'number' ? maximum : 1;

    let gotRandomNumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    return gotRandomNumber;
}

module.exports = random;