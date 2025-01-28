type CellProps = {id: string, color?: string};

export default function Cell({id, color = ""}: CellProps){

  const cellColor = {
    backgroundColor: color
  }

  return(
    <div id={id} className="cell" style={cellColor}></div>
  )

};