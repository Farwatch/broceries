package controller;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import services.DefaultRecipeService;
import services.RecipeService;

/**
 * Created by nick on 12/02/17.
 */
@Configuration
public class ApplicationConfig {
    @Bean
    public RecipeService recipeService(){
        return new DefaultRecipeService();
    }
}
