// material
import { Grid, Container } from '@mui/material';
//util
import { mockImgAvatar } from 'src/utils/mockImages';
// component
import Page from '../components/Page';
import { ItemCard, SearchCard, DefaultCard } from '../components/card/view-home';
function HomeCard() {
  return (
    <Page title="Card | Minimal-UI">
      <Container maxWidth="xl">
        <Grid container alignItems="center" spacing={3}>
          <Grid item xs={12}>
            <SearchCard />
          </Grid>

          <Grid item lg={3} sm={4} md={3} xs={7}>
            <DefaultCard />
          </Grid>
          <Grid item lg={3} sm={4} md={3} xs={7}>
            <ItemCard img={mockImgAvatar(25)} name="Khanh" />
          </Grid>
          <Grid item lg={3} sm={4} md={3} xs={7}>
            <ItemCard img={mockImgAvatar(24)} name="KhanhBatluc" />
          </Grid>
          <Grid item lg={3} sm={4} md={3} xs={7}>
            <ItemCard img={mockImgAvatar(25)} name="Khanh" />
          </Grid>
          <Grid item lg={3} sm={4} md={3} xs={7}>
            <ItemCard img={mockImgAvatar(24)} name="Khanh" />
          </Grid>
          <Grid item lg={3} sm={4} md={3} xs={7}>
            <ItemCard img={mockImgAvatar(25)} name="Khanh" />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

export default HomeCard;
