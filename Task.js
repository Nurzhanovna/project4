 /** Day 0 Hello world**/
 function greeting(parameterVariable) {
    console.log('Hello, World!');
    console.log(parameterVariable);
}
/** Day 0 Data typs**/
function performOperation(secondInteger, secondDecimal, secondString) {
    const firstInteger = 4;
    const firstDecimal = 4.0;
    const firstString = 'HackerRank ';
    console.log(firstInteger + parseInt(secondInteger));
    console.log(firstDecimal + parseFloat(secondDecimal));
    console.log(firstString + secondString);

    /**Day 1 Arithmetic operators**/
function getArea(length, width) {
   let area = length * width;
   return area;
}
function getPerimeter(length, width) {
   let perimeter = 2 * (length + width);
   return perimeter;
}

/**Day 1 Function**/
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

/**Day 2 Conditional Statements: Switch**/
function getLetter(s) {
    let letter;

    const firstChar = s.charAt(0).toLowerCase(); 
    if ('aeiou'.includes(firstChar)) {
        letter = 'A';
    } else if ('bcdfg'.includes(firstChar)) {
        letter = 'B';
    } else if ('hjklm'.includes(firstChar)) {
        letter = 'C';
    } else {
        letter = 'D';
    }

    return letter;
}
/**Day 3 Arrays**/
function getSecondLargest(nums) {
    let firstMax = -Infinity;
    let secondMax = -Infinity;
for (const num of nums) {
        if (num > firstMax) {
            secondMax = firstMax;
            firstMax = num;
        } else if (num < firstMax && num > secondMax) {
            secondMax = num;
        }
    }

    return secondMax;
}


/**Day 3 Throw**/
function isPositive(a) {
    if (a > 0) {
        return "YES";
    } else if (a === 0) {
        throw new Error("Zero Error");
    } else {
        throw new Error("Negative Error");
    }
}

/**Day 4 Create a Rectangle Object**/
function Rectangle(a, b) {
    this.length = a;
    this.width = b;
    this.perimeter = 2 * (a + b);
    this.area = a * b;
}

/**Day 4 Count Objects**/
function getCount(objects) {
    const filteredObjects = objects.filter(o => o.x === o.y);
    return filteredObjects.length;
}

/**Day 4 Classes**/
class Polygon {
    constructor(sideLengths) {
        this.sideLengths = sideLengths;
    }
    perimeter() {
        return this.sideLengths.reduce((sum, length) => sum + length, 0);
    }
}

