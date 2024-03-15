package mutant.persistence;

public interface ISampleStorage {
    public String getAudioData(String id);

    public void storeAudioData(String id, String audioData);

}
