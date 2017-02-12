package controller;

import domain.Recipe;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import services.RecipeService;

/**
 * Created by nick on 12/02/17.
 */

@RestController
public class RecipeController {

    @Autowired private RecipeService recipeService;

    @GetMapping("/recipes/{name}")
    public @ResponseBody Recipe getRecipe(@PathVariable("name") String name) {
        return recipeService.findByName(name);
    }

}
