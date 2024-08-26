
for(let i=0; i<=10; i++)
{
    console.log(i);
}

//multiplication
for(let i=1; i<=10; i++)
    {
        console.log(`5 * ${i} = ${5*i}`);
    }
    
//while loop
let i=0;
let sum=0;
while(i<=10)
{
   sum=sum+i;
   i++;
}
console.log(sum);

// print 10 to 1;
let j=10;
while(j>=0)
{
    console.log(j);
    j--;
}

//do-while
// 1 to 5
let a=1;
do{
    console.log(a);
    a++;
}while(a<=5)

    //factorial
    let b=1;
    let result=1;
do{
    result=result*b;
    b++;
}while(b<=5)
    console.log(result);

    // star
    for(let i=1; i<=5; i++)
    {
        console.log('*'.repeat(i));
    }

    for(let i=1; i<=5; i++)
        {
            let s="";
            for(let j=1; j<=i; j++)
                {
                    s=s+"*";
                }
                console.log(s);
        }
    
        // skip 5 with continue 
        for(let i=0; i<=10; i++)
            {
                if(i==5)
                {
                    continue;
                }
                console.log(i);
            }
        // break at 7
        for(let i=0; i<=10; i++)
            {
                if(i==8)
                {
                    break;
                }
                console.log(i);
            }
