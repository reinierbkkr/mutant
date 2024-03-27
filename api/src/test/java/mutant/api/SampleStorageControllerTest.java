package mutant.api;

import mutant.persistence.ISampleStorage;
import mutant.persistence.SampleFileStorage;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertNotNull;

public class SampleStorageControllerTest {
    @Test
    public void test_get_with_id_0_should_work(){
//        System.out.println("Working Directory = " + System.getProperty("user.dir"));
        ISampleStorage storage = new SampleFileStorage();

        assertNotNull(storage.getAudioData("LegoweltSnare001"));
    }
}
