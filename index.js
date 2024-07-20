$(function() {
  $('.asign').click(function(event) {
    // 기본 동작 방지
    event.preventDefault();

    const inputTitle = $('.text-data').val();
    if (inputTitle.trim() == '') {
      alert('값을 입력해 주세요.')
    } else {
      // 새로운 항목을 생성
      const newItem = `
        <li class="todo-list-item">
          <span class="todo-list-item-title">${inputTitle}</span>
          <button class="alter-button">수정</button>
          <button class="del-button">삭제</button>
        </li>`
      
      // 항목을 추가
      $('.todo-list').append(newItem);
      alert('등록완료!');
      $('.text-data').val('');
    }

   $(function(){
     $('.alter-button').click(function(e){
      e.preventDefault();
        const todoItem = $(this).closest('.todo-list-item');
        const titleSpan = todoItem.find('.todo-list-item-title')
        // 사용자로부터 새로운 제목 입력받기
        const currentTitle= titleSpan.text();
        const alterText = prompt('ToDoList 수정', currentTitle);
    
        // 사용자가 값을 입력한 경우에만 제목 변경
        if (alterText !== null && alterText.trim() !== '') {
          titleSpan.text(alterText.trim()); 
          alert('수정완료!');
        }
      })
    })

    $(function(){
      $('.del-button').click(function(e){
        e.preventDefault();
        if(confirm('삭제하시겠습니까?')){
          const todoItem = $(this).closest('.todo-list-item');
          todoItem.remove();
          alert('삭제완료!');
        }else{
          alert('취소!')
        }
      })
    })
  });
});