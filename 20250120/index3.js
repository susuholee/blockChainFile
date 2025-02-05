let target = null;

document.ondragstart = function(e) {
    // classList : 해당 요소의 클래스 들이 배열로 들어있다
    // contains() : 해당 내용이 배열안에 포함되어 있는지 확인, 반환값은 boolean
    // 전체 문서 안에서 이벤트가 발생한 요소가 e.target
    // item이라는 클래스를 가지고 있는 요소를 드래그 했을 때
    if(e.target.classList.contains("item")){
        target = e.target;
        // 드래그 하는 요소가 item의 클래스가 있으면
        // target 변수에 할당한다.
        target.style.backgroundColor = "red";
    } 
}

// 드래그 하면서 태그 위로 마우스가 올라갔을때
document.ondragenter = function(e) {
    if(e.target.classList.contains('box') && (target !== null)){
        e.target.style.backgroundColor = "yellow";
    }
    
}

// 드래그하다가 마우스가 요소 밖으로 나갔을 때
document.ondragleave = function(e){
    if(e.target.classList.contains('box') && target !== null){
        e.target.style.backgroundColor = 'initial';
    }
}

// 드래그 했다가 떨어트리는 요소의 가능 여부를 설정
// ondrop : 요소를 떨어트리는 이벤트

document.ondragover = function(e){
    if(e.target.classList.contains("box") && (target !== null)){
        // 브라우저의 기본 기능으로 드래그한 요소는 해당 위치가 아니라 돌아가는 속성을 가지고 있다.
        // preventDefault() : 이벤트의 속성에서 브라우저의 기본 속성 제거하고 사용하겠다.
        e.preventDefault();
    }
}

// 드래그에서 해당 위치에 드래그를 종료하면 요소를 드롭시킨다.
// ondrop 이벤트는 ondragover를 사용해야 활성화
document.ondrop = function(e){
    if(e.target.classList.contains('box') && (target !== null)) {
        e.target.style.backgroundColor = "initial";
        e.target.append(target);
    }
}

// 드래그가 끝났을 때 
document.ondragend = function(e){
   target = null;
   if(e.target.classList.contains('item')){
    e.target.style.backgroundColor = "blueviolet";
   }
}