# react-user-form-useReducer-chakra UI

```
npm install --engine-strict

// run locally
npm run start

// test locally
npm run test

```

## Description

- I have used useReducer hook to handle the form data
- I have completed the application which take the name, gender, role, maritalStatus from the user.
- User should be able to enter the details in the respective input tags, with the correct type
- Name data should be taken by "input" tag should, with a type 'text'
- Gender data should be taken using a "select" tag, with options `Male`,`Female`, `Prefer Not to Say`.
- Role data should be taken using a "select" tag, with options `FrontEnd Developer`, `BackEnd Developer`, and `FullStack Developer`.
- Marital Status data should be taken using a single `checkbox` with a "Married" label if checked print as `married` else `unmarried`
- When there is no data print `no users found`  with data-testid = `no-user-container`
- [![2023-06-14-1.png](https://i.postimg.cc/QtxsXnWV/2023-06-14-1.png)](https://postimg.cc/1gTbBBBZ)
- Once the details are filled and submitted (stored in the submittedData variable inside App.js), the form should display the entered details in tabular format.
[![2023-06-14-2.png](https://i.postimg.cc/Zn5rxZvZ/2023-06-14-2.png)](https://postimg.cc/ft1tMGvg)
- To reset the reducer state in the initial state, create a additional case in the reducer function,
  - Use reset as one of the types in reducer function to achieve the form reset functionality
- use Chakra UI components to make the UI
## Boilerplate

- You are given these Components:
  - App
    - User should be store all the form data in a **single object** (the initial state of the useReducer hook)
    - You should use the `useReducer` hook to store all the form data, at a single place.
    - user should be able to update the user details, in the input boxes, select boxes or check boxes present inside the form.
  - UserRow
    - should accept the following as props
      - name
      - gender
      - role
      - maritalStatus



