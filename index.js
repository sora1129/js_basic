'use strict';

{
	//letによる宣言では変数の重複を許可しない
	let msg = 'letによる宣言';
	let msg = 'letによる宣言';

	// varによる宣言では重複を許可する
	var msg = 'varによる宣言';
	var msg = 'varによる宣言';
}


