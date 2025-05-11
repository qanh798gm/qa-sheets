import { Input } from "@/components/ui/input";
import { useCell } from "@/store/CellStore";
import { useCallback } from "react";

interface CellProps {
  cellId: string;
}

export function Cell({ cellId }: Readonly<CellProps>) {
  const value = useCell((state) => state.values[cellId] || "");
  const setCellId = useCell((state) => state.setCellId);
  const setCellValue = useCell((state) => state.setCellValue);

  const onClick = useCallback(() => {
    setCellId(cellId);
  }, [cellId, setCellId]);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCellValue(cellId, e.target.value);
    },
    [cellId, setCellValue]
  );

  return (
    <Input
      className='w-30'
      onClick={onClick}
      value={value}
      onChange={onChange}
    />
  );
}
