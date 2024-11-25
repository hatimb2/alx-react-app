import { useRecipeStore } from './recipeStore';
import { Router } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);

  return (
    <div>
      {recipes.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <link>www.google.com</link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;

