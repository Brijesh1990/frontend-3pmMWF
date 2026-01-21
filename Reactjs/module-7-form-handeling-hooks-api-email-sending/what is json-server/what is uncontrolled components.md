
# What are Uncontrolled Components in React

## Definition

An uncontrolled component is a form input element that maintains its own internal state in the DOM instead of being driven by React state. You read or write its value using a ref (for example, `useRef()` or `createRef()`) or by reading the form on submit.

Key points:

- Use `defaultValue` / `defaultChecked` to set initial values.
- Do NOT provide the `value` or `checked` prop (that makes it controlled).
- Read the current value from the DOM via a ref or `FormData` on submit.

## Controlled vs Uncontrolled (short)

- Controlled: React state is the single source of truth; inputs use `value` and `onChange`.

- Uncontrolled: DOM holds the value; React reads it when needed via refs or form submission.

## When to use uncontrolled components

- Simple forms where you only need values at submit time.

- File inputs (these must be uncontrolled).

- Integrating third-party DOM libraries (jQuery plugins, non-React widgets).
- Minimizing re-renders for very large or complex forms.

## Examples

All examples assume functional components and React hooks. Import `useRef` and `useEffect` when needed.

1) Basic text input (uncontrolled)

```jsx
import { useRef } from 'react';

function TextInputUncontrolled() {
	const inputRef = useRef(null);

	function handleSubmit(e) {
		e.preventDefault();
		alert(inputRef.current.value);
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" defaultValue="hello" ref={inputRef} />
			<button type="submit">Submit</button>
		</form>
	);
}
```

2) Uncontrolled textarea

```jsx
import { useRef } from 'react';

function TextareaUncontrolled() {
	const ref = useRef();
	return <textarea defaultValue="notes..." ref={ref} />;
}
```

3) Uncontrolled select

```jsx
import { useRef } from 'react';

function SelectUncontrolled() {
	const ref = useRef();
	return (
		<select defaultValue="2" ref={ref}>
			<option value="1">One</option>
			<option value="2">Two</option>
		</select>
	);
}
```

4) Checkbox / radio (uncontrolled)

```jsx
function CheckboxRadioUncontrolled() {
	const cbRef = useRef();
	const rRef = useRef();
	return (
		<div>
			<input type="checkbox" defaultChecked={true} ref={cbRef} />
			<input type="radio" name="r" defaultChecked ref={rRef} />
		</div>
	);
}
```

5) File input (common uncontrolled example)

```jsx
import { useRef } from 'react';

function FileUpload() {
	const fileRef = useRef();

	function upload() {
		const files = fileRef.current.files;
		// handle files
		console.log(files);
	}

	return <input type="file" ref={fileRef} />;
}
```

6) Multiple inputs via `FormData` (submit-time read)

```jsx
import { useRef } from 'react';

function MultiUncontrolledForm() {
	const formRef = useRef();

	function handleSubmit(e) {
		e.preventDefault();
		const fd = new FormData(formRef.current);
		const data = Object.fromEntries(fd.entries());
		console.log(data);
	}

	return (
		<form ref={formRef} onSubmit={handleSubmit}>
			<input name="first" defaultValue="A" />
			<input name="last" defaultValue="B" />
			<button type="submit">Send</button>
		</form>
	);
}
```

7) contentEditable (reading DOM text)

```jsx
import { useRef } from 'react';

function Editable() {
	const ref = useRef();
	function save() {
		console.log(ref.current.innerText);
	}
	return (
		<div>
			<div contentEditable ref={ref}>Edit me</div>
			<button onClick={save}>Save</button>
		</div>
	);
}
```

8) Integrate third-party DOM widget (datepicker example)

```jsx
import { useRef, useEffect } from 'react';

function ThirdPartyDatepicker() {
	const ref = useRef();

	useEffect(() => {
		// Example: initialize third-party widget on ref.current
		// widget.init(ref.current);
		return () => {
			// widget.destroy(ref.current);
		};
	}, []);

	return <input ref={ref} />;
}
```

## Tips and gotchas

- Use `defaultValue`/`defaultChecked` for initial values. Mixing `value` with refs leads to confusion.
- To programmatically change an uncontrolled input, set the DOM property (e.g. `inputRef.current.value = 'new'`).
- Validation: uncontrolled inputs are easiest to validate at submit time; for live validation prefer controlled inputs.
- Accessibility and form libraries: some libraries expect controlled inputs; check compatibility.

## Pros and Cons

- Pros:
	- Less boilerplate for simple forms.
	- Fewer re-renders (good for large forms).
	- Natural fit for file inputs and third-party widgets.

- Cons:
	- Harder to implement live validation and formatting.
	- UI and state may get out of sync if you don't manage DOM updates.
	- Slightly more imperative code (reading/writing DOM directly).

---

If you want, I can add a small runnable demo page to the project showing uncontrolled vs controlled inputs.
