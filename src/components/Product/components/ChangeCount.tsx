
type ChangeCountProps = {
    onAdd: () => void,
    onDecrement: () => void,
    count: number
}

const ChangeCount = ({onAdd, onDecrement, count} : ChangeCountProps) => {
  return (
    <div>{count > 0 &&
        <>
        <button  onClick={onAdd}>+</button>
        {count}
        <button onClick={onDecrement}>-</button>
        </>
          }</div>
  )
}

export default ChangeCount