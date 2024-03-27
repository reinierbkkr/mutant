package mutant.persistence;

import java.util.HashMap;
import mutant.domain.Pattern;

public class PatternStorage implements IPatternStorage {
    HashMap<String, Pattern> storage = new HashMap<>();
    @Override
    public void storePattern(String name, Pattern pattern) {
        storage.put(name, pattern);
    }

    @Override
    public Pattern getStoredPattern(String name) {
        return storage.get(name);
    }

    public String[] getPatternNames() { return null; }
}
