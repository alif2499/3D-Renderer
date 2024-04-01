// Default app creation code

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// Merged code from online to render 3D data 

import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBarTop from "./Components/AppBarTop";
import Renderer from "./Components/RenderPaper";
import AppBarBottom from "./Components/AppBarBottom";
import DataRender from "./Components/DataRender";
import "./App.css";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#5DADE2",
    },
  },
  typography: {
    fontFamily: ["Gill Sans", "Nunito", "sans-serif"].join(","),
    fontWeightLight: 300,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh",
          minWidth: "100vw",
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "column",
          backgroundColor: "#111418",
        }}
      >
        <AppBarTop />
        {/* <Renderer /> */}
        <DataRender />
        <AppBarBottom />
      </Box>
    </ThemeProvider>
  );
}
export default App;





// For practicing to render 3D data manually

// import React from 'react';
// // import MedicalImageViewer from './MedicalImageViwer';
// import VtkViewerr from './VtkViewerr';
// // import DicomViewer from './DicomViewer';

// function App() {
//   // Define the DICOM dataset URL or binary data
//   const dataPath = 'src\\teapot.stl';

//   return (
//     <div>
//       <h1>VTK.js 3D Viewer</h1>
//       <VtkViewerr dataUrl={dataPath} />
//     </div>
//   );
// }

// export default App;

