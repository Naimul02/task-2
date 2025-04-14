import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import CategoriesInfo from "../components/CategoriesInfo/CategoriesInfo";
import CategoriesCard from "../components/CategoriesCard/CategoriesCard";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [
            {
              path : '/',
              element : <CategoriesInfo></CategoriesInfo>
            },
            {
              path: '/duas/:id',
              element : <CategoriesCard></CategoriesCard>
            }
      ]
    },
  ]);

  export default router