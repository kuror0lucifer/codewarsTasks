/*
Call thirt the function which processes this sequence of operations on an integer n (>=0). thirt will return the stationary number.

thirt(1234567) calculates 178, then 87, then 87 and returns 87.

thirt(321) calculates 48, 48 and returns 48
void testing(long long ans, long long sol)
{
    Assert::That(ans, Equals(sol));
}

Describe(thirt_Tests)
{
    It(Fixed_Tests)
    {
        testing(Thirteen::thirt(8529), 79);
        testing(Thirteen::thirt(85299258), 31);
        testing(Thirteen::thirt(5634), 57);
        testing(Thirteen::thirt(1111111111), 71);
        testing(Thirteen::thirt(987654321), 30);
    }
};



*/

class Thirteen
{
public:
    static long long thirt(long long n) {
      std::string x = std::to_string(n);
    
    int arr[6] = {1, 10, 9, 12, 3, 4};
    long long ret;
    while(x.size()!=2){
        ret=0;
        for(int i=x.size()-1;i>=0;--i){
            int c = int(x[i])-'0';
            ret+=c*((arr[(x.size()-1-i)%6])%13);
        }
        x=std::to_string(ret);
    }
    return ret;
    }
};

