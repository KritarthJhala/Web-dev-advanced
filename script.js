// // console.log("Hello World")
// // let a=56;
// // a=244
// // let c;
// // c=2324

// //     const b=2313;

// // console.log(a)
// // console.log(b)
// // let num=123.135
// // console.log(num.toFixed(2))

// // let data={
// //     name:'Kritarth',
// //     rollnumber:1231224,
// //     age:18
// // }

// // console.log(data.name)
// // console.log(data.rollnumber)
// // console.log(data.age)

// // arr=['Kritarth', 1231224,18]
// // console.log(arr[1])
// // a=a-240
// // console.log(a)

// // function outer(){
// //     let count=0
// //     function inner(){
// //         count=count+1
// //         console.log(count)
// //     }
// //     return inner
// // }

// // const fn=outer()
// // // fn()
// // // fn()
// // // fn()

// // function callback(){
// //     console.log('Hello World')
// // }

// // function sample(callback){
// //     callback()  
// // }
// // sample(callback)

// // let a = [1,2,3,4,5,6,'Hello world']
// // console.log(a)
// // a[7]='Hello'
// // a.push(788)
// // console.log(a)  
// // console.log(a.length)

// // let str='abcd'
// // a.pop()
// // a.push(str)
// // console.log(a)



// // let arr=[1,2,3,4,5,6,7,8]
// // const newarr=arr.map((ele)=>{
// //     return ele*2
// // })
// // console.log(newarr)

// // let arr=[1,2,3,4,5,6,7,8]
// // console.log(arr)
// // const filteredData=arr.filter((ele)=>{
// //     return ele>4;
// // })
// // console.log(filteredData)

// // let a="JAVA SCRIPT"
// // let b=a.substring(0,5)
// // alert(b)
// // let x=45
// // x/=5
// // alert(x)
// // const para=document.querySelector(".para")
// // para.textContent="This is updated one"
// // para.style.color="green"
// // console.log(para)

// // const container=document.querySelector(".container")
// // container.innerHTML="<h1>This is a heading</h1>"
// // console.log(container)

// // const click=document.querySelector("#btn1")
// // click.classList.add("btn")

// // const remove=document.querySelector("#btn2")
// // remove.classList.add("btn")

// // const btn=document.querySelector('#btn3')
// // btn.classList.add('btn')

// // function show(){
// //     alert("You have clicked the button")
// // }

// // function removed(){
// //     alert('Event removed')
// //     click.addEventListener('click', function(){
// //         alert('No Event present')
// //     })
// //     click.removeEventListener("click",show)
// // }
// // click.addEventListener('click', show)
// // remove.addEventListener("click", removed)

// const btn=document.querySelector('#btn3')
// // btn.classList.add('btn')

// btn.addEventListener('keyup', (event)=>{
//     console.log(event.key)
// })

// const form=document.querySelector("form")
// form.addEventListener('submit'), (event)=>{
//     event.preventDefault()
//     console.log(event.srcElement[0].value)
//     console.log(event.srcElement[1].value)
//     console.log(event)
//     console.log('button clicked')}

// debugger
// console.log(a)
// print()
// var a=3453;
// let b=456;

// console.log(a)
// console.log(b)


// function print(){
//     console.log("inside function")
// }

// print()

// setInterval(()=>{console.log("printing at every two seconds")},2000)

// const timeout=setTimeout(()=>{console.log("After 2 sec")},2000)
// clearTimeout(timeout)

// n=0
// const timer=setInterval(()=>{
//     n+=1
//     console.log(n)
//     if(n===10){
//         clearInterval(timer)
//         console.log("Timer ended")
//     }
// },1000)


// console.log("Starting homework...");

// setTimeout(()=>{
//     console.log("Homework done!");
//     console.log("Starting dinner...");
    
//     setTimeout(()=>{
//         console.log("Dinner done!");
//         console.log("Getting ready to go out...");

//         setTimeout(()=>{
//             console.log("Going to the playground");
//         },1000);
//     },1500);
// },2000);

// function finishHomework(callback) {
//     console.log("Starting Homework...");
//     setTimeout(()=>{
//         console.log("Homework done");
//         callback();
//     },2000);
// }

// function eatDinner(callback){
//     console.log("Starting dinner...");
//     setTimeout(()=>{
//         console.log("Dinner done");
//         callback();
//     },1500);
// }

// function goToPlayground(){
//     console.log("Going to the playground");
// }

// finishHomework(()=>{
//     eatDinner(()=>{
//         goToPlayground();
//     });
// });

// const p= new Promise((res,rej)=>{
//     console.log("Going to do the Homework")

//     setTimeout(()=>{
//         const done=true;
//         if(done){
//             res("Success")
//         }
//         else{
//             rej("Failed to fetch data from the server")
//         }
//     },3000)
// })
// p.then((a)=>{
//    console.log(a)
// }).catch((err)=>{
//     console.log(err)
// })

