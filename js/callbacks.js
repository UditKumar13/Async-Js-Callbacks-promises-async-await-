/*
console.log("callbacks start here");


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


function createPost (post){
setTimeout(()=>{
posts.push(post); 
},2000) ; 
}
problem with it , it will not able to show as post 3 on the screen , because we have showed the output after 
1 ms and we are creating post 3 later 

// we can solve this problem by using the callbacks 
// Problem is to show all post 1,2,3 on screen 
// solution : first add the post 3 to posts and then show them how to do that 
//with help of callback
function createPost (post , callback){
    setTimeout(()=>{
    posts.push(post); 
    callback();  // it will call getPosts() now after pushing 3rd post
    },2000) ; 
    }

createPost({title:'post 3' , body  : 'this is the third post'},getPosts);

*/