package mutant.api;

import mutant.persistence.*;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class StorageController {
    IStorage storage = new Storage();

    @GetMapping("/store")
    public String getStoredItem(@RequestParam String key){
        System.out.println("Received GET request at /store");
        String item = storage.getStoredItem(key);
        return item;
    }

    @PostMapping("/store")
    public void storeItem(@RequestBody StoreDTO storeDTO){
        System.out.println("Received POST request at /store");
        storage.storeItem(storeDTO.getKey(), storeDTO.getObject());
    }

}
