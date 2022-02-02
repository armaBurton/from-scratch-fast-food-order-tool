export default function OrderImages(props){
  return <div className='order-images-div'>
    <div className='food-item'>
      <img className='order-images' src={`/food-${props.foodId}.png`} />
      <h3>{props.foodArr[`${props.foodId - 1}`]}</h3>
    </div>
    <div className='food-item'>
      <img className='order-images' src={`/drink-${props.drinkId}.png`} />
      <h3>{props.drinkArr[`${props.drinkId - 1}`]}</h3>
    </div>
    <div className='food-item'>
      <img className='order-images' src={`/side-${props.sideId}.png`} />
      <h3>{props.sideArr[`${props.sideId - 1}`]}</h3>
    </div>
  </div>;
}