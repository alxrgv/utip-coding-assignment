import { Container, Grid, Paper } from "@material-ui/core";

import { MainPageHeader } from "./main-page-header";
import { MainPageContent } from "./main-page-content";

function MainPage() {
  return (
    <Container component="main">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <MainPageHeader />
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <MainPageContent />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export { MainPage };
