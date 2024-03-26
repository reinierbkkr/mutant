package mutant.persistence;

import mutant.domain.Pattern;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class SQLitePatternStorageTest {
//    @Test
//    public void storeandretrievefromdatabasetest(){
//        SQLitePatternStorage storage = new SQLitePatternStorage("database");
//
//        String json = """
//                {
//                    "name": "goodone",
//                    "tracks": [
//                        {
//                            "sampleId": "0",
//                            "beats": [
//                                true,
//                                false,
//                                true,
//                                false,
//                                true,
//                                false,
//                                true,
//                                false,
//                                true,
//                                false,
//                                true,
//                                false,
//                                true,
//                                true,
//                                false,
//                                false
//                            ]
//                        },
//                        {
//                            "sampleId": "1",
//                            "beats": [
//                                false,
//                                false,
//                                true,
//                                false,
//                                false,
//                                false,
//                                true,
//                                false,
//                                false,
//                                false,
//                                true,
//                                false,
//                                false,
//                                false,
//                                true,
//                                false
//                            ]
//                        }
//                    ],
//                    "length": 16
//                }""";
//
//        Pattern pattern = JSONProcessor.makePattern(json);
//        storage.storePattern(pattern.getName(), pattern);
//
//        Pattern retrievedPattern = storage.getStoredPattern(pattern.getName());
//
//        storage.close();
//
//        assertEquals(pattern.getName(), retrievedPattern.getName());
//        assertEquals(true, pattern.getTracks().get(0).getBeats().get(0));
//
//    }

}
