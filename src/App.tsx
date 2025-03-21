import React from "react";
import { Routes, Route } from "react-router";

const App = () => {
  return (
    // <ThemeProvider theme={theme}>
    <Routes>
      <Route index element={<p>home</p>} />
    </Routes>
    // </ThemeProvider>
  );
};

export default App;
