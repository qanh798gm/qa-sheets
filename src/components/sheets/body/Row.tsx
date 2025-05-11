import { getColumnLabel } from "@/utils/CellUtils";
import { Cell } from "./Cell";

interface RowProps {
  cellNumber: number;
  rowId: number;
}

export function Row({ cellNumber, rowId }: Readonly<RowProps>) {
  const cells = Array.from({ length: cellNumber }, (_, index) => {
    const cellId = `${getColumnLabel(index)}${rowId}`;
    return <Cell key={index} cellId={cellId} />;
  });
  return <div className='flex flex-row'>{cells}</div>;
}
