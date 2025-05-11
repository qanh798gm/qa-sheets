import { Input } from "@/components/ui/input";
import { useCell } from "@/store/CellStore";
import { useCallback } from "react";

export function FormulaBar() {
  const cellId = useCell((state) => state.id);
  const cellValue = useCell((state) =>
    state.id ? state.values[state.id] || "" : ""
  );
  const setCellValue = useCell((state) => state.setCellValue);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (cellId) {
        setCellValue(cellId, e.target.value); // Update value for selected cellId
      }
    },
    [cellId, setCellValue]
  );

  return (
    <div className='flex flex-row items-center gap-2 my-2 mx-2 rounded-md'>
      <Input className='w-50' readOnly value={cellId} />
      <Input className='w-full' value={cellValue} onChange={onChange} />
    </div>
  );
}
