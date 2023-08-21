export default async function GetAllPosts(){
    const res = await fetch("https://basic-blog.teamrabbil.com/api/post-list/1");

    if(!res.ok){
        throw new Error ('Error Fetching posts')
    }
    else{
        return  res.json();
    }
}