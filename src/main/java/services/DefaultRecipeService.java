package services;

import domain.Recipe;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

/**
 * Created by nick on 12/02/17.
 */
@Service
public class DefaultRecipeService implements RecipeService {
    @Override
    public Recipe findByName(String name) {
        return new Recipe(name, new ArrayList<>(), 50);
    }
}
