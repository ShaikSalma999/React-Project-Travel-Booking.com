
import { useRef, useState } from 'react';

export default function ContactPage() {
    const nameRef = useRef();

  const [form, setForm] = useState({
    name : "",
    email : ""
  });
  const [error, setError] = useState("");
  const submitHandler = e => {
    e.preventDefault();

    if (form.name.length < 3) {
      setError("Minimum 3 characters");
      nameRef.current.focus();
      return;
    }

    alert("Submitted Successfully");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        ref={nameRef}
        placeholder="Name"
        onChange={e =>
          setForm({ ...form, name: e.target.value })
        }
      />

      <input
        placeholder="Email"
        onChange={e =>
          setForm({ ...form, email: e.target.value })
        }
      />

      <p>{error}</p>

      <button>Submit</button>
    </form>
  )
}
