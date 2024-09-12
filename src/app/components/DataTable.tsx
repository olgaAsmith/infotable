'use client';
import * as React from 'react';
import {
  DataGrid,
  GridColDef,
  GridRowModel,
  GridFooterContainer,
} from '@mui/x-data-grid';
import { useState, useMemo, useCallback } from 'react';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import GetAppIcon from '@mui/icons-material/GetApp';
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import InputIcon from '@mui/icons-material/Input';
import {
  Box,
  Button,
  Divider,
  FormControl,
  OutlinedInput,
  Typography,
} from '@mui/material';
import FileSaver from 'file-saver';

interface DataRow {
  id: number;
  barcode: string;
  product_brand: string;
  product_name: string;
  product_quantity: number;
  price: number;
}

interface DataTableProps {
  initialData: DataRow[];
}

const DataTable: React.FC<DataTableProps> = ({ initialData }) => {
  const [data, setData] = useState<DataRow[]>([]);
  const [barcode, setBarcode] = useState<string>('');
  const [brand, setBrand] = useState<string>('');
  const [price, setPrice] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    switch (id) {
      case 'barcode':
        setBarcode(value);
        break;
      case 'brand':
        setBrand(value);
        break;
      case 'price':
        setPrice(value);
        break;
      default:
        break;
    }
  };

  const filterData = () => {
    const barcodeNumber = barcode ? Number(barcode) : null;
    const filteredData = initialData.filter((row) => {
      let matches = true;
      if (barcodeNumber !== null && !isNaN(barcodeNumber)) {
        matches = matches && Number(row.barcode) === barcodeNumber;
      }
      if (brand) {
        matches =
          matches &&
          row.product_brand.toLowerCase().includes(brand.toLowerCase());
      }
      if (price) {
        matches = matches && row.price.toString().includes(price);
      }
      return matches;
    });
    setData(filteredData);
  };

  const totalQuantity = useMemo(
    () =>
      data.reduce((acc, row) => acc + (Number(row.product_quantity) || 0), 0),
    [data]
  );

  const totalPrice = useMemo(
    () => 
      data.reduce((acc, row) => acc + (Number(row.price) || 0), 0),
    [data]
  );

  const handleProcessRowUpdate = useCallback(
    (newRow: GridRowModel, oldRow: GridRowModel) => {
      const updatedRow: DataRow = {
        id: newRow.id,
        barcode: newRow.barcode || '',
        product_brand: newRow.product_brand || '',
        product_name: newRow.product_name || '',
        product_quantity: Number(newRow.product_quantity) || 0,
        price: Number(newRow.price) || 0,
      };

      setData((prevData) =>
        prevData.map((row) => (row.id === oldRow.id ? updatedRow : row))
      );
      return updatedRow;
    },
    []
  );

  const columns: GridColDef[] = [
    {
      field: 'barcode',
      headerName: 'Barcode',
      width: 180,
      editable: true,
      resizable: false,
    },
    {
      field: 'product_brand',
      headerName: 'Brand',
      width: 200,
      editable: true,
      resizable: false,
    },
    {
      field: 'product_name',
      headerName: 'Name',
      width: 200,
      editable: true,
      resizable: false,
    },
    {
      field: 'product_quantity',
      headerName: 'Quantity',
      width: 150,
      editable: true,
      type: 'number',
      resizable: false,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 150,
      editable: true,
      type: 'number',
      resizable: false,
    },
  ];

  const CustomFooter = () => (
    <GridFooterContainer>
      <Box
        sx={{
          p: 1,
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          backgroundColor: '#e9e9e9',
        }}
      >
        <Box>Итого:</Box>
        <Box
          sx={{
            display: 'flex',
          }}
        >
          <Box
            sx={{
              width: '150px',
              textAlign: 'right',
            }}
          >
            {totalQuantity}
          </Box>
          <Box
            sx={{
              width: '150px',
              textAlign: 'right',
            }}
          >
            {totalPrice}
          </Box>
        </Box>
      </Box>
    </GridFooterContainer>
  );

  const handleExportJson = () => {
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    FileSaver.saveAs(blob, 'export.json');
  };

  const handleExportCsv = () => {
    const csvRows = [
      ['ID', 'Barcode', 'Brand', 'Name', 'Quantity', 'Price'],
      ...data.map((row) => [
        row.id,
        row.barcode,
        row.product_brand,
        row.product_name,
        row.product_quantity,
        row.price,
      ]),
    ]
      .map((e) => e.join(','))
      .join('\n');

    const blob = new Blob([csvRows], { type: 'text/csv;charset=utf-8;' });
    FileSaver.saveAs(blob, 'export.csv');
  };

  const handleClear = () => {
    setData([]);
  };

  const handleLoadData = () => {
    setData(initialData);
  };

  return (
    <Box>
      <Box
        sx={{
          padding: '20px',
          display: 'flex',
          gap: '20px',
          alignItems: 'center',
        }}
      >
        <Typography
          variant='h2'
          sx={{
            fontSize: '32px',
          }}
        >
          Остатки сформированы на 01.04.2023
        </Typography>
        <Button
          variant='contained'
          startIcon={<MenuBookIcon />}
          sx={{
            bgcolor: 'primary',
            textTransform: 'none',
            borderRadius: '20px',
            color: '#fff',
          }}
        >
          Инструкции
        </Button>
      </Box>
      <Box
        sx={{
          gap: '10px',
        }}
      >
        <form noValidate autoComplete='off'>
          <FormControl>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: '#fff',
                borderRadius: '12px',
                padding: '10px',
                height: '40px',
                width: '200px',
                marginRight: '15px',
              }}
            >
              <label htmlFor='barcode'>Баркод</label>
              <OutlinedInput
                id='barcode'
                value={barcode}
                onChange={handleInputChange}
                sx={{
                  backgroundColor: '#e3e3e3',
                  borderRadius: '16px',
                  padding: '10px',
                  border: 'none',
                  outline: 'none',
                  height: '100%',
                }}
              />
            </Box>
          </FormControl>
          <FormControl>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: '#fff',
                borderRadius: '12px',
                padding: '10px',
                height: '40px',
                width: '200px',
                marginRight: '15px',
              }}
            >
              <label htmlFor='brand'>Бренд</label>
              <OutlinedInput
                id='brand'
                value={brand}
                onChange={handleInputChange}
                sx={{
                  backgroundColor: '#e3e3e3',
                  borderRadius: '16px',
                  padding: '10px',
                  border: 'none',
                  outline: 'none',
                  height: '100%',
                }}
              />
            </Box>
          </FormControl>
          <FormControl>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: '#fff',
                borderRadius: '12px',
                padding: '10px',
                height: '40px',
                width: '200px',
                marginRight: '15px',
              }}
            >
              <label htmlFor='price'>Прайс</label>
              <OutlinedInput
                id='price'
                value={price}
                onChange={handleInputChange}
                sx={{
                  backgroundColor: '#e3e3e3',
                  borderRadius: '16px',
                  padding: '10px',
                  border: 'none',
                  outline: 'none',
                  height: '100%',
                }}
              />
            </Box>
          </FormControl>
        </form>
        <Box
          sx={{
            margin: '20px 0',
          }}
        >
          <Button
            variant='contained'
            startIcon={<MenuBookIcon />}
            sx={{
              bgcolor: 'primary.light',
              textTransform: 'none',
              borderRadius: '20px',
              color: '#fff',
              marginRight: '10px',
            }}
            onClick={filterData}
          >
            Сформировать
          </Button>

          <Button
            variant='contained'
            startIcon={<GetAppIcon />}
            sx={{
              bgcolor: 'primary',
              textTransform: 'none',
              borderRadius: '20px',
              color: '#fff',
              marginRight: '10px',
            }}
            onClick={handleExportCsv}
          >
            Экспорт CSV
          </Button>
          <Button
            variant='contained'
            startIcon={<GetAppIcon />}
            sx={{
              bgcolor: 'primary',
              textTransform: 'none',
              borderRadius: '20px',
              color: '#fff',
            }}
            onClick={handleExportJson}
          >
            Экспорт JSON
          </Button>
        </Box>
        <Box
          sx={{
            display: 'flex',
            borderTop: '1px solid #c1bebe',
            borderBottom: '1px solid #c1bebe',
          }}
        >
          <Button
            variant='text'
            startIcon={<InputIcon />}
            sx={{
              textTransform: 'none',
            }}
            onClick={handleLoadData}
          >
            Загрузить данные из csv
          </Button>
          <Divider
            orientation='vertical'
            variant='middle'
            flexItem
            sx={{
              marginLeft: 'auto',
            }}
          />
          <Button
            variant='text'
            sx={{
              textTransform: 'none',
              marginLeft: '40px',
            }}
            onClick={handleClear}
          >
            Очистить
            <ClearIcon />
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: '#fff',
          marginTop: '20px',
          overflowY: 'scroll',
          borderRadius: '12px',
        }}
      >
        <Box sx={{ width: '100%' }}>
          <Box sx={{ height: 350, width: '100%' }}>
            <DataGrid
              rows={data}
              columns={columns}
              editMode='row'
              hideFooterPagination
              hideFooterSelectedRowCount
              disableColumnMenu
              autoHeight
              processRowUpdate={handleProcessRowUpdate}
              getRowClassName={(params) =>
                params.indexRelativeToCurrentPage % 2 === 0
                  ? 'even-row'
                  : 'odd-row'
              }
              slots={{
                footer: CustomFooter,
              }}
              slotProps={{
                footer: {},
              }}
              sx={{
                '& .even-row': {
                  backgroundColor: '#eff1f2',
                },
                '& .odd-row': {
                  backgroundColor: '#fafbfb',
                },
                '.MuiDataGrid-cell': {
                  border: '1px solid white',
                },
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DataTable;
