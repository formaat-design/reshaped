import React from "react";
import ReactDOM from "react-dom";
import { Reshaped, Stack, Container, Button, Frame } from "reshaped";
import "themes/dribbble/theme.css";
import shots from "data/shots";
import Header from "components/Header";
import Filters from "components/Filters";
import ShotCard from "components/ShotCard";
import Footer from "components/Footer";

const App = () => {
  return (
    <Reshaped theme="dribbble">
      <Stack gap={6}>
        <Header />

        <Stack.Item>
          <Container width="1400px">
            <Stack gap={6}>
              <Filters />

              <Stack gap={6} direction="row">
                {shots.map((shot) => (
                  <Stack.Item columns={{ s: 12, m: 6, l: 4, xl: 3 }}>
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
    </Reshaped>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
