// material
import { Grid, Container } from '@mui/material';
// component
import { ButtonBack, NameCard } from '../components/card/view-create';
import Page from '../components/Page';
import NewCard from '../components/card/view-create/new-card';
import CardInfo from '../components/card/view-create/info-card/cardInfo';
function CreateCard() {
  return (
    <Page title="Create | Minimal-UI">
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={2}>
            <ButtonBack />
          </Grid>
          <Grid item xs={7}>
            <NameCard />
          </Grid>

          <Grid item lg={5} md={6} sm={6} xs={12}>
            <NewCard />
          </Grid>
          <Grid item lg={5} md={6} sm={6} xs={12}>
            <CardInfo />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

export default CreateCard;
