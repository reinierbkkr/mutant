package mutant.api;

import mutant.persistence.*;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class SampleStorageController {
    ISampleStorage storage = new SampleFileStorage();

    @GetMapping("/sample")
    public String getStoredItem(@RequestParam String id){
        System.out.println("Received GET request at /sample/id=" + id);
        String item = storage.getAudioData(id);
        return item;
    }

    @GetMapping("/allsamples")
    public String[] getSampleNames(){
        System.out.println("Received GET request at /allsamples");
        String[] items = storage.getSampleNames();
        return items;
    }

//    @PostMapping("/store")
//    public void storeItem(@RequestBody StoreDTO storeDTO){
//        System.out.println("Received POST request at /store");
//        storage.storeItem(storeDTO.getKey(), storeDTO.getObject());
//    }

}
