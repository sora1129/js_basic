'use strict';

{
	/*
	// 数値の復習（数値の取り出し）
	const a = 10;
	const b = 1.23;
	const c = 5;

	console.log(Number.MAX_VALUE);
	console.log(Number.MIN_VALUE);
	*/

	/*
	//四捨五入
	console.log(Math.round(5.5));
	console.log(Math.round(-5.51));
	console.log(Math.round(-5.5));
	console.log(Math.round(5.2));
	console.log(Math.round(-5.2));
	// 切り捨て
	console.log(Math.floor(6.1));
	console.log(Math.floor(6.6));
	console.log(Math.floor(-6.6));
	// 切り上げ
	console.log(Math.ceil(3.5));
	console.log(Math.ceil(-3.5));
	console.log(Math.ceil(3.1));
	// 数値の整数部分を返す
	console.log(Math.trunc(7.8));
	console.log(Math.trunc(7.2));
	*/

	/*
	// ランダムな数値
	console.log(Math.random());
	console.log(Math.floor(Math.random() * 100)); // 0以上100未満のランダムな整数
	console.log(10 + Math.floor(Math.random() * 10)); // 10以上20未満のランダムな整数

	// 長方形
	const gradation = document.querySelector('.gradation');

	// ボタンをクリックしたらonClickButtonイベント関数を実行する
	document.querySelector('.button').addEventListener('click', onClickButton);

	// ボタンをクリックする度に、長方形のグラデーション色を変える
	function onClickButton() {
		// 0～359の間のランダムな数を取得する
		const randomNum = Math.trunc(Math.random() * 360);
		// グラデーションの開始色と終了色を決定
		const randomColorStart = `hsl(${randomNum}, 100%, 50%)`;
		const randomColorEnd = `hsl(${randomNum + 40}, 100%, 50%)`;
		// 長方形のグラデーションのための変数(--start)と(--end)を変更
		gradation.style.setProperty('--start', randomColorStart);
		gradation.style.setProperty('--end', randomColorEnd);
	}
	*/

	// 数学的な計算
	// 絶対値
	console.log(Math.abs(-10)); //-10の絶対値 10
	// べき乗
	console.log(Math.pow(2, 10));// 2の10乗。1021
	// 数値符号
	console.log(Math.sign(2)); // 正=1
	console.log(Math.sign(-2)); // 負=-1
	// 平方根
	console.log(Math.sqrt(16)); // 16の平方根=4
	console.log(Math.sqrt(3)); // 3の平方根=1.7320508...
	// 自然対数
	console.log(Math.log(Math.E)); // eの自然数=1
	console.log(Math.E); // 自然数の底（ネピア数e）2.718281828459045
	// 指数関数
	console.log(Math.exp(2)); // 自然数の底（ネピア数e）の2乗=7.38905609893065 
}


