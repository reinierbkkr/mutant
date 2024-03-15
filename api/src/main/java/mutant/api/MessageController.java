package mutant.api;

import mutant.domain.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class MessageController {
    IMessageGetter messageGetter = new MessageGetter();

    @GetMapping("/message")
    public String getMessage(){
        return messageGetter.getMessage();
    }

}
