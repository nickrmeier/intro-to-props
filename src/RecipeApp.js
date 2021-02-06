import './RecipeApp.css';
import NavBar from './NavBar';
import RecipeList from './RecipeList'


function RecipeApp() {
  return (
    <div className="App">
        <NavBar />

        <RecipeList/>

    </div>
  );
}

export default RecipeApp;
