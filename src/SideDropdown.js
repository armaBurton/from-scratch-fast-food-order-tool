import RenderDropdownItem from './RenderDropdownItem';

export default function SideDropdown(props){

  return <>
    Select a Side Item:&nbsp;
    <select onChange={(e) => {props.setSideId(e.target.value); }} >
      {
        props.sideArr.map((item, i) => <RenderDropdownItem key={`${item}${i}`} item={item} i={i} />)
      }
    </select>
  </>;
}