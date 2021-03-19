import { Container, Paper, Divider, Grid } from "@material-ui/core";

import { DocumentsPageHeader } from "./documents-page-header";
import { DocumentsPageContent } from "./documents-page-content";
import { DocumentPageToolbar } from "./documents-page-toolbar";

function DocumentsPage() {
  return (
    <Container component="main" maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <DocumentsPageHeader />
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <DocumentPageToolbar />
            <Divider />
            <DocumentsPageContent />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export { DocumentsPage };
