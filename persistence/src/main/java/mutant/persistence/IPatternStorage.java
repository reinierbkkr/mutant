package mutant.persistence;

import mutant.domain.Pattern;

public interface IPatternStorage {
    public void storePattern(String name, Pattern pattern);
    public Pattern getStoredPattern(String key);

}