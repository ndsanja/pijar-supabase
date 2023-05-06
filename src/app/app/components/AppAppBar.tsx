'use client';

import {
  ChatBubbleOutlineOutlined,
  MenuOutlined,
  NotificationsNoneOutlined,
  SearchOutlined,
} from '@mui/icons-material';
import {
  AppBar,
  Avatar,
  IconButton,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@mui/material';
import { useRouter } from 'next/navigation';

const AppAppBar = () => {
  const trigger = useScrollTrigger();
  const router = useRouter();

  const content = (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{ backgroundColor: 'white' }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 1 }}
          className="!hidden md:!inline-flex"
        >
          <MenuOutlined />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Pijar
        </Typography>
        <div className="flex items-center justify-center space-x-2">
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="chat"
          >
            <SearchOutlined />
          </IconButton>
          <IconButton
            className="!mr-2 md:!mr-0"
            size="small"
            edge="start"
            color="inherit"
            aria-label="chat"
          >
            <ChatBubbleOutlineOutlined />
          </IconButton>
          <IconButton
            className="!hidden md:!inline-flex"
            size="small"
            edge="start"
            color="inherit"
            aria-label="chat"
          >
            <NotificationsNoneOutlined />
          </IconButton>
          <Avatar
            onClick={() => router.push('/app/user')}
            color="red"
            className="!w-[28px] !h-[28px] cursor-pointer"
          >
            <Typography>N</Typography>
          </Avatar>
        </div>
      </Toolbar>
    </AppBar>
  );

  const scrollHidden = (
    <Slide appear={false} direction="down" in={!trigger} className="">
      {content}
    </Slide>
  );

  return (
    <>
      <Slide appear={false} direction="down" in={!trigger} className="">
        {content}
      </Slide>
    </>
  );
};
export default AppAppBar;
