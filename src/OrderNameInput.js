export default function OrderNameInput({ setOrderName }){

  function handleChange(e){
    setOrderName(e.target.value);
  }

  return <div className='order-input'>
    What is the name for the order?&nbsp;
    <input className='order-name-input' onChange={handleChange} />
  </div>;
}