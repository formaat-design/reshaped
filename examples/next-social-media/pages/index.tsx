import type { NextPage } from "next";
import {
  Arcade,
  Container,
  Card,
  Stack,
  Avatar,
  Button,
  Text,
  Tooltip,
  Actionable,
  AspectRatio,
  Frame,
  Link,
  DropdownMenu,
  Popover,
  Icon,
  useColorMode,
} from "arcade";
import ArcadeTheme from "arcade/themes/arcade";
import IconMore from "../icons/More";
import IconBookmark from "../icons/Bookmark";
import IconCloseSquare from "../icons/CloseSquare";
import IconClock from "../icons/Clock";
import IconUserMinus from "../icons/UserMinus";
import IconThumbsUp from "../icons/ThumbsUp";
import IconShare from "../icons/Share";
import IconMessage from "../icons/Message";
import IconUsers from "../icons/Users";
import IconUserCheck from "../icons/UserCheck";

const PostActionMenu = () => {
  return (
    <DropdownMenu position="bottom-end">
      <DropdownMenu.Trigger>
        {(attributes) => (
          <Button
            variant="ghost"
            rounded
            icon={IconMore}
            attributes={attributes}
          />
        )}
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Section>
          <DropdownMenu.Item icon={IconBookmark}>
            Save post
            <Text color="neutral-faded" variant="caption1">
              Add this to your saved items
            </Text>
          </DropdownMenu.Item>
        </DropdownMenu.Section>

        <DropdownMenu.Section>
          <DropdownMenu.Item icon={IconCloseSquare}>
            Hide post
            <Text color="neutral-faded" variant="caption1">
              See fewer posts like this
            </Text>
          </DropdownMenu.Item>
          <DropdownMenu.Item icon={IconClock}>
            Snooze Dmitry for 30 days
            <Text color="neutral-faded" variant="caption1">
              Temporarily stop seeing posts
            </Text>
          </DropdownMenu.Item>
          <DropdownMenu.Item icon={IconUserMinus}>
            Unfollow Dmitry
            <Text color="neutral-faded" variant="caption1">
              Stop seeing posts but stay friends
            </Text>
          </DropdownMenu.Item>
        </DropdownMenu.Section>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
};

const AccountInformation = () => (
  <Stack gap={3}>
    <Stack direction="row" gap={4}>
      <Avatar
        size="large"
        src="https://pbs.twimg.com/profile_images/1096029593335676929/OZbE9ZXV_400x400.png"
      />

      <Stack.Item grow>
        <Stack gap={3}>
          <Text variant="title3">Dmitry Belyaev</Text>
          <Stack direction="row">
            <Icon svg={IconUserCheck} />
            <Stack.Item grow>
              <Text>
                Became friends with{" "}
                <Text variant="medium2" as="span">
                  <Link color="inherit" variant="plain" href="/">
                    Ester Naomi
                  </Link>
                </Text>{" "}
                and{" "}
                <Text variant="medium2" as="span">
                  14 other people
                </Text>
              </Text>
            </Stack.Item>
          </Stack>
          <Stack.Item gap={1}>
            <Stack direction="row">
              <Icon svg={IconUsers} />
              <Stack.Item grow>
                47 mutual friends including{" "}
                <Text variant="medium2" as="span">
                  <Link color="inherit" variant="plain" href="/">
                    Ester Naomi
                  </Link>
                </Text>
              </Stack.Item>
            </Stack>
          </Stack.Item>
        </Stack>
      </Stack.Item>
    </Stack>
    <Stack direction="row" gap={2}>
      <Stack.Item grow>
        <Button icon={IconThumbsUp} fullWidth>
          Like
        </Button>
      </Stack.Item>
      <Stack.Item grow>
        <Button icon={IconMessage} color="primary" fullWidth>
          Message
        </Button>
      </Stack.Item>
      <Button icon={IconMore} />
    </Stack>
  </Stack>
);

const PostHeader = () => {
  return (
    <Stack direction="row" align="center">
      <Popover position="bottom" width={360} triggerType="hover">
        <Popover.Trigger>
          {(attributes) => (
            <Actionable attributes={attributes}>
              <Avatar
                size="small"
                src="https://pbs.twimg.com/profile_images/1096029593335676929/OZbE9ZXV_400x400.png"
              />
            </Actionable>
          )}
        </Popover.Trigger>
        <Popover.Content>
          <AccountInformation />
        </Popover.Content>
      </Popover>

      <Stack.Item grow>
        <Text variant="medium2">Dmitry Belyaev</Text>
        <Text variant="caption1" color="neutral-faded">
          <Tooltip text="Saturday, September 1, 2021">
            {(attributes) => (
              <Actionable attributes={attributes}>
                September 1, 12:30
              </Actionable>
            )}
          </Tooltip>
        </Text>
      </Stack.Item>

      <PostActionMenu />
    </Stack>
  );
};

const PostFooter = () => {
  const { invertMode, mode } = useColorMode();

  return (
    <Stack divided gap={2}>
      {/* <Stack direction="row">
        <Stack.Item grow>
          <Stack direction="row" gap={1} align="center">
            <img
              alt=""
              height={18}
              role="presentation"
              src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e"
              width={18}
            />
            <Link color="inherit" variant="plain">
              165K
            </Link>
          </Stack>
        </Stack.Item>
        <Link color="inherit" variant="plain">
          14K comments
        </Link>
        <Link color="inherit" variant="plain">
          103K shares
        </Link> 
      </Stack>*/}
      <Stack direction="row">
        <Stack.Item size={4}>
          <Button
            variant="ghost"
            fullWidth
            icon={IconThumbsUp}
            onClick={invertMode}
          >
            Like
          </Button>
        </Stack.Item>
        <Stack.Item size={4}>
          <Button variant="ghost" fullWidth icon={IconMessage}>
            Comment
          </Button>
        </Stack.Item>
        <Stack.Item size={4}>
          <Button variant="ghost" fullWidth icon={IconShare}>
            Share
          </Button>
        </Stack.Item>
      </Stack>
    </Stack>
  );
};

const PostCard = () => {
  return (
    <Card padding={0}>
      <Frame padding={4}>
        <Stack gap={2}>
          <Stack.Item>
            <PostHeader />
          </Stack.Item>

          <Text>
            Amsterdam’s largest park is located mostly in Amstelveen and has a
            lot to offer. You’ll find a number of attractions in its vast area
            including the Bosbaan, a rowing course that has hosted the World
            Rowing Championship twice. Along with ponds suitable for swimming,
            an open air theatre and camping facilities, the park also has a
            fabulous forest with dazzling cherry blossoms in spring. Keep your
            eye out for Scottish Highlanders as you wander this beautiful spot
            in the city and naturists if you venture near De Zonneweide.
          </Text>
        </Stack>
      </Frame>

      <AspectRatio ratio={4 / 2}>
        <img src="https://images.unsplash.com/photo-1630702379394-e202e2fbe01e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1617&q=80" />
      </AspectRatio>

      <Frame padding={[2, 4]}>
        <PostFooter />
      </Frame>
    </Card>
  );
};

const Home: NextPage = () => {
  return (
    <Arcade theme={ArcadeTheme}>
      <Frame justify="center" height="100vh">
        <Container size="smallest">
          <PostCard />
        </Container>
      </Frame>
    </Arcade>
  );
};

export default Home;
