const addToDoList = (e) => {
  e.preventDefault();
  const inputedData = document.querySelector('.text-data').value;
  console.log(inputedData);
  // 입력값의 앞뒤 공백을 제거하고 빈 값인지 비교
  if (inputedData.trim() === '') {
    alert('내용을 입력해주세요');
  }
};

const delToDoList = (e) => {
  e.preventDefault();
  if (confirm('삭제하시겠습니까?')) {
    alert('삭제');
  } else {
    alert('취소');
  }
};

const initEventListeners = () => {
  document.querySelector('.asign').addEventListener('click', addToDoList);
  document.querySelector('.del-button').addEventListener('click', delToDoList);
};

initEventListeners();

{
  /* <li class="todo-list-item">
  <div class="todo-list-item-title">글 제목 들어가는 곳</div>
  <button class="alter-button">수정</button>
  <button class="del-button">삭제</button>
</li>; */
}

//addToDoList 에서 텍스트창에 입력한 내용을 저장 해놓는다.      V
//게시글 목록이 하나 만들어진다.
// 그 안에다가 입력한 내용을 붙여놓는다.
