 
//let content= document.getElementById('content')
(async()=>{
    
    let content= document.querySelector('#content')
    const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCw05fUBPwmpu-ehXFMqfdMw&part=snippet%2Cid&order=date&maxResults=9';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'bc2a84acbamsh67e969b56e818b8p1d932fjsn03dad9ee4156',
            'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        res=[...result.items].slice(0,4)
        for (let item of res){
            let html = `
            <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${item.snippet.thumbnails.high.url}" alt="${item.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700" style="color:gray;">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${item.snippet.title}
                    </h4>
                </div>
            </div>
        `
        content.innerHTML +=html
        }
    } catch (error) {
        console.error(error);
    }
})();
