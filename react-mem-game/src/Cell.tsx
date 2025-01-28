import { FlipCell } from "./App.tsx";

type CellProps = {id: string, color?: string, flipCell: FlipCell};

export default function Cell({id, color = "", flipCell}: CellProps){

  const cellColor = {
    backgroundColor: color
  }

  return(
    <div id={id} className="cell" style={cellColor} onClick={flipCell}></div>
  )

};