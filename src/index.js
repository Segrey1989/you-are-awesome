// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => {
return  propertyName;
};

const createNotEnumerableProperty = (propertyName) => {
  Object.defineProperty(Object.prototype, propertyName, {
    value:'value',
  enumerable:false
});
 return propertyName;
}


const createProtoMagicObject = () => {
return Function;
};


const incrementor = () => {
incrementor.value;

  const f = () => {
    if(!incrementor.value) incrementor.value=0;

   incrementor.value += 1;
  return f;
}
 f.toString= ()=> incrementor.value;
return f();
};

const asyncIncrementor = () => {};
const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};

const getDeepPropertiesCount = (obj) => {
  let count = Object.keys(obj).length;
	  for (let key in obj){
	    if (typeof obj[key] === "object") {
	      count += getDeepPropertiesCount(obj[key]);
	    }

	  }
    return count;
	}

  const createSerializedObject = () => {};
const toBuffer = () => {};

const sortByProto = (arr) => {
let array = arr;
array.sort((a,b) => a.__proto - b.__proto__);
return array;
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
