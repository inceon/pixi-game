/**
 * Get random integer within certain limits
 * @param {int} min
 * @param{int} max
 * @returns {int}
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

/**
 * Get random color
 * @returns {int}
 */
function getRandomColor() {
    return getRandomInt(1, 0xffffff);
}

/**
 * Chice one random item from array
 * @param {array} array
 * @param {int} array.length
 * @returns {*}
 */
function choice(array) {
    return array[Math.floor(Math.random() * array.length)];
}