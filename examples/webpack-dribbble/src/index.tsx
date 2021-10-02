import React from "react";
import ReactDOM from "react-dom";
import { Arcade, Stack, Container, Button, Frame } from "arcade";
import theme from "themes/dribbble";
import shots from "data/shots";
import Header from "components/Header";
import Filters from "components/Filters";
import ShotCard from "components/ShotCard";
import Footer from "components/Footer";

const App = () => {
  return (
    <Arcade theme={theme}>
      <Stack gap={6}>
        <Header />

        <Stack.Item>
          <Container size="larger">
            <Stack gap={6}>
              <Filters />

              <Stack gap={6} direction="row">
                {shots.map((shot) => (
                  <Stack.Item size={{ s: 12, m: 6, l: 4, xl: 3 }}>
                    <ShotCard {...shot} />
                  </Stack.Item>
                ))}
              </Stack>

              <Frame align="center">
                <Button>Load more Shots</Button>
              </Frame>
            </Stack>
          </Container>
        </Stack.Item>

        <Footer />
      </Stack>
    </Arcade>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
