/* 버튼 0 누르면
    버튼0에 orange 클래스명 추가
    다른 모든 버튼에 붙은 orange 클래스명 제거
    모든 div에 붙은 show 클래스명 제거
    div0에 show 클래스명 추가
 */

// 아래는 querySelectorAll('.tab-button')[0] 이거랑 같음. tab-button 모두 선택해버리니깐, 그중 0번째만 선택하게 함.

var 탭버튼 = $('.tab-button');
var 탭컨텐츠 = $('.tab-content');

// for문 안에는 변수 설정 시 let으로 해라. var, let은 변수의 범위에서 차이가 있어서 그럼. 
for (let i = 0; i < 3; i++) {
    $('.tab-button').eq(i).on('click', function () {
        $('.tab-button').removeClass('orange');
        $('.tab-content').removeClass('show');
        $('.tab-button').eq(i).addClass('orange');
        $('.tab-content').eq(i).addClass('show');
    });
}

// 위 코드는 아래 코드들을 여러번 복붙 대신해주는 것임.

/* $('.tab-button').eq(0).on('click', function () {
    $('.tab-button').removeClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-button').eq(0).addClass('orange');
    $('.tab-content').eq(0).addClass('show');
});

$('.tab-button').eq(1).on('click', function () {
    $('.tab-button').removeClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-button').eq(1).addClass('orange');
    $('.tab-content').eq(1).addClass('show');
});

$('.tab-button').eq(2).on('click', function () {
    $('.tab-button').removeClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-button').eq(2).addClass('orange');
    $('.tab-content').eq(2).addClass('show');
}); */