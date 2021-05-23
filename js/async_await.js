console.log("async await starts here");


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

    // Async await 

    async function init(){
       await createPost({title:'post 3' , body  : 'this is the third post'});

       getPosts();
    }
// when we write await , we are waiting for createPost to be done .
// and then code move to getPosts() calling 
    init();

    // this was await with promise 



// now await with the fetch 

async function fetchUsers(){

    const res =  await fetch ('https://jsonplaceholder.typicode.com/users');

    const data = await res.json();

    console.log(data);

}

//cleaner the callback 


fetchUsers();

