package hexagonsun.persistence;

import java.util.HashMap;

public class Storage implements IStorage{
    HashMap<String,String> storage = new HashMap<>();
    @Override
    public void storeItem(String key, String object) {
        storage.put(key, object);
    }

    @Override
    public String getStoredItem(String key) {
        return storage.get(key);
    }
}
