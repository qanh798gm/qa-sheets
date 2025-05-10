import { Cell } from "./Cell";

interface RowProps {
  cellNumber: number;
}

export function Row({ cellNumber }: Readonly<RowProps>) {
  const cells = Array.from({ length: cellNumber }, (_, index) => (
    <Cell key={index} />
  ));
  return <div className='flex flex-row'>{cells}</div>;
}
