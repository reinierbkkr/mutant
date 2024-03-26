package mutant.persistence;

import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.IOException;
import mutant.domain.Pattern;

public class JSONProcessor {
    private static final ObjectMapper objectMapper = new ObjectMapper();
    public static String makeJSON(Object object){
        try {
            return objectMapper.writeValueAsString(object);
        }
        catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

    public static Pattern makePattern(String json){
        try {
            return objectMapper.readValue(json, Pattern.class);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }
}
