import React from "react";
import {
  AspectRatio,
  Stack,
  Avatar,
  Text,
  Badge,
  Icon,
  Button,
  Scrim,
  Frame,
} from "arcade";
import IconCollection from "icons/Collection";
import IconHeart from "icons/Heart";
import IconEye from "icons/Eye";
import s from "./ShotCard.module.css";
import * as T from "./ShotCard.types";

const ShotCard = (props: T.Props) => {
  const { imgUrl, user, likesCount, viewsCount, title } = props;

  return (
    <Stack gap={2}>
      <Frame borderRadius="medium" overflow="hidden" className={s.root}>
        <Scrim
          position="bottom"
          backgroundSlot={
            <AspectRatio ratio={4 / 3}>
              <img src={imgUrl} style={{ borderRadius: 8 }} />
            </AspectRatio>
          }
          scrimClassName={s.scrim}
        >
          <Stack direction="row" align="center">
            <Stack.Item grow>
              <Text variant="strong1">{title}</Text>
            </Stack.Item>
            <Button icon={IconCollection} color="white" elevated />
            <Button icon={IconHeart} color="white" elevated />
          </Stack>
        </Scrim>
      </Frame>

      <Stack direction="row" align="center" gap={2}>
        <Avatar src={user.logoUrl} size="smaller" />
        <Text variant="strong2">{user.name}</Text>
        <Stack.Item grow>
          {user.accountType && (
            <Badge variant="faded">{user.accountType}</Badge>
          )}
        </Stack.Item>

        <Stack.Item>
          <Stack direction="row" gap={1} align="center">
            <Icon svg={IconHeart} size="smallest" color="neutral-faded" />
            <Text variant="caption1" color="neutral-faded">
              {likesCount}
            </Text>
          </Stack>
        </Stack.Item>

        <Stack.Item>
          <Stack direction="row" gap={2} align="center">
            <Icon svg={IconEye} size="smallest" color="neutral-faded" />
            <Text variant="caption1" color="neutral-faded">
              {viewsCount / 1000}k
            </Text>
          </Stack>
        </Stack.Item>
      </Stack>
    </Stack>
  );
};

export default ShotCard;
