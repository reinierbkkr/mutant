package mutant.persistence;

public interface IStorage {
    public void storeItem(String key, String object);
    public String getStoredItem(String key);

}