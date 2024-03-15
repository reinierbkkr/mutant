package mutant.domain;


import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class MessageGetterTest {
    @Test
    public void getMessage() {
        IMessageGetter messageGetter = new MessageGetter();

        String message = messageGetter.getMessage();

        assertEquals("Hello World! (from domain)", message);
    }
}
