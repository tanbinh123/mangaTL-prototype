package com.wiryaimd.mngtldemo1.api;

public class MSTranslator {

    public interface Listener{
        void complete(String translated, String source);
        void fail(String msg);
    }

}
