import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Typography from '@mui/joy/Typography';

export default function EllipsisList() {
  return (
    <Box sx={{ width: 320 }}>
      <Typography
        id="ellipsis-list-demo"
        level="body4"
        textTransform="uppercase"
        fontWeight="xl"
        mb={1}
        sx={{ letterSpacing: '0.15rem' }}
      >
        Inbox
      </Typography>
      <List
        aria-labelledby="ellipsis-list-demo"
        sx={{ '--List-decorator-width': '56px' }}
      >
        <ListItem>
          <ListItemDecorator sx={{ alignSelf: 'flex-start' }}>
            <Avatar src="/static/images/avatar/1.jpg" />
          </ListItemDecorator>
          <ListItemContent>
            <Typography>Brunch this weekend?</Typography>
            <Typography level="body2" noWrap>
              I&apos;ll be in your neighborhood doing errands this Tuesday.
            </Typography>
          </ListItemContent>
        </ListItem>
        <ListItem>
          <ListItemDecorator sx={{ alignSelf: 'flex-start' }}>
            <Avatar src="/static/images/avatar/2.jpg" />
          </ListItemDecorator>
          <ListItemContent>
            <Typography>Summer BBQ</Typography>
            <Typography level="body2" noWrap>
              Wish I could come, but I&apos;m out of town this Friday.
            </Typography>
          </ListItemContent>
        </ListItem>
      </List>
    </Box>
  );
}
