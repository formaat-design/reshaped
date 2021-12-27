import React from "react";
import { Container, Frame, Stack, Text, Icon, Actionable } from "arcade";
import data from "data/footer";
import Menu from "components/Menu";
import Logo from "icons/Logo";
import IconLogoDribbble from "icons/LogoDribbble";
import IconLogoTwitter from "icons/LogoTwitter";
import IconLogoFacebook from "icons/LogoFacebook";
import IconLogoInstagram from "icons/LogoInstagram";
import IconLogoPinterest from "icons/LogoPinterest";

const Footer = () => {
  return (
    <Frame backgroundColor="neutral-faded" padding={6}>
      <Container size="larger">
        <Stack gap={6} divided>
          <Stack.Item>
            <Stack gap={{ s: 6, xl: 4 }} direction="row">
              <Stack.Item size={{ s: 12, xl: 3 }}>
                <Stack gap={6}>
                  <Text color="primary">
                    <Logo />
                  </Text>

                  <p>
                    Dribbble is the world’s leading
                    <br />
                    community for creatives to share, grow,
                    <br /> and get hired.
                  </p>

                  <Stack direction="row" align="center" gap={4}>
                    <Actionable href="#">
                      <Icon svg={IconLogoDribbble} />
                    </Actionable>
                    <Actionable href="#">
                      <Icon svg={IconLogoTwitter} />
                    </Actionable>
                    <Actionable href="#">
                      <Icon svg={IconLogoFacebook} />
                    </Actionable>
                    <Actionable href="#">
                      <Icon svg={IconLogoInstagram} />
                    </Actionable>
                    <Actionable href="#">
                      <Icon svg={IconLogoPinterest} />
                    </Actionable>
                  </Stack>
                </Stack>
              </Stack.Item>

              <Stack.Item size={{ s: 12, xl: 9 }}>
                <Stack direction="row" gap={{ s: 6, l: 4 }}>
                  <Stack.Item size={{ s: 6, l: 3 }}>
                    <Menu {...data.sections.designers} />
                  </Stack.Item>
                  <Stack.Item size={{ s: 6, l: 3 }}>
                    <Stack gap={6}>
                      <Menu {...data.sections.hire} />
                      <Menu {...data.sections.brands} />
                    </Stack>
                  </Stack.Item>
                  <Stack.Item size={{ s: 6, l: 3 }}>
                    <Menu {...data.sections.company} />
                  </Stack.Item>
                  <Stack.Item size={{ s: 6, l: 3 }}>
                    <Stack gap={6}>
                      <Menu {...data.sections.directories} />
                      <Menu {...data.sections.assets} />
                    </Stack>
                  </Stack.Item>
                </Stack>
              </Stack.Item>
            </Stack>
          </Stack.Item>

          <Stack direction={{ s: "column", l: "row" }} align="center">
            <Stack.Item grow>
              © {new Date().getFullYear()} Dribbble. All rights reserved.
            </Stack.Item>

            <Stack
              direction={{ s: "column-reverse", l: "row" }}
              align="center"
              gap={2}
            >
              <Stack.Item>
                <Text variant="body-strong-2" as="span">
                  {data.shotsCount}
                </Text>{" "}
                shots dribbbled
              </Stack.Item>
              <img
                width={24}
                height={24}
                src="https://cdn.dribbble.com/assets/dribbble-ball-icon-4e54c54abecf8efe027abe6f8bc7794553b8abef3bdb49cd15797067cf80ca53.svg"
              />
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Frame>
  );
};

export default Footer;
