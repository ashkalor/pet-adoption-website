#include <bits/stdc++.h>

using namespace std;

int main()
{
    int num;
    cin>>num;
    if( num % 2 == 1 || (num > 5 && num < 21))
    printf("Weird");
    else
    printf("Not Weird");
}