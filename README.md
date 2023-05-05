# Todo React Application

I have created a Todo application in React. A user can input todos, and mark their todo tasks as complete.

Due to the time restrictions, I considered the project requirements and laid out some clear success metrics. I noted which requirements were essential in order to deem the project a success, and which requirements would fall in to the 'nice to have' category within the timeframe. The essential user behaviour I wanted to achieve was:

- User can input a todo task and submit
- User can view their todo tasks and the data should persist after a page refresh
- User can mark their tasks as complete/incomplete

To run the application locally, please run the following commands once you have cloned the repository:
- npm install
- npm run dev

If given more time, I would implement the following:

### Unit tests for React components

In a production ready application, I would ensure that any core components or features include test coverage at the earliest opportunity in the development process. This instils confidence in the team that the code is working as intended and that any changes or refactors do not introduce bugs.

I created the `Form` and `Todo`components in a way that I could test the individual functionality of each component as a unit.

I would use Jest and React Testing Library for the test framework. Below is an example of a test I would implement:

```
test('Todo component renders todo item text',  ()  => {

	// Arrange
	const todoProps =  {
		id:  'todo-123',
		name:  'Cooking',
		completed:  false,
		toggleTodoCompleted:  ()  => ({}),
	}

	// Act
	const screen =  render(
		<Todo
			id={todoProps.id}
			name={todoProps.name}
			completed={todoProps.completed}
			toggleTodoCompleted={todoProps.toggleTodoCompleted}
		/>
	);

	const todoText = screen.getByLabelText('Cooking');

	// Assert
	expect(todoText).toBeTruthy();
});
```

Above is a simple example of checking that the correct todo text renders on the screen. The component is written in a way that I can also test the functionality of the toggle button. The same applies to the `Form`component, I can ensure that the input elements are working as expected.

Once unit tests are in place, I would also consider creating some end-to-end tests to ensure the full user experience is working as intended

### CSS Styling

Although this is mandatory for any user facing application, I prioritised the functionality over the look and feel in the time that I had. I added some basic styling so that the app can be used easily. Given more time, I would look to create a more consistent, modern look and feel to the UI. I would also consider the following options for styling:

- Sass. This can make the code more maintainable and reusable for future projects as I can take advantage of variables and mixings, and the styles can be separated into components
- Styled components. This solution also promotes code re-use, and I can create styles within the JavaScript files. If components are reused, this ensures that styling will remain consistent.

### Further functionality

I would like to build on the current functionality by adding the ability to edit and remove posts. As the data persists via local storage, there is no way to correct any mistakes made by the user. I built the `useLocalStorage` hook so that local state and local storage can be updated easily. I can simply add another method in the component to delete or update todo items.