// function doHomework(){
//     const p=new Promise((res,rej)=>{
//         setTimeout(()=>{
//             let done=true;
//             if(done){
//                 console.log("Homework complete!!")
//                 res("Homework done!")
//             }
//             else{
//                 rej("Homework not done!!")
//             }
//         },2000)
//     })
//     return p;
// }

// function eatDinner(){
//     const p=new Promise((res,rej)=>{
//         setTimeout(()=>{
//             let done=false;
//             if(done){
//                 console.log("Dinner complete!!")
//                 res("Dinner done!")
//             }
//             else{
//                 rej("Dinner not done!!")
//             }
//         },2000)
//     })
//     return p;
// }

// function goToPlayground(){
//     const p=new Promise((res,rej)=>{
//         setTimeout(()=>{
//             let done=true;
//             if(done){
//                 console.log("Went to PG")
//                 res("PG Time")
//             }
//             else{
//                 rej("Not allowed")
//             }
//         },2000)
//     })
//     return p;
// }

// doHomework().then((data)=>{
//     console.log(data)
//     return eatDinner()
// }).then((data)=>{
//     console.log(data)
//     return goToPlayground()
// }).catch((err)=>{
//     console.log("Error",err)
// }).finally(()=>{
//     console.log("Go to Sleep!")
// });

// console.log("It's the first line")
// try{
//     let age=19;
//     if(age<18){
//         throw new Error("you are not eligible")        
//     }
//     let sample;
//     for (let i=0; i<10, i++;)
//          {
//         sample=i
//     }
// }
// catch(error){
//     console.log(error)
//     throw new Error("Something went wrong")
// }
// finally{
//     console.log("Finally Block")
// }

// async function getData(){
//     try{
//         const response=await fetch("https://dummyjson.com/products")
//     const data=await response.json()
//     console.log(response.ok)
//     if(!response){
//         throw new Error("Something went wrong")
//     }
//     data.products.foreach((product)=>{
//         console.log(product.title)
//     })
//     }
//     catch(error){
//         console.log(error)
//     }
// }
// getData()

// async function getData(){
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
//             method:"POST",
//             headers:{
//                 "Content-Type":"application/json"
//             },
//             body:JSON.stringify({
//                 title:"foo",
//                 body:"bar",
//                 userID:1
//             })
//         })
//         if(!response.ok){
//             throw new Error("Something went wrong")
//         }
//     const data=await response.json()
//     console.log(data) 
//     }
// }

// function* generate(){
//     yield 1
//     yield 2
//     yield 3
// }

// const res=generate()
// console.log(res.next())
// console.log(res.next())
// console.log(res.next())
// console.log(res.next())

// function add(a){
//     return function(b){
//         return function(c){
//             return a+b+c
//         }
//     }
// }

// const add=a=>b=>c=>a+b+c

// console.log(add(2))

// {
//     let a = 515
//     console.log(a)
// }
// console.log(a)

// let arr=[1,2,3,4,5]
// let sum=0
// let map=arr.map((i)=>{return sum+=i})
// alert(map)

// let btn = document.createElement("Button");
// btn.innerText="Click Me!";

// btn.style.backgroundColor="red";
// btn.style.color="white"

// document.querySelector("body").prepend(btn)


// let para=document.createElement("p")
// para.innerText="This is a paragraph"


//Function GetData
function getData(dataId, getNextData){
    setTimeout(()=>{
        console.log("data:", dataId);
        if (getNextData){
            getNextData();
        }
    },2000);
}

//Callback Hell

// getData(1,()=>{
//     console.log("Getting data 2 ....");
//     getData(2,()=>{
//         console.log("Getting data 3 ....");
//         getData(3,()=>{
//             console.log("Getting data 4")
//             getData(4)
//         });
//     });
// });


//Promises
// function asyncFunc1(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("data1");
//             resolve("success");

//         },4000);
//     });
// }
// function asyncFunc2(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("data2");
//             resolve("success");
//         },4000);
//     });
// }
// console.log("fetching data1....");
// asyncFunc1().then((res)=>{
//     console.log("fetching data2....");
//     asyncFunc2().then((res)=>{});
// });

//Promise chain
// console.log("getting data 1....")
// getData(1)
//     .then((res)=>{
//         console.log("getting data 2....");
//         return getData(2);
//     })
//     .then((res)=>{
//         console.log("getting data 3....");
//         return getData(3);
//     })
//     .then((res)=>{
//         console.log(res);
//     });

//Async-await
// async function getAllData(){
//     console.log("getting data 1....");
//     await getData(1);
//     console.log("getting data 2....");
//     await getData(2);
//     console.log("getting data 3....");
//     await getData(3);
//     console.log("getting data 4....");
//     await getData(4);
//     console.log("getting data 5....");
//     await getData(5);
// }

let btn = document.queryselector("#btn1")

async function getfacts(){
    console.log("getting data....");
    let response = await fetch("https://cat-fact.herokuapp.com/facts");
    console.log(response);
    let data = await response.json(); 
    factPara.innerText = data[0].text;
};

btn.addEventListener("click", getfacts)