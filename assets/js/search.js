export function findElementById(id) {
    // Return the element in the DOM with corresponding `id`

    // Your code here
    let stack = [...document.body.children];

    while(stack.length){
        let currNode = stack.pop()
        
        if(currNode.id === id){
            return currNode
        }

        if(currNode.children){
            stack.push(...currNode.children)
        }
    }

    return null;
}

export function findFirstElementOfTag(tag) {
    // Return the first occurence of an element of tag name `tag`

    // Your code here
    let queue = [...document.body.children];

    while(queue.length) {
        let currNode = queue.shift();

        if(currNode.tagName === tag){
            return currNode
        }

        if(currNode.children){
            queue.push(...currNode.children)
        }
    }

    return null;
}

export function findFirstElementOfClass(cls) {
    // Return the first occurence of an element of class `cls`

    // Your code here
    let quoue = [...document.body.children];

    while (quoue.length) {
        let currNode = quoue.shift();

        if (currNode.classList.contains(cls)) {
            return currNode
        }

        if (currNode.children) {
            quoue.push(...currNode.children);
        }

    }
    return null
}

export function findElementsOfTag(tag) {
    // Return an array of elements that have a tag name of `tag`

    // Your code here
    let stack = [...document.body.children]
    let identicalTags = []

    while(stack.length){
        let currNode = stack.pop();

        if(currNode.tagName === tag){
            identicalTags.push(currNode)
        }

        if (currNode.children){
            stack.push(...currNode.children)
        }
    }

    return identicalTags
}

export function findElementsOfClass(cls) {
    // Return an array of elements that have are of class `cls`


    // Your code here
    let stack = [...document.body.children]
    let identicalClasses = [];

    while(stack.length){
        let currNode = stack.pop();

        if(currNode.className === cls){
            identicalClasses.push(currNode)
        }

        if (currNode.children){
            stack.push(...currNode.children)
        }
    }

    return identicalClasses;
}