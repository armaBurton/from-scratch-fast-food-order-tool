export default function RenderDropdownItem(props){

  return <option value={`${props.i + 1}`}>{props.item}</option>;
}