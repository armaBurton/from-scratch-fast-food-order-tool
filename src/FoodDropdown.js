import RenderDropdownItem from './RenderDropdownItem';

export default function FoodDropdown(props){

  return <>
    Select a Food Item:&nbsp;
    <select onChange={(e) => {props.setFoodId(e.target.value); }}>
      {
        props.foodArr.map((item, i) => <RenderDropdownItem key={`${item}${i}`} item={item} i={i}/>)
      }
    </select>
  </>;
}