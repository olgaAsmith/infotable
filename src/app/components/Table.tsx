import { getLocalData } from '../api/products';
import DataTable from './DataTable';

export default async function Table() {
  const data = await getLocalData();
  return <DataTable initialData={data}></DataTable>;
}
