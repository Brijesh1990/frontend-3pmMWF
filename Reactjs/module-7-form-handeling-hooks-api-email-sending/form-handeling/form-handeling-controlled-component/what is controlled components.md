# Controlled Components in React

## What is a Controlled Component?

A controlled component is a form element (input, textarea, select, etc.) whose value is controlled by React state. The source of truth for the element's value is the component's state, and user interactions update state via event handlers.

Key points:
- React state holds form values.
- Form elements receive values via props and report changes via callbacks.
- Enables validation, conditional UI, and instant feedback.

## Simple Text Input (Functional Component)

```jsx
import React, { useState } from 'react';
function TextInputExample() {
	const [name, setName] = useState('');

	return (
		<div>
			<label>
				Name:
				<input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</label>
			<p>Current value: {name}</p>
		</div>
	);
}

export default TextInputExample;
```

## Textarea

```jsx
function TextareaExample() {
	const [bio, setBio] = useState('');

	return (
		<textarea value={bio} onChange={(e) => setBio(e.target.value)} />
	);
}
```

## Select (Dropdown)

```jsx
function SelectExample() {
	const [fruit, setFruit] = useState('apple');

	return (
		<select value={fruit} onChange={(e) => setFruit(e.target.value)}>
			<option value="apple">Apple</option>
			<option value="banana">Banana</option>
			<option value="orange">Orange</option>
		</select>
	);
}
```

## Checkbox

Single checkbox:

```jsx
function CheckboxExample() {
	const [checked, setChecked] = useState(false);

	return (
		<label>
			Accept terms
			<input
				type="checkbox"
				checked={checked}
				onChange={(e) => setChecked(e.target.checked)}
			/>
		</label>
	);
}
```

Multiple checkbox values (as array):

```jsx
function MultiCheckboxExample() {
	const [selected, setSelected] = useState([]);

	const toggle = (value) => {
		setSelected((prev) =>
			prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
		);
	};

	return (
		<div>
			{['red', 'green', 'blue'].map((color) => (
				<label key={color}>
					<input
						type="checkbox"
						checked={selected.includes(color)}
						onChange={() => toggle(color)}
					/>
					{color}
				</label>
			))}
		</div>
	);
}
```

## Radio Buttons

```jsx
function RadioExample() {
	const [choice, setChoice] = useState('a');

	return (
		<div>
			<label>
				<input
					type="radio"
					name="choice"
					value="a"
					checked={choice === 'a'}
					onChange={(e) => setChoice(e.target.value)}
				/>
				A
			</label>
			<label>
				<input
					type="radio"
					name="choice"
					value="b"
					checked={choice === 'b'}
					onChange={(e) => setChoice(e.target.value)}
				/>
				B
			</label>
		</div>
	);
}
```

## Multiple Inputs (Single State Object)

```jsx
function MultiInputForm() {
	const [form, setForm] = useState({ firstName: '', lastName: '', email: '' });

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<form onSubmit={(e) => { e.preventDefault(); console.log(form); }}>
			<input name="firstName" value={form.firstName} onChange={handleChange} />
			<input name="lastName" value={form.lastName} onChange={handleChange} />
			<input name="email" value={form.email} onChange={handleChange} />
			<button type="submit">Submit</button>
		</form>
	);
}
```

## Form Submission and Basic Validation

```jsx
function ValidationForm() {
	const [email, setEmail] = useState('');
	const [error, setError] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
			setError('Please enter a valid email');
			return;
		}
		setError('');
		// proceed with submit
	};

	return (
		<form onSubmit={handleSubmit}>
			<input value={email} onChange={(e) => setEmail(e.target.value)} />
			{error && <div style={{ color: 'red' }}>{error}</div>}
			<button type="submit">Send</button>
		</form>
	);
}
```

## Class Component Example

```jsx
import React from 'react';

class ClassForm extends React.Component {
	state = { name: '' };

	handleChange = (e) => {
		this.setState({ name: e.target.value });
	};

	render() {
		return (
			<div>
				<input type="text" value={this.state.name} onChange={this.handleChange} />
				<p>{this.state.name}</p>
			</div>
		);
	}
}

export default ClassForm;
```

## Controlled vs Uncontrolled

- Controlled: React state is the single source of truth (recommended for most cases).
- Uncontrolled: Use refs to get values from DOM (useful for simple forms or file inputs).

Example of an uncontrolled input:

```jsx
function Uncontrolled() {
	const inputRef = React.useRef();
	const handle = () => console.log(inputRef.current.value);
	return <input ref={inputRef} />;
}
```

## Pros and Cons

- Pros:
	- Easier validation
	- Single source of truth
	- Predictable state-driven UI
- Cons:
	- More boilerplate for many simple inputs
	- Potential performance overhead with very large forms (can be mitigated)

## Summary

Controlled components let you keep form state inside React, enabling validation, conditional rendering, and better integration with app state. Use functional components and `useState` (or `useReducer` for complex forms) for most modern React codebases.

---

If you want, I can add a small runnable demo project or a Codesandbox link with these examples.

