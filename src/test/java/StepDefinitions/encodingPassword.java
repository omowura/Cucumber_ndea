package StepDefinitions;

import org.apache.commons.codec.binary.Base64;

public class encodingPassword {

    public static void main(String[] args) {
        String str1 = "summer+2022a@gmail.com";
        byte[] encodedNewString = Base64.encodeBase64(str1.getBytes());
        System.out.println("encoded string:"+new String(encodedNewString));

        String str = "testing123";
        byte[] encodedString = Base64.encodeBase64(str.getBytes());
        System.out.println("encoded string:"+new String(encodedString));

        byte[] decodedString = Base64.decodeBase64(encodedString);
        System.out.println("decoded string:"+new String(decodedString));
    }
}
