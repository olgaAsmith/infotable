import { Box, Button, IconButton, Link, Typography } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function Header() {
  return (
    <Box
      sx={{
        bgcolor: '#fff',
        borderRadius: '12px',
        padding: '5px 10px',
        display: 'flex',
      }}
    >
      <Box>
        <IconButton
          size='large'
          sx={{
            borderRadius: '12px',
          }}
        >
          <PersonOutlineIcon></PersonOutlineIcon>
          <Typography
            variant='h3'
            sx={{
              fontSize: '14px',
              marginLeft: '10px',
            }}
          >
            Иванов И.И.
          </Typography>
        </IconButton>
      </Box>
      <Button
        variant='contained'
        startIcon={<CalendarMonthIcon />}
        sx={{
          bgcolor: 'aliceblue',
          textTransform: 'none',
          borderRadius: '12px',
          color: 'primary.light',
          boxShadow: 'none',
        }}
      >
        Тариф до 15.04.2024
      </Button>
      <Box
        sx={{
          display: 'flex',
          gap: '10px',
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 'auto',
        }}
      >
        <Button
          variant='outlined'
          sx={{
            bgcolor: 'aliceblue',
            textTransform: 'none',
            borderRadius: '20px',
            color: 'primary.light',
            boxShadow: 'none',
            height: '35px',
          }}
        >
          Выйти
        </Button>
        <Button
          variant='contained'
          endIcon={<ArrowRightAltIcon />}
          sx={{
            bgcolor: '#ff8457',
            textTransform: 'none',
            borderRadius: '20px',
            color: '#fff',
            boxShadow: 'none',
            height: '35px',
          }}
        >
          О нас
        </Button>
      </Box>
    </Box>
  );
}
