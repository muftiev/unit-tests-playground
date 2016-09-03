var objectProto = {
        truthy: function truthy() {
            return true;
        },
        isEven: function isEven() {
            var number = this.getNumber();
            return number % 2 === 0;
        },
        countLetters: function countLetters(word) {
            if (typeof word !== 'string') {
                return false;
            } else {
                return Array.prototype.slice.call(word).length;
            }
        },
        getNumber: function getNumber() {
            return Math.random() * 100;
        }
    },
    F = function F() {},
    functions;

F.prototype = objectProto;
functions = new F();
