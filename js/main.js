//ヘッダー：スクロールしたら出てくる
let header = document.getElementById("header");
let scrTop = 0

window.addEventListener("scroll", function () {
    let scrY = window.scrollY;
    console.log(window.scrollY)
    if (scrY > 300) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }

    if (scrY < scrTop) {
        header.classList.remove("active");
    }

    scrTop = scrY;
    console.log("現在地", scrTop);
});


// ハンバーガーメニュー
let ham = document.querySelector(".ham");/* 最初に出てきたclass名を反映 */
let nav = document.getElementById("nav");/* id付与の場合 */
ham.addEventListener("click", function () {
    ham.classList.toggle("active");
    nav.classList.toggle("active");
});

nav.addEventListener("click", function () {
    this.classList.remove("active");
    ham.classList.remove("active");
});


// 背景の星
window.addEventListener('scroll', function () {
    // スクロール量を取得し変数「scr」に代入しておく
    let scr = window.scrollY;
    // console.log("スクロール", scr)

    // クラスが「star」の要素を全て取得（変数の中身は配列になる）
    const stars = document.querySelectorAll('.star');

    // 各要素のスタイルを変更（複数ある配列の中身をループで処理する）
    stars.forEach(function (star) {
        star.style.transform = 'translateY(-' + scr / 100 + 'px)';//各star要素のtransformの値をscrの値に置き換えていく
    });
});