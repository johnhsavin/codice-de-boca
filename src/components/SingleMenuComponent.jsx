export default function SingleMenuComponent(props){
  console.log(props)
  return (
    <>
    <h3>{props.title}</h3>
    <p>{props.description}</p>
    </>
  )
}