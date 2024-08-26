const fetchdata = async (config) => {
    try{
        const res= await axios(config);
        return res.data;
}catch (error){
    throw Error("data is not fetched");
}
};
 


const postsel=document.querySelector(".posts");

const dataload = async () => {
    const d = await fetchdata("https://jsonplaceholder.typicode.com/posts");
    d.map((p)=>{
        const postelement= document.createElement("div");
        postelement.classList.add("post");
        postelement.innerHTML=`
        <h4 class="post-title">${p.title}</h4>
        <p class="body">${p.body}</p> 
        `;
        postsel.appendChild(postelement);
        
    });
    
};
dataload();