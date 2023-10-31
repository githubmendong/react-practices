const babel = require('@babel/core'); // 바벨 라이브러리 호출
const source = 'const fn = () => 1';
const result = babel.transform(source);

console.log(result);


