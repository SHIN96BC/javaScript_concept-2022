
// 변수나 함수는 스코프라고 히는 공간에 생깁니다.
// 스코프의 종류
//  1. 글로벌 스코프( 전역 스코프 )
//    - 애플리케이션이 실행되면 그 즉시 만들어지고, 어플리케이션 종료시에 사라집니다.
//  2. 함수 스코프
//    - 함수를 통해서 만들 수 있는 스코프 공간입니다.
//  3. 블록 스코프
//    - 코드를 묶고 있는 공간이라면 모두 블록 스코프가 생깁니다.
// 스코프는 그저 함수가 있다고 함수 스코프 공간이 생기는 것이 아니라
// 그 함수 또는 블록으로 진입했을 때 생성이 됩니다. 그리고 그 함수 또는 
// 블록을 벗어나게 되면 해당 스코프도 사라집니다.

// myname 은 전역 스코프 공간에 생긴 변수입니다.
// 전역 스코프 공간은 중첩이 가능합니다.
let myname = 'shin';

// foo2 는 전역 스코프 공간에 생긴 함수입니다.
function foo2() {
    // x 는 함수 스코프 공간에 생긴 변수입니다.
    let x = 10;
    console.log(x);

    // 함수 스코프 공간안에서는 전역 스코프 공간에 있는
    // myname 이라는 변수에 접근이 가능합니다.
    console.log(myname);

    // @ 중요
    // bar 함수가 만들어지기 전에 bar 함수를 호출해도 아무런 문제없이
    // 호출이 됩니다. 이것은 자바스크립트만의 특별한 메커니즘인 
    // 호이스팅때문에 가능합니다. 호이스팅 메커니즘은 스코프가 생성될 때
    // 그 스코프 공간안에 만들어야 될 함수나 변수들을 미리 만들고 코드를
    // 실행시키는 메커니즘입니다.( 즉, 코드가 실행되기 전에 스코프 공간의 
    // 코드를 탐색하고 만들 것들을 만들고 코드를 실행시킵니다. )
    bar();

    // @ 중요 
    // 이 호이스팅 메커니즘은 함수 정의문에서는 적용이 되는데
    // 함수식에서는 적용이 되지 않습니다.
    
    // ( zoo 함수가 생성되기 전이라 호출이 불가능합니다. )
    // zoo();
    const zoo = function() {

    }
    // 이러한 문제가 있으므로, 항상 함수나 변수는 최상단에 만들어두고
    // 그 아래에서 호출하는 방식으로 코드를 짜는 것이 좋습니다.

    // 함수 스코프 공간도 중첩이 가능합니다.
    function bar() {
        let y = 20;
        // bar 함수 스코프 공간에서는 전역 스코프 공간의 myname 은 물론 
        // 상위 함수 스코프 공간의 x 또한 접근이 가능합니다.
        console.log(x);
        console.log(myname);
    }

    // 그러나 상위 함수 스코프 공간에서 하위 함수 스코프 공간에 있는
    // y 라는 변수에는 접근이 불가능합니다.
    // 하위( 안쪽 ) --> 상위( 바깥쪽 ) ( 접근 가능 )
    // 상위( 바깥쪽 ) --> 하위( 안쪽 ) ( 접근 불가능 )
    // console.log(y);
    bar();

    // 아래의 if 문 안쪽의 공간은 블록 스코프 공간이 됩니다.
    if(x === 10) {
        // 블록 스코프 공간에 함수 스코프 공간에 있는 변수와 같은 이름으로
        // 변수를 만들고 다른 값을 줍니다.
        let x = 100;

        // 그 다음에 x 의 값을 찍어보면 100 이라는 블록 스코프 공간에 있는
        // 변수의 값이 나오는 것을 확인 할 수 있습니다.
        // 즉, 스코프 공간에서 변수를 찾을 때는 자기 자신부터 찾고,
        // 만약 존재하지 않는다면 그 다음 상위 스코프 공간에서 찾습니다.
        // 그렇게 변수를 찾을 때 까지 계속 상위 스코프 공간을 접근하다가
        // 최종 스코프인 전역 스코프 공간에서도 찾지 못하면 에러가 발생합니다.
        console.log(x);
    }
}

foo2();

// x 는 함수 스코프 안에만 존재하기 때문에 함수 밖에서는 접근이 불가능합니다.
// console.log(x);