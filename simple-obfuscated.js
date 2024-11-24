// 難読化された関数の例
const _0x5837=['Hello,\x20','World!'];
(function(_0x4d57e2,_0x583795){
    const _0x58c1e3=function(_0x5b5d3f){
        while(--_0x5b5d3f){
            _0x4d57e2['push'](_0x4d57e2['shift']());
        }
    };
    _0x58c1e3(++_0x583795);
}(_0x5837,0x184));

// この関数の動作を解析してみましょう
function getMessage() {
    return _0x5837[0] + _0x5837[1];
}

// 実行して結果を確認
console.log('難読化された関数の出力:');
console.log(getMessage());