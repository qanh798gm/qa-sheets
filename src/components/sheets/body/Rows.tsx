import { Row } from "./Row";

interface RowsProps {
  rowNumber: number;
}

export function Rows({ rowNumber }: Readonly<RowsProps>) {
  const rows = Array.from({ length: rowNumber }, (_, index) => (
    <Row key={index} cellNumber={16} />
  ));
  return <div className='mx-2'>{rows}</div>;
}
