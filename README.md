## Description

간단한 TODO List Demo입니다. react-query를 사용하여 API로부터 Todo List 데이터를 받아와 노출합니다. 아이템을 클릭하면 Todo item의 상세내용을 확인할 수 있습니다. Add Todo를 통해 새로운 Todo item을 만들수 있습니다.

## 참고

API에서 새로운 아이템을 만드는 것을 실제 데이터에 반영하고 있지는 않습니다. 따라서, 요청 성공 시, react-query의 invalidateQuery를 이용해 자동으로 리스트를 다시 받아오기는 하지만 새롭게 추가된 Todo는 노출되지는 않습니다.

[API 링크](https://jsonplaceholder.typicode.com)

## 실행

`npm start`을 통해 실행할 수 있습니다.
