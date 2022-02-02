import RenderDropdownItem from './RenderDropdownItem';

export default function DrinkDropdown(props){

  return <>
    Select a Drink Item:&nbsp;
    <select onChange={(e) => {props.setDrinkId(e.target.value);}}>
      {
        props.drinkArr.map((item, i) => <RenderDropdownItem key={`${item}${i}]`} item={item} i={i} />)
      }
    </select>
  </>;
}