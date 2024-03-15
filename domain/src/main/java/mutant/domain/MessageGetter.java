package mutant.domain;

public class MessageGetter implements IMessageGetter{
    @Override
    public String getMessage() {
        return "Hello World! (from domain)";
    }
}
