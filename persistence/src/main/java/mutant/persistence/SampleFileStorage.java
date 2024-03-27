package mutant.persistence;

import org.apache.tomcat.util.codec.binary.Base64;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Arrays;


public class SampleFileStorage implements ISampleStorage {
    private static final String PATH = "./samples/";
    private static final File DIRECTORY = new File(PATH);
    @Override
    public String getAudioData(String id) {
        try {
            byte[] bytes = Files.readAllBytes(Paths.get(PATH+"/"+id+".wav"));
            return Base64.encodeBase64String(bytes);
        } catch (IOException e) {
            System.out.println("error: " + e);
        }
        return null;

    }

    @Override
    public String[] getSampleNames() {
        String[] contents = DIRECTORY.list();
        Arrays.sort(contents);
        for (int i = 0; i < contents.length; i++) {
            contents[i] = contents[i].replace(".wav","");
        }
        return contents;
    }

    @Override
    public void storeAudioData(String id, String audioData) {

    }

//    private static String makeB64String(byte[] bytes){
//        try {
//            byte[] bytes = Files.readAllBytes(Paths.get(PATH+"/"+fileName));
//            return Base64.encodeBase64String(bytes);
//        } catch (IOException e) {
//            System.out.println("error: " + e);
//        }
//        return null;
//    }
}
