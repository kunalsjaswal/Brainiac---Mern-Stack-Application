
const arr=[
    {
        name:"kunal"
    },
    {
        name:"sameer"
    }
];

const arr2=[10,20,30,40]

// const arr2=arr.filter((val)=> val===2);
// console.log(arr.filter((val)=> val.name==="kunal"))
// arr2.map((val,index)=>console.log(index))
console.log(arr.findIndex(val=> val.name==="kunal"))

//new change