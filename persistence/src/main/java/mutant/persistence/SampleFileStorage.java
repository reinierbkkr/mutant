package mutant.persistence;

import org.apache.tomcat.util.codec.binary.Base64;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;


public class SampleFileStorage implements ISampleStorage {
    private static final String PATH = "./samples/";
    @Override
    public String getAudioData(String id) {
        File directoryPath = new File(PATH);
        String[] contents = directoryPath.list();
        String fileName;
        int idNumber = Integer.parseInt(id);
        if (idNumber < 0 || idNumber > contents.length-1){
            System.out.println("invalid id");
        } else {
            fileName = contents[idNumber];
            return makeB64String(fileName);
        }
        return null;
    }

    @Override
    public void storeAudioData(String id, String audioData) {

    }

    private static String makeB64String(String fileName){
        try {
            byte[] bytes = Files.readAllBytes(Paths.get(PATH+"/"+fileName));
            return Base64.encodeBase64String(bytes);
        } catch (IOException e) {
            System.out.println("error: " + e);
        }
        return null;
    }
}
