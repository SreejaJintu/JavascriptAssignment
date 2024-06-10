// Create a program that asks the user for two numbers and prints their sum.
let num1=5
let num2=6
let sum=num1+num2
console.log('sum='+sum)
// Implement a program that calculates the area of a rectangle using given length and width.
let len=10,bred=20,area
area=len*bred
console.log('Area='+area)
// Create a program that asks the user for their age and determines if they are eligible to vote (considering a voting age of 18).
let age=50
if(age>=18)
    {
        console.log('You are eligible to vote')
    }
    else{ console.log('You are not eligible to vote') }
     
    // Write a script that takes a user's grade as input and outputs whether they passed or failed (assuming the passing grade is 60 or above).
    let mark=50
    if(mark>=60)
        {
            console.log('You are passed')
        }
        else{ console.log('You are failed') }
        // Implement a program that checks if a user's entered number is positive, negative, or zero.
        let digit=5
        if(digit>0)
            {
                console.log('Number is +ve') 
            }
           else if(digit<0)
                {
                    console.log('Number is -ve') 
                }
                
              else if(digit=0)
                    {
                        console.log('Number is zero') 
                    }    
    //Write a script that takes a user's age and checks if they are a child (0-12), teenager (13-19), adult (20-59), or senior (60 and above).

 let age1=5
        if(age1<=12)
            {
                console.log('you are a child') 
                
            }

           else if(age1>=13||age1<=19)
                {
                    console.log('you are a teenager') 
                }
                
                else if(age1>=20||age1<=59)
                    {
                        console.log('you are an adult') 
                    }    
                    else if(age1>=60)
                        {
                            console.log('you are a senior citizen') 
                        }  
    //  find the square of each number in an array=[1,3,9,12,15,18,21] using loop
    let array1=[1,3,9,12,15,18,21]
    for(i=0;i<=6;i++){
        let square=array1[i]**2
        console.log('square of '+ array1[i] +'  '+ 'is  ' +square)
    }
    // Write a program to find the sum of all the odd numbers for a given limit (if you choose limit as 10 then need to find the sum of all odd numbers in between 1 and 10 )
    let sum1=0
    for(i=1;i<10;i+=2)
       
        {
          sum1+=i
        }
        console.log('sum of odd numbers up to 10 is  '+sum1)
