package mutant.domain;

import java.util.List;

public class Track {
    private String sampleId;
    private List<Boolean> beats;

    public String getSampleId() {
        return sampleId;
    }

    public void setSampleId(String sampleId) {
        this.sampleId = sampleId;
    }

    public List<Boolean> getBeats() {
        return beats;
    }

    public void setBeats(List<Boolean> beats) {
        this.beats = beats;
    }
}