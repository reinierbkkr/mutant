package hexagonsun.api;

import hexagonsun.persistence.*;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class StorageController {
    IStorage storage = new Storage();

    @GetMapping("/store")
    public String getStoredItem(@RequestParam String key){
        System.out.println("Received GET request at /store");
        System.out.println(key);
        String item = storage.getStoredItem(key);
        System.out.println(item);
        return item;
    }

    @PostMapping("/store")
    public void storeItem(@RequestBody StoreDTO storeDTO){
        System.out.println("Received POST request at /store");
        storage.storeItem(storeDTO.getKey(), storeDTO.getObject());
    }

}
