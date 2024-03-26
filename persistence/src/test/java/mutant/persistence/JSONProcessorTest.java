package mutant.persistence;

import org.junit.jupiter.api.Test;
import mutant.domain.Pattern;
import mutant.domain.Track;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;


public class JSONProcessorTest {
    @Test
    public void makejsonfrompatterntest(){
        Pattern pattern = new Pattern();
        Track track = new Track();
        track.setSampleId("1");
        List<Boolean> beats = new ArrayList<>();
        beats.add(true);
        track.setBeats(beats);
        List<Track> tracks = new ArrayList<>();
        tracks.add(track);
        pattern.setTracks(tracks);
        pattern.setName("a");
        pattern.setLength(1);

        String expectedJson = "{\"name\":\"a\",\"tracks\":[{\"sampleId\":\"1\",\"beats\":[true]}],\"length\":1}";
        String generatedJson = JSONProcessor.makeJSON(pattern);

        assertEquals(expectedJson, generatedJson);

    }

    @Test
    public void makePatternfromjsontest(){
        String json = "{\"name\":\"a\",\"tracks\":[{\"sampleId\":\"1\",\"beats\":[true]}],\"length\":1}";
        Pattern pattern = JSONProcessor.makePattern(json);

        assertEquals("a",pattern.getName());
        assertEquals(true, pattern.getTracks().get(0).getBeats().get(0));
    }
}
