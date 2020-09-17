import React from "react";
import "./App.css";
import { ThemeProvider, createTheme, Arwes, Heading, Logo, Button, Puffs } from "arwes";


export default function App() {
  return (
    <ThemeProvider theme={createTheme()}>
      <Arwes>
        <div style={{ padding: 20 }}>
        <Heading node='h1'>Futuristic Sci-Fi Interfaces</Heading>
        </div>
        <Logo animate size={300}/>
        <Button>Make Noise</Button>
        <Puffs>
          <div style={{ width: "100%", height: 500 }} />
        </Puffs>
      </Arwes>
    </ThemeProvider>
  );
}
