import React from "react";
import { ThemeProvider, createTheme } from "arwes";

export default function App() {
  return (
    <ThemeProvider theme={createTheme()}>
      <div>My Project</div>
    </ThemeProvider>
  );
}
