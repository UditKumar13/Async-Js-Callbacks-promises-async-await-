console.log("promise starts here");


const posts = [
    {title : 'post 1' , body : 'this is post 1 '} ,
    {title : 'post 2' , body : 'this is post 2'}
]
 // function declared 
function getPosts(){

    // async req 
    setTimeout ( ()=>{
        let output = '';

        posts.forEach((post , index)=>{
            output += `<li> ${post.title} </li>` ; 
        }); 

        document.body.innerHTML = output ; 
    } ,1000);
}

 // we will learn how to make a promise 


function createPost (post){
    // step 1 . return promise 
    //step 2. promise takes a call back in an arrow function , takes two parameters resolve 
    // and reject 
    //step3 . resolve  a promise successfully then do that in a resolve 
    //when something goes wrong , some error u call reject 
    return new Promise((resolve, reject)=>{
       



        setTimeout(()=>{
            posts.push(post);

            const error = false;
            if (!error){
                // no error 
                resolve(); 

                // when the call gets , once it is done resolving then it triggers then method 
            }

            else{
                reject('Something went wrong');

            }
            
            },2000); 

    }); 
   
    }

createPost({title:'post 3' , body  : 'this is the third post'}).then(getPosts)
.catch(err=>console.log(err));

// lets study abt 
// Promise.all 

const promise1 = Promise.resolve("Hello world !");
const promise2 = 10;

const promise3 = new Promise((resolve,reject)=>{
setTimeout(resolve,2000,'Goodbye');
});
// in the fetch we have to use a extra then because to fomat the response usually in json format 
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

Promise.all([promise1 , promise2, promise3,promise4]).then((values)=>{
console.log(values);
});

// because our promise 3 is taking 2 ms , thats why the output will also depend on the 
// longest time of any promise in promise all
// whatever time the longest promise takes , promise.all also takes that 






