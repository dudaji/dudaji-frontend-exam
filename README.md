# DUDAJI-FRONTEND-EXAM
- React 로 구성한 간단한 Todo list 웹 페이지입니다.
- [Todo REST API doc](https://www.notion.so/dudaji/TODO-App-API-Doc-a61f9d3ddd0f41649c0b1cf9a3b715f8) 문서 입니다.
  해당 문서를 참고하여 Todo app 을 완성해주세요. 
  - **!주의)** Base 주소는 constants.js 안의 `baseURL` 을 불러와 사용해주세요.
- 서술형 답안은 `answer.txt` 에 기입 해주세요.
- issue 마다 해결을 하고 git commit 메시지를 등록해주세요.

## Issues
1. node 버전을 18.0.0 으로 변경하고 변경한 과정을 작성해주세요.
2. lint 를 적용해주세요.
   필수 적용 항목
   - 문장 끝에 세미콜론 표시
   - 큰따옴표 사용하지 않음
   - 한 줄에 코드 길이 80자 이내
   - console 사용하지 않음
3. todo add 기능이 동작하도록 구현해주세요.
4. todo detail page 구현해주세요. (name, status, description 모두 볼 수 있는 페이지)
   - `react-router-dom` 을 사용해 페이지 이동이 되도록 구현해주세요.
5. todo detail page 에서 수정 제거 버튼을 추가하고, 기능이 동작되도록 구현해주세요.
6. todo list 페이지에 있는 모든 state 를 redux를 이용하여 상태 관리하도록 수정해주세요.
7. 적용한 redux 의 실행 순서를 서술하십시오. 실행 순서 확인을 어떻게 했는지도 작성해주세요.
8. todo list 페이지에서 todo item을 마우스로 우클릭했을때 지워지도록 구현해주세요.
9. todo list 문자 순으로 정렬하는 함수를 `utils.js` 파일에 생성하고, `TodoList.jsx` 파일에서 불러와 적용해주세요.
   (예시: [a, c, b] -> [a, b, c])
   - **!주의) `sort()` 사용금지**
   - 해당코드가 어떻게 돌아가는지 간략하게 서술해주시고, 해당 코드가 정상적으로 돌아갈 수 있는지 확인 할 수 있는 방법을 같이 공유해주세요.


## 제출 방법

1. git clone

```sh
git clone --depth=1 https://github.com/dudaji/dudaji-frontend-exam.git
```

2. 이슈를 해결해나가면서 변경한 내용을 commit 해주세요.  

```sh
git add --all
git clone -m "Add .gitignore"
```

3. 완료 후 git bundle 된 파일을 이메일로 보내주세요.  

```sh
git bundle create dudaji-frontend-exam.bundle --all
```

제출 이메일 주소: human-resource-aaaajwfsaoz6ir6ralwtoesrky@dudaji.slack.com
