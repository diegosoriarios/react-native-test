import React from 'react';

import { Grid, GridImage } from './styles';

const GridItem = ({ item }) => {
  return (
    <Grid>
      <GridImage source={{ uri: item.url }} />
    </Grid>
  );
}

export default GridItem;