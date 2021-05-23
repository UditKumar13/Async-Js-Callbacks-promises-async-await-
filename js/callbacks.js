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


getPosts(); // calling 