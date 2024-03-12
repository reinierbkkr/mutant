package hexagonsun.api;

import hexagonsun.persistence.*;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class StorageController {
    IStorage storage = new Storage();

    @GetMapping("/store")
    public String getStoredItem(@RequestBody GetStoreDTO getStoreDTO){
        System.out.println("Received GET request at /store");
        return storage.getStoredItem(getStoreDTO.getKey());
    }

    @PostMapping("/store")
    public void storeItem(@RequestBody StoreDTO storeDTO){
        System.out.println("Received POST request at /store");
        storage.storeItem(storeDTO.getKey(), storeDTO.getObject());
    }

}
