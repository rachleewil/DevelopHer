// access API
fetch("https://www.reddit.com/r/aww/.json")
// turn into json format
.then(response => response.json()) 
// excute function once promise is resolved, arrow function gets title data
.then(data => {
    console.log(data);
    // console.log(data.data.children);
    // console.log(data.data.children.map(item => item.data.title));
    // console.log(data.data.children.map(item => item.data.thumbnail));
    // console.log(data.data.children.map(item => item.data.url));

    // get div id from html file 
    const allData = document.getElementById("output");

    // create an unordered list tag to put data in
    const unorderedList = document.createElement("ul");

    // put the unordered list tag in the div
    const answer = allData.appendChild(unorderedList);

    // find the api's data for "title" by using a for loop (data format goes data --> children --> indexs[0])
    //     for(let titles of data.data.children)
    // so we map (loop) through each index[0] item looking for a title (data format under each index goes data --> title)
    //     .map(item => item.data.title))
    for(let titles of data.data.children.map(item => item.data.title)) {
        // create a list tag for each title in the data
        const listItem = document.createElement("li");
        // create a variable to append the list to the unordered list
        const newAnswer = answer.appendChild(listItem);
        // create a h2 heading tag for each title in the data
        const headings = document.createElement("h2");
        // put the title inside the h2 heading
        headings.innerText = titles;
        // append the h2 headings to the list tag that is inside of the unordered list (ul, li, h2)
        newAnswer.appendChild(headings);
    }

    // find the api's data for "thumbnail" by using a for loop (data format goes data --> children --> indexs[0])
    //     for(let thumbnails of data.data.children)
    // so we map (loop) through each index[0] item looking for a thumbnail (data format under each index goes data --> thumbnail)
    //     .map(item => item.data.thumbnail))
    for(let thumbnails of data.data.children.map(item => item.data.thumbnail)) {
        // create an image tag for each thumbnail in the data
        const images = document.createElement("img");
        // append the image tag to the unordered list
        answer.appendChild(images);
        // add src to the images
        images.src = thumbnails;
        // append the images to the unordered list
        answer.appendChild(images);
    }

    // find the api's data for "url" by using a for loop (data format goes data --> children --> indexs[0])
    //     for(let urls of data.data.children)
    // so we map (loop) through each index[0] item looking for a url (data format under each index goes data --> url)
    //     .map(item => item.data.url))
    for(let urls of data.data.children.map(item => item.data.url)) {
        // create an a tag for each url in the data
        const links = document.createElement("a");
        // append the image tag to the unordered list
        answer.appendChild(links);
        // add src to the images
        links.href = urls;

        links.innerHTML = "Click me";
        // append the images to the unordered list
        answer.appendChild(links);
    }
});
