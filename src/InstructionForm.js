import { useState } from 'react';

export default function InstructionForm({ instructions, setInstructions }){

  const [inputInForm, setInputInForm] = useState(``);

  function handleSubmit(e){
    e.preventDefault();

    setInstructions([...instructions, inputInForm]);

    setInputInForm('');
  }

  function handleInputChange(e){
    setInputInForm(e.target.value);
  }

  return <>
    <form onSubmit={handleSubmit}>
      Extra instructions?&nbsp;
      <input required value={inputInForm} onChange={handleInputChange} />
    </form>
  </>;
}