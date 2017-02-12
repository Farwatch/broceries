package domain;

import java.util.List;

/**
 * Created by nick on 12/02/17.
 */
public class Recipe {
    private String name;
    private List<String> ingredients;
    private int estimatedCookingTime;

    public Recipe(String name, List<String> ingredients, int estimatedCookingTime) {
        this.name = name;
        this.ingredients = ingredients;
        this.estimatedCookingTime = estimatedCookingTime;
    }

    public String getName() {
        return name;
    }

    public List<String> getIngredients() {
        return ingredients;
    }

    public int getEstimatedCookingTime() {
        return estimatedCookingTime;
    }
}
