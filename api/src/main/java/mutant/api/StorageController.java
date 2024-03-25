package mutant.api;

import mutant.persistence.*;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class StorageController {
    IPatternStorage storage = new PatternStorage();

    @GetMapping("/store")
    public String getStoredItem(@RequestParam String key){
        System.out.println("Received GET request at /store");
//        String item = storage.getStoredPattern(key);
//        return item;
        return "hi";
    }

    @PostMapping("/store")
    public void storePattern(@RequestBody PatternDTO patternDTO){
        System.out.println("Received POST request at /store");
        System.out.println();
        storage.storePattern(patternDTO.getPattern().getName(), patternDTO.getPattern());

    }

}
