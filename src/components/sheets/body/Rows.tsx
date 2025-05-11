import { Input } from "@/components/ui/input";
import { Row } from "./Row";
import { getColumnLabel } from "@/utils/CellUtils";

interface RowsProps {
  rowNumber: number;
}

export function Rows({ rowNumber }: Readonly<RowsProps>) {
  const heading = Array.from({ length: 30 }, (_, index) => (
    <Input
      key={index}
      className='w-50 text-center'
      readOnly
      placeholder={getColumnLabel(index)}
    />
  ));
  const rows = Array.from({ length: rowNumber }, (_, index) => (
    <Row key={index} cellNumber={30} rowId={index} />
  ));
  return (
    <div className='mx-2'>
      <div className='flex flex-row'>{heading}</div>

      {rows}
    </div>
  );
}
