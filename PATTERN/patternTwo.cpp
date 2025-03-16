#include <iostream>
using namespace std;


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
void printStarPattern13(int n){
    for (int i = 1; i <= n; i++) {
        // Numbers
        for (int j = 1; j <= i; j++) {
            cout << j;
        }
        // Spaces
        for (int j = 1; j <= 2 * n - 2 * i; j++) {
            cout << " ";
        }
    
        // Numbers
        for (int j = i; j >= 1; j--) {
            cout << j;
        }
        cout << endl;
    }    
}
void printStarPattern14(int n){
    int num=1;
    for(int i=1;i<=n;i++){
        for(int j=1;j<=i;j++){
            cout<< num++<<" ";
        }
        cout<<endl;
    }
}
void printStarPattern15(int n){
    for(int i=0;i<=n;i++){
        for(char ch='A';ch<='A'+i;ch++){
            cout<<ch<<" ";
        }
        cout<<endl;
    }
}
void printStarPattern16(int n){
    for(int i=1;i<=n;i++){
        for(char ch='A';ch<='A'+(n-i);ch++){
            cout<<ch<<" ";
        }
        cout<<endl;
    }
}
void printStarPattern17(int n){
    for(int i=0;i<n;i++){
        // space;
        for(int j=0;j<n-i-1;j++){
            cout<<" ";
        }
        // Characters
        char ch='A';
        int breakpoint=(2*i+1)/2;
        for(int j=1;j<=2*i+1;j++){
            cout<<ch;
            if(j<=breakpoint) ch++;
            else ch--;
        }
        // space
        for(int j=0;j<n-i-1;j++){
            cout<<" ";
        }
        cout<<endl;
    }
}
void printStarPattern18(int n){
    for(int i=0;i<n;i++){
        for(char ch='E'-i;ch<='E';ch++){
            cout<<ch<<" ";
        }
        cout<<endl;
    }
}
void printStarPattern19(int n){
    for(int i=0;i<n;i++){
        for(int j=0;j<n-i;j++){
            cout<<"*";
        }
        // Space
        for(int j=0;j<2*i;j++){
            cout<<" ";
        }
        // Star
        for(int j=0;j<n-i;j++){
            cout<<"*";
        }
        cout<<endl;
    }

    for(int i=1;i<=n;i++){
        for(int j=1;j<=i;j++){
            cout<<"*";
        }

        for(int j=0;j<2*n-2*i;j++){
            cout<<" ";
        }

        for(int j=1;j<=i;j++){
            cout<<"*";
        }
        cout<<endl;
    }
}
void printStarPattern20(int n){
int spaces=2*n-1;
for(int i=1;i<=2*n-1;i++){
    // Stars
    int stars=i;
    if(i>n) stars=2*n-i;
    for(int j=1;j<=stars;j++){
        cout<<"*";
    }
    // Spaces
    for(int j=1;j<=spaces;j++){
        cout<<" ";
    }
    // =Stars
    for(int j=1;j<=stars;j++){
        cout<<"*";
    }
    cout<<endl;
    if(i<n) spaces +=2; 
    spaces -=2;
}
}


int main(){
    int t;
    cin>>t;

    for(int i=0;i<t;i++){
        int n;
        cin>>n;
        cout<<endl;
        
        printStarPattern13(n);
        printStarPattern13(n);
        printStarPattern14(n);
        printStarPattern15(n);
        printStarPattern16(n);
        printStarPattern17(n);
        printStarPattern18(n);
        printStarPattern19(n);
        printStarPattern20(n);
    }    
}