import fsPromises from 'fs/promises';
import path from 'path';

interface DataRow {
  id: number;
  barcode: string;
  product_brand: string;
  product_name: string;
  product_quantity: number;
  price: number;
}

export async function getLocalData(): Promise<DataRow[]> {
  const filePath = path.join(process.cwd(), 'src/app/api/data.json');
  const jsonData = await fsPromises.readFile(filePath, 'utf-8');
  const objectData: DataRow[] = JSON.parse(jsonData);
  return objectData;
}
