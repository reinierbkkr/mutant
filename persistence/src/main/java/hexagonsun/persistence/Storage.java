package hexagonsun.persistence;

import java.util.HashMap;

public class Storage implements IStorage{
    HashMap<String,String> storage = new HashMap<>();

    public Storage(){
        storage.put("1","Hello World.");
    }
    @Override
    public void storeItem(String key, String object) {
        storage.put(key, object);
        System.out.println("object stored with key " + key);
    }

    @Override
    public String getStoredItem(String key) {
        System.out.println("object retrieved with key " + key);
        return storage.get(key);
    }
}
