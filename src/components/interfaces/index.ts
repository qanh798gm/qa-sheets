export interface Cell {
  id: string;
  value: string;
  formula: string;
  isSelected?: boolean;
  isEditing?: boolean;
}
