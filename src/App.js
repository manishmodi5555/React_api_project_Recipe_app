import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Recipedetails from './pages/Recipedetails';
import RecipeDetails from './pages/Recipedetails';
import Recipes from './pages/Recipe';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './pages/login';
import SignupPage from './pages/Singup';
function App() {
  return (
    <BrowserRouter>
      <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/recpiedetails/:id" element={<RecipeDetails />} />
    <Route path="/recpies" element={<Recipes />} />
    <Route path="/recpies/meal/:mealname" element={<Recipes />} />
    <Route path="/recpies/tag/:tag" element={<Recipes />} />
    <Route path="/meal/:mealname" element={<Home />} />
    <Route path="/tag/:tag" element={<Home />} />
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/singup' element={<SignupPage/>}/>

  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
