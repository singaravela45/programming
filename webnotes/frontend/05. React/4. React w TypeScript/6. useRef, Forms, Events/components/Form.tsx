import { useRef, useState } from 'react';
const Form = () => {
  interface user {
    name: string;
    age: number;
    gender: string;
  }
  const name = useRef<HTMLInputElement>(null!);
  const age = useRef<HTMLInputElement>(null!);
  const gender = useRef<HTMLInputElement>(null!);
  const [form, setform] = useState<user>({
    name: '',
    age: 0,
    gender: '',
  });
  const submithandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setform({
      name: name.current.value,
      age: Number(age.current.value),
      gender: gender.current.value,
    });
  };

  return (
    <>
      <form onSubmit={submithandler}>
        <input ref={name} type="string" placeholder="enter your name"></input>
        <input ref={age} type="number" placeholder="enter your age"></input>
        <input ref={gender} type="string" placeholder="enter your gender"></input>
        <button type="submit">submit</button>
      </form>
      <h1>your name : {form.name}</h1>
      <h1>your age : {form.age}</h1>
      <h1>your gender : {form.gender}</h1>
    </>
  );
};
export default Form;
