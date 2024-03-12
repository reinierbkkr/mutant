package hexagonsun.api;

import hexagonsun.persistence.*;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class StorageController {
    IStorage storage = new Storage();

    @GetMapping("/store")
    public String getStoredItem(@RequestParam(name = "key") String key){
        System.out.println("Received GET request at /store");
        return storage.getStoredItem(key);
    }

    @PostMapping("/store")
    public void storeItem(@RequestParam(name = "key") String key,@RequestParam(name = "object") String object){
        System.out.println("Received POST request at /store");
        storage.storeItem(key, object);
    }

}
