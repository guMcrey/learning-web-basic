// 正则
const getType = (val) => {
    const type = Object.prototype.toString.call(val);
    return type.replace(/\[object (.*?)\]/, '$1').toLowerCase();
}


// split
const getType1 = (val) => {
    const type = Object.prototype.toString.call(val);
    return type.split(' ')[1].split(']')[0].toLowerCase();
}

console.log(getType1());
console.log(getType1(null));
console.log(getType1({}));
console.log(getType1([]));
