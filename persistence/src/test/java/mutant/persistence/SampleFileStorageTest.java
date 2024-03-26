package mutant.persistence;

import org.apache.tomcat.util.codec.binary.Base64;
import org.junit.jupiter.api.Test;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.*;

public class SampleFileStorageTest {
    private static byte[] decodeB64String(String b64String){
        return Base64.decodeBase64(b64String);
    }

    @Test
    public void make_string_from_sample_test() {
        try {
            ISampleStorage storage = new SampleFileStorage();
            byte[] originalFile = Files.readAllBytes(Paths.get("samples/LegoweltBasedrum001.wav"));

            String audioFileString = storage.getAudioData("0");
            byte[] convertedFile = decodeB64String(audioFileString);

            assertTrue(Arrays.equals(originalFile, convertedFile));
        } catch (IOException e){
            System.out.println("error");
        }
    }

    @Test
    public void load_file_with_id_0(){
        ISampleStorage storage = new SampleFileStorage();
        String b64File = storage.getAudioData("0");

        assertNotNull(b64File);
    }

    @Test
    public void load_file_with_id_1(){
        ISampleStorage storage = new SampleFileStorage();
        String b64File = storage.getAudioData("1");

        assertNotNull(b64File);
    }
}