// import Formdata from "./component/Formdata";
// import { Route, Router, Routes } from "react-router-dom";
// import Home from "./component/Home/Home";
// import UseState from "./useStateHook/UseState";
// import Project from "./programUseState/Project";
// import Controlled from "./controlled vs Uncontrolled/Controlled";
// import Uncontrolled from "./controlled vs Uncontrolled/Uncontrolled";
// import SingnUP from "./RegistrationForms/SingnUP";
// import Login from "./RegistrationForms/Login";
// import PrivateRoute from "./RegistrationForms/PrivateRoute";
// import ContactForm from "./contactForm/ContactForm";
// import UseEffect from "./useEffect Hook/UseEffect";
// import ChallengeUseEffect from "./useEffect Hook/ChallengeUseEffect";
// import UseEffectCleanup from "./useEffect Hook/UseEffectCleanup";
// import HowNotTOFetchApi from "./useEffect Hook/HowNotTOFetchApi";
// import FetchingUsingAsyncAwait from "./useEffect Hook/FetchingUsingAsyncAwait";
// import ProjectPokemon from "./useEffect Hook/Project/ProjectPokemon";
// import UseRefHook from "./useRefHook/UseRefHook";
// import ForwardRefHool from "./useRefHook/ForwardRefHool";
// import UseIdHook from "./Hooks/UseIdHook";
// import PropDrilling from "./PropDrilling/PropDrilling";
// import Context from "./ContextApi/Context";
// import CardDetail from "./ContextApi/CardDetail";
// import CardList from "./ContextApi/CardList";
// import {
//   DarkLight,
//   ThemeProvider,
// } from "./project1Darkmode and lightmode/DarkKight";
// import UseHook from "./Hooks/UseHook";
// import { Suspense } from "react";
// import CircularProgress from "@mui/material/CircularProgress";
// import ReducerHook from "./Hooks/ReducerHook";
// import React_memo from "./Hooks/React_memo";
// import UseMemohook from "./Hooks/UseMemohook";
// import UseCallback from "./Hooks/UseCallback";

// // context Api

// function App() {
//   return (
//     <>
//       <div>
//         {/* <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="login" element={<Formdata />} />
//       </Routes> */}
//         {/* <UseState/> */}
//         {/* <Project/> */}
//         {/*
//       <Controlled/>
//       <Uncontrolled/> */}

//         {/* private routes */}

//         {/* <Routes>
//         <Route path="/" element={<SingnUP />} />
//         <Route path="/login" element={<Login />} />
//         <Route
//           path="/project"
//           element={
//             <PrivateRoute>
//               <Project />
//             </PrivateRoute>
//           }
//         />
//       </Routes> */}

//         {/* contactform  */}
//         {/* <ContactForm/> */}

//         {/*
//       useEffact hook program */}

//         {/* <UseEffect/> */}
//         {/* <ChallengeUseEffect/> */}
//         {/* <UseEffectCleanup/> */}
//         {/* <HowNotTOFetchApi/> */}
//         {/* <FetchingUsingAsyncAwait/> */}

//         {/* ProjectPokemon */}
//         {/* <ProjectPokemon/> */}
//       </div>

//       <div>
//         {/* useRef hook */}

//         {/* <UseRefHook/> */}
//         {/* <ForwardRefHool/> */}
//         {/* <UseIdHook/> */}
//       </div>
//       <div>
//         {/* PropDrilling */}

//         {/* <PropDrilling/> */}

//         {/* <Context>
//           <CardList />
//           <CardDetail />
//         </Context> */}
//         {/*
//         <ThemeProvider>
//           <DarkLight/>
//         </ThemeProvider> */}
//       </div>
//       <div>
//         {/* useHook in react js  */}
//         {/* <Suspense fallback={<CircularProgress size={60} thickness={5} />}>
//           <UseHook />
//         </Suspense> */}
//       </div>
//       <div>
//         {/* <ReducerHook/> */}
//       </div>

//       <div>
//         {/* <React_memo/> */}
//         {/* <UseMemohook/> */}
//         <UseCallback/>

//       </div>
//     </>
//   );
// }

// export default App;

//// project Reactrouterdom
// import React from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import AppLayout from "./ReactRouterDom/Components/Layout/AppLayout";
// import Home from "./ReactRouterDom/pages/Home";
// import About from "./ReactRouterDom/pages/About";
// import Movie from "./ReactRouterDom/pages/Movie";
// import Contact from "./ReactRouterDom/pages/Contact";
// import ErrorPage from "./ReactRouterDom/pages/ErrorPage";
// import { getMoviesData } from "./ReactRouterDom/api/GetApi";
// import { MovieDetails } from "./ReactRouterDom/Components/Ui/MovieDetails";
// import { GetMOviderails } from "./ReactRouterDom/Components/Ui/GetMovidetails";
// import { contactData } from "./ReactRouterDom/Components/Layout/ContactForm";

// function App() {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <AppLayout />,
//       errorElement: <ErrorPage />,
//       children: [
//         {
//           path: "/",
//           element: <Home />,
//         },
//         {
//           path: "about",
//           element: <About />,
//         },
//         {
//           path: "/movie",
//           element: <Movie />,
//           loader: getMoviesData,
//         },
//         {
//           path: "/movie/:movieID",
//           element: <MovieDetails />,
//           loader: GetMOviderails,
//         },
//         {
//           path: "/contact",
//           element: <Contact />,
//           action: contactData,
//         },
//       ],
//     },
//   ]);
//   return <RouterProvider router={router} />;
// }

// export default App;

// //Axios project data to fact api

// import React from 'react'
// import { Movies } from './AxiosFachdata/pages/Movies'

// function App() {
//   return (
//     <div>
//       <Movies/>
//     </div>
//   )
// }

// export default App






// //crud aplication axios
// import React from "react";
// import Apidata from "./Crud project/data/Apidata";

// function App() {
//   return (
//     <>
//      <Apidata/>
//     </>
//   );
// }

// export default App;



//// DynamicAccordion in reactv19

import React from 'react'
import { Accordion } from './DynamicAccordion in react19/Accordion'

function App() {
  return (
    <div>
        <Accordion/>
    </div>
  )
}

export default App
