//Simple Encryption #1 - Alternating Split
/*
Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

Examples:

encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
Together with the encryption function, you should also implement a decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive, return the first argument without changes.
Describe(ExampleTests)
{
    It(EncryptTests)
    {
        Assert::That(encrypt("This is a test!", 0), Equals("This is a test!"));
        Assert::That(encrypt("This is a test!", 1), Equals("hsi  etTi sats!"));
        Assert::That(encrypt("This is a test!", 2), Equals("s eT ashi tist!"));
        Assert::That(encrypt("This is a test!", 3), Equals(" Tah itse sits!"));
        Assert::That(encrypt("This is a test!", 4), Equals("This is a test!"));
        Assert::That(encrypt("This is a test!", -1), Equals("This is a test!"));
        Assert::That(encrypt("This kata is very interesting!", 1), Equals("hskt svr neetn!Ti aai eyitrsig"));
    }
    
    It(DecryptTests)
    {
        Assert::That(decrypt("This is a test!", 0), Equals("This is a test!"));
        Assert::That(decrypt("hsi  etTi sats!", 1), Equals("This is a test!"));
        Assert::That(decrypt("s eT ashi tist!", 2), Equals("This is a test!"));
        Assert::That(decrypt(" Tah itse sits!", 3), Equals("This is a test!"));
        Assert::That(decrypt("This is a test!", 4), Equals("This is a test!"));
        Assert::That(decrypt("This is a test!", -1), Equals("This is a test!"));
        Assert::That(decrypt("hskt svr neetn!Ti aai eyitrsig", 1), Equals("This kata is very interesting!"));
    }
    
    It(EmptyTests)
    {
        Assert::That(encrypt("", 0), Equals(""));
        Assert::That(encrypt("", 3), Equals(""));
        Assert::That(decrypt("", 0), Equals(""));
        Assert::That(decrypt("", 3), Equals(""));
    }
};
*/
std::string encrypt(std::string text, int n)
{
    
    std::string buffer = text;

    while(n > 0)
    {
        size_t j = 0;
        for(size_t i = 1; i < text.size(); i += 2)
            buffer[j++] = text[i];
        
        for(size_t i = 0; i < text.size(); i += 2)
            buffer[j++] = text[i];

        text = buffer;
        --n;
    }
    return text;
}

std::string decrypt(std::string encryptedText, int n)
{
    std::string buffer = encryptedText;
       
    while(n > 0)
    {
        size_t j = 0;
        for(size_t i = encryptedText.size()/2; i < encryptedText.size(); i++)
        {
            buffer[j++] = encryptedText[i];
            buffer[j++] = encryptedText[i - encryptedText.size()/2];
        }        
        encryptedText = buffer;
        --n;
    }
    return encryptedText;
}
