# DUDAJI-FRONTEND-EXAM
- A simple Todo list web page built with React.
- [Todo REST API doc](https://www.notion.so/dudaji/TODO-App-API-Doc-a61f9d3ddd0f41649c0b1cf9a3b715f8) This is the Todo REST API doc document. 
Please refer to the documentation to complete the Todo app.
  - **!Caution)** Use the `baseURL` in constants.js for the base address.
- Please fill in the `answer.txt` for the narrative answer.
- Please resolve each issue and register a git commit message.

## Issues
1. Change the node version to 18.0.0 and write the process of the change.
2. Please apply lint.
   Required items to apply
   - Semicolons at the end of sentences
   - No double quotes
   - No more than 80 characters of code per line
   - Do not use console.log
3. Please implement the todo add feature to work.
4. Implement todo detail page (where you can see name, status, and description)
   - Please implement page navigation using `react-router-dom`.
5. Add a remove and edit button on the todo detail page and make it work.
6. Fix all the states on the todo list page to be managed using redux.
7. Describe the execution order of the redux you applied. Describe how you verified the order of execution.
8. Implement a way to clear a todo item when right-clicking on the todo list page.
9. Create a function in the `utils.js` file to sort the todo list by letter, and call it in the `TodoList.jsx`.
   (예시: [a, c, b] -> [a, b, c])
   - **!Caution) Do not use `sort()`**
   - Please share a brief description of how your code works and how we can verify that it works for you.


## How to submit

1. git clone

```sh
git clone --depth=1 https://github.com/dudaji/dudaji-frontend-exam.git
```

2. Please commit your changes after each issue resolution.

```sh
git add --all
git commit -m "Add .gitignore"
```

3. After completion, please email us the git bundled file. 

```sh
git bundle create dudaji-frontend-exam.bundle --all
```

Submission email address: human-resource-aaaajwfsaoz6ir6ralwtoesrky@dudaji.slack.com
