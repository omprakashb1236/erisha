declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module 'react-json-to-excel' {
  export function exportToExcel(data: any[], fileName: string): void;
}