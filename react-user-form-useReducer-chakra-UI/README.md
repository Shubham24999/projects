## react-user-form-useReducer-chakra UI(Optimize for Wndow Screen)

# Deployed Link- https://64897572da9bcd6f846a4d06--celadon-travesseiro-c73f60.netlify.app/

```

// run locally
npm run start

```

## Description

- I have used useReducer hook to handle the form data
- I have completed the application which take the name, gender, role, maritalStatus from the user.
- User can enter the details in the respective input tags, with the correct type
- Name data has taken by "input" tag should, with a type 'text'
- Gender data has taken using a "select" tag, with options `Male`,`Female`, `Prefer Not to Say`.
- Role data has taken using a "select" tag, with options `FrontEnd Developer`, `BackEnd Developer`, and `FullStack Developer`.
- Marital Status data has taken using a single `checkbox` with a "Married" label if checked print as `married` else `unmarried`
- When there is no data ui will show `no users found`  with data-testid = `no-user-container`
- [![2023-06-14-1.png](https://i.postimg.cc/QtxsXnWV/2023-06-14-1.png)](https://postimg.cc/1gTbBBBZ)
- Once the details are filled and submitted (stored in the submittedData variable inside App.js), the form display's the entered details in tabular format.
[![2023-06-14-2.png](https://i.postimg.cc/Zn5rxZvZ/2023-06-14-2.png)](https://postimg.cc/ft1tMGvg)
- To reset the reducer state in the initial state, created a additional case in the reducer function,
  - Used reset as one of the types in reducer function to achieve the form reset functionality
- used Chakra UI components to make the UI

# Delete User Detail's Option:- 
- you can delete the user details.
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



