import { FileSpreadsheet } from "lucide-react";

export function Header() {
  return (
    <header className='background p-4 flex flex-row items-center gap-2'>
      <FileSpreadsheet />
      <h1 className='text-2xl font-bold'>Untitled sheet</h1>
    </header>
  );
}
