import { Box, Divider, Link, List, ListItem, Typography } from '@mui/material';

export default function Contacts() {
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        borderRadius: '12px',
        padding: '5px',
        marginTop: '10px',
      }}
    >
      <Typography
        variant='h3'
        sx={{
          fontSize: '14px',
          padding: '10px',
          color: '#fff',
        }}
      >
        Техническая поддержка
      </Typography>
      <Box
        sx={{
          padding: '10px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
        }}
      >
        <Box>
          <Typography
            variant='h3'
            sx={{
              color: '#fff',
              fontSize: '10px',
              opacity: '0.5',
            }}
          >
            Номер поддержки:
          </Typography>
          <Link
            href='tel:0000000'
            underline='hover'
            sx={{
              color: '#fff',
              fontSize: '10px',
            }}
          >
            0(000)0000000
          </Link>
        </Box>
        <Box>
          <Typography
            variant='h3'
            sx={{
              color: '#fff',
              fontSize: '10px',
              opacity: '0.5',
            }}
          >
            Почта поддержки:
          </Typography>
          <Link
            href='mailto:dddd'
            underline='hover'
            sx={{
              color: '#fff',
              fontSize: '10px',
            }}
          >
            aaa@aaaa.ru
          </Link>
        </Box>
        <Box>
          <Typography
            variant='h3'
            sx={{
              color: '#fff',
              fontSize: '10px',
              opacity: '0.5',
            }}
          >
            Часы работы:
          </Typography>
          <Typography
            variant='body1'
            sx={{
              color: '#fff',
              fontSize: '10px',
            }}
          >
            Пн-Пт 9 00 - 19 00
          </Typography>
        </Box>
        <List
          sx={{
            width: '100%',
            marginTop: '20px',
            padding: '0',
          }}
        >
          <ListItem
            sx={{
              padding: '0',
              flexDirection: 'column',
              display: 'flex',
              alignItems: 'flex-start',
            }}
          >
            <Link
              href='#'
              underline='hover'
              sx={{
                color: '#fff',
                fontSize: '10px',
                opacity: '0.5',
                textAlign: 'left',
              }}
            >
              Пользовательское соглашение
            </Link>
            <Divider
              sx={{
                width: '100%',
                backgroundColor: '#fff',
                opacity: '0.5',
                margin: '5px 0',
              }}
            ></Divider>
          </ListItem>
          <ListItem
            sx={{
              padding: '0',
              flexDirection: 'column',
              display: 'flex',
              alignItems: 'flex-start',
            }}
          >
            <Link
              href='#'
              underline='hover'
              sx={{
                color: '#fff',
                fontSize: '10px',
                opacity: '0.5',
                textAlign: 'left',
              }}
            >
              Политика конфидициальности
            </Link>
            <Divider
              sx={{
                width: '100%',
                backgroundColor: '#fff',
                opacity: '0.5',
                margin: '5px 0',
              }}
            ></Divider>
          </ListItem>
          <ListItem
            sx={{
              padding: '0',
              flexDirection: 'column',
              display: 'flex',
              alignItems: 'flex-start',
            }}
          >
            <Link
              href='#'
              underline='hover'
              sx={{
                color: '#fff',
                fontSize: '10px',
                opacity: '0.5',
                textAlign: 'left',
              }}
            >
              Юридическая информация
            </Link>
            <Divider
              sx={{
                width: '100%',
                backgroundColor: '#fff',
                opacity: '0.5',
                margin: '5px 0',
              }}
            ></Divider>
          </ListItem>
          <ListItem
            sx={{
              padding: '0',
              flexDirection: 'column',
              display: 'flex',
              alignItems: 'flex-start',
            }}
          >
            <Link
              href='#'
              underline='hover'
              sx={{
                color: '#fff',
                fontSize: '10px',
                opacity: '0.5',
                textAlign: 'left',
              }}
            >
              Публичная оферта
            </Link>
            <Divider
              sx={{
                width: '100%',
                backgroundColor: '#fff',
                opacity: '0.5',
                margin: '5px 0',
              }}
            ></Divider>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
