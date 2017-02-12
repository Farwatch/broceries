package services;

import domain.Recipe;

/**
 * Created by nick on 12/02/17.
 */
public interface RecipeService {

    Recipe findByName(String name);
}
