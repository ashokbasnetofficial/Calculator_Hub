export interface IFormField {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  options?: { value: string; label: string }[];
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
