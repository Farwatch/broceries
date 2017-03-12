package domain;

import lombok.Data;

import java.util.List;

/**
 * Created by nick on 12/02/17.
 */
@Data
public class Recipe {
    private final String name;
    private final List<String> ingredients;
    private final int estimatedCookingTime;
}
