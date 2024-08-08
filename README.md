# react-query-todo-list

react-query를 이용한 간단한 TODO List입니다.

## 사용 기술, 라이브러리, 프레임워크

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![PNPM](https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=for-the-badge&logo=pnpm&logoColor=f69220)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

## 구현 내용

react-query를 사용하여 API로부터 Todo List 데이터를 받아와 노출합니다.

- 리스트: TODO 리스트를 노출합니다.
- 리스트 아이템 상세: 아이템을 클릭하면 Todo item의 상세내용을 확인할 수 있습니다.
- 리스트 아이템 추가: Add Todo를 통해 새로운 Todo item을 만들수 있습니다.
- Loading: React Suspense를 이용하여 구현
- Error 핸들링: React ErrorBoundary를 이용하여

### 참고

아이템 추가 시, API에서 실제 데이터에 반영하고 있지는 않습니다. 아이템 추가 요청 성공 시, react-query의 invalidateQuery를 이용해 자동으로 리스트를 다시 받아오지만 새롭게 추가된 아이템은 노출되지는 않습니다.

[{JSON} Placeholder API](https://jsonplaceholder.typicode.com)

## 실행

`npm run start`을 통해 실행할 수 있습니다.
