#include <iostream>
using namespace std;
void printStarPatternOne(int n){
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            cout<<" *";
        }
        cout<<endl;
    }
}
void printStarPatternTwo(int n){
    for(int i=0;i<n;i++){
        for(int j=0;j<=i;j++){
            cout<<" *";
        }
        cout<<endl;
    }
}
void printStarPatternThree(int n){
    for(int i=0;i<n;i++){
        for(int j=0;j<i;j++){
            cout << j << " ";
        }
        cout<<endl;
    }    
}
void printStarPatternFour(int n){
    for(int i=1;i<=n;i++){
        for(int j=1;j<=i;j++){
            cout << i << " ";
        }
        cout<<endl;
    }    
}
void printStarPatternFive(int n){
    for(int i=1;i<=n;i++){
        for(int j=1;j<=n;j++){
            cout<<i<<" ";
        }
        cout<<endl;
    }    
}
void printStarPatternSix(int n){
    for(int i=1;i<=n;i++){
        for(int j=1;j<=n-i+1;j++){
            cout<<"* ";
        }
        cout<<endl;
    }    
}
void printStarPatternSeven(int n){
    for(int i=1;i<=n;i++){
        for(int j=1;j<=n-i+1;j++){
            cout<<j<<" ";
        }
        cout<<endl;
    }    
}
void printStarPatternEight(int n){
    for(int i=1;i<=n;i++){
        for(int j=1;j<=n-i+1;j++){
            cout<<i<<" "; 
        }
        cout<<endl;
    }    
}
void printStarPatternNine(int n){
    for(int i=0;i<n;i++){
        //  space
        for(int j=0;j<=n-i-1;j++){
            cout<<" ";
        }
        // stars
        for(int j=0;j<2*i+1;j++){
            cout<<"*";
        }
        // space
        for(int j=0;j<=n-i-1;j++){
            cout<<" ";
        }
        cout<<endl;
    }
}
void printStarPatternTen(int n){
    for(int i=0;i<n;i++){
        //  space
        for(int j=0;j<i;j++){
            cout<<" ";
        }
        // stars
        for(int j=0;j<2*n-(2*i+1);j++){
            cout<<"*";
        }
        // space
        for(int j=0;j<i;j++){
            cout<<" ";
        }
        cout<<endl;
    }
}
void printStarPatternEleven(int n){
    for(int i=0;i<2*n-1;i++){
        int stars=i;
        if(i>n) stars=2*n-i;
        for(int j=0;j<stars;j++){
            cout<<"*";
        }
        cout<<endl;
    }
}
void printStarPattern12(int n){
    int start=1;
    for(int i=0;i<=n;i++){
        if(i%2==0) start=1;
        else start=0;
        for(int j=0;j<=i;j++){
            cout<<start<<" ";
            start=1-start;
        }
        cout<<endl;
    }
}



int main(){
    int t;
    cin>>t;

    for(int i=0;i<t;i++){
        int n;
        cin>>n;
        cout<<endl;
        printStarPatternOne(n);
        printStarPatternTwo(n);
        printStarPatternThree(n);
        printStarPatternFour(n);
        printStarPatternFive(n);
        printStarPatternSix(n);
        printStarPatternSeven(n);
        printStarPatternEight(n);
        printStarPatternNine(n);
        printStarPatternTen(n);
        printStarPatternEleven(n);
        printStarPattern12(n);
    }    
}