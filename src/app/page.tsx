import { Button, Container, ThemeProvider } from '@mui/material';
import Table from './components/Table';
import theme from './components/theme';
import MenuBox from './components/MenuBox';
import Contacts from './components/Contacts';
import SmsIcon from '@mui/icons-material/Sms';
import Header from './components/Header';
export default async function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Container
        disableGutters
        sx={{
          display: 'flex',
          gap: '20px',
        }}
      >
        <Container
          disableGutters
          sx={{
            width: '25%',
          }}
        >
          <MenuBox></MenuBox>
          <Contacts></Contacts>
          <Button
            variant='contained'
            startIcon={<SmsIcon />}
            sx={{
              width: '100%',
              maxWidth: '920px',
              bgcolor: 'primary.light',
              marginTop: '20px',
              textTransform: 'none',
              borderRadius: '8px',
              color: '#fff',
            }}
          >
            Связаться с нами
          </Button>
        </Container>
        <Container
          disableGutters
        >
          <Header></Header>
          <Container>
            <Table></Table>
          </Container>
        </Container>
      </Container>
    </ThemeProvider>
  );
}
