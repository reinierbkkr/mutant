package mutant.api;

import com.fasterxml.jackson.core.JsonProcessingException;
import mutant.persistence.*;
import mutant.domain.Pattern;
import org.springframework.web.bind.annotation.*;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;

@RestController
@RequestMapping("/api")
public class StorageController {
    IPatternStorage storage = new PatternStorage();

//    @GetMapping("/store")
//    public String getStoredItem(@RequestParam String key){
//        System.out.println("Received GET request at /store");
////        String item = storage.getStoredPattern(key);
////        return item;
//        return "hi";
//    }

    @PostMapping("/store")
    public void storePattern(@RequestBody Pattern pattern) {
        System.out.println("Received POST request at /store. Storing pattern " + pattern.getName());
        storage.storePattern(pattern.getName(), pattern);
    }

    @GetMapping("/store")
    public Pattern getPatternList(@RequestParam String name) {
        System.out.println("Received get request at /store for pattern " + name);
        return storage.getStoredPattern(name);
    }

}
