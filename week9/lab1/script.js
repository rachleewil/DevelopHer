// access API
fetch("https://www.reddit.com/r/aww/.json")
// turn into json format
.then(response => response.json()) 
// excute function once promise is resolved, arrow function gets data
.then(data => {
    // console.log(data);
    console.log(data.data.children);
    // console.log(data.data.children.map(item => item.data.title));
    // console.log(data.data.children.map(item => item.data.thumbnail));
    // console.log(data.data.children.map(item => item.data.url));

    // get div id from html file 
    const outputDiv= document.getElementById("output");

    // find the api's data by using a for loop (data format goes data --> children --> indexs[0])
    // (loop) through each index[0] item looking for a title, image, and url (data format under each index goes data --> title/ data --> thumbnail/ data --> url)
    for(let items of data.data.children) {
        // create a div tag to store data
        const newDiv = document.createElement("div");
        // create a variable to append the new div to the div in the html file
        const allData = outputDiv.appendChild(newDiv);
        // create a h2 heading tag for each title in the data
        const postTitle = document.createElement("h2");
        // put the title inside the h2 heading
        postTitle.innerHTML = items.data.title;
        // append the h2 headings to the div tag (div, div, h2)
        allData.appendChild(postTitle);
        // create a paragraph tag for each author in the data
        const postAuthor = document.createElement("p");
        // put the author inside the paragraph
        postAuthor.innerHTML = "Author: " + items.data.author;
        // append the paragraph text to the div tag (div, div, h2, p)
        allData.appendChild(postAuthor);
        // remove the images that are titled "default"
        if(items.data.thumbnail != "default") {
            // create an image tag for each thumbnail in the data
            const images = document.createElement("img");
            // add src to the images
            images.src = items.data.thumbnail;
            // add image width to the images
            images.width = items.data.thumbnail_width;
            // add image height to the images
            images.height = items.data.thumbnail_height;
            // append the images to the div tag (div, div, h2, p, img, width, height)
            allData.appendChild(images);
        }
        // create an a tag for each url in the data
        const links = document.createElement("a");
        // add src to the images
        links.href = items.data.url;
        // add text for the url
        links.innerHTML = "Click for More Information";
        // open link in a new tab
        links.target="_blank";
        // append the images to the div tag (div, div, h2, p, img, width, height, a)
        allData.appendChild(links);
    }
});

