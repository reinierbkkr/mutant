package hexagonsun.persistence;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class StorageTest {
    @Test
    public void getMessage() {
        IStorage storage = new Storage();

        storage.storeItem("1","Hello World");

        assertEquals("Hello World", storage.getStoredItem("1"));
    }
}
