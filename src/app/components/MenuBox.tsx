import { Box, Button, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SettingsIcon from '@mui/icons-material/Settings';
import EditNoteIcon from '@mui/icons-material/EditNote';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import MenuBookIcon from '@mui/icons-material/MenuBook';

export default function MenuBox() {
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        borderRadius: '12px',
        padding: '5px',
      }}
    >
      <Typography
        variant='h1'
        sx={{
          fontSize: '20px',
          padding: '10px',
          color: '#fff',
        }}
      >
        <span
          style={{
            backgroundColor: '#287eff',
            padding: '0 5px',
            borderRadius: '5px',
          }}
        >
          ФИН
        </span>
        Контроль
      </Typography>
      <Box
        sx={{
          padding: '5px',
          display: 'flex',
          flexDirection: 'column',
          gap: '5px',
        }}
      >
        <Button
          variant='contained'
          startIcon={<SettingsIcon />}
          sx={{
            width: '100%',
            bgcolor: 'primary.dark',
            display: 'flex',
            justifyContent: 'flex-start',
            textTransform: 'none',
            borderRadius: '8px',
          }}
        >
          Настройки
          <KeyboardArrowDownIcon
            sx={{
              marginLeft: 'auto',
            }}
          ></KeyboardArrowDownIcon>
        </Button>
        <Button
          variant='contained'
          startIcon={<EditNoteIcon />}
          sx={{
            width: '100%',
            bgcolor: 'primary.dark',
            display: 'flex',
            justifyContent: 'flex-start',
            textTransform: 'none',
            borderRadius: '8px',
          }}
        >
          Внесение данных
          <KeyboardArrowDownIcon
            sx={{
              marginLeft: 'auto',
            }}
          ></KeyboardArrowDownIcon>
        </Button>
        <Button
          variant='contained'
          startIcon={<FeaturedPlayListIcon />}
          sx={{
            width: '100%',
            bgcolor: 'primary.dark',
            display: 'flex',
            justifyContent: 'flex-start',
            textTransform: 'none',
            borderRadius: '8px',
          }}
        >
          Отчеты
          <KeyboardArrowDownIcon
            sx={{
              marginLeft: 'auto',
            }}
          ></KeyboardArrowDownIcon>
        </Button>
        <Button
          variant='contained'
          startIcon={<MenuBookIcon />}
          sx={{
            width: '100%',
            bgcolor: 'primary.dark',
            display: 'flex',
            justifyContent: 'flex-start',
            textTransform: 'none',
            borderRadius: '8px',
          }}
        >
          База знаний
          <KeyboardArrowDownIcon
            sx={{
              marginLeft: 'auto',
            }}
          ></KeyboardArrowDownIcon>
        </Button>
      </Box>
    </Box>
  );
}
