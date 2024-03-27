package mutant.persistence;

public interface ISampleStorage {
    public String getAudioData(String id);

    public String[] getSampleNames();

    public void storeAudioData(String id, String audioData);

}
