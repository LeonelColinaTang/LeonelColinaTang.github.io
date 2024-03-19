const obj = {
    "tag": "body",
    "attrs": {"id": "app", "class":"myClass"},
    "children": [{"tag":"div", "children":[{"tag":"p"}]}, "hi", {"tag":"button"}],
}

const jsonToHtml = (json, result = '') => {
    let html = JSON.parse(JSON.stringify(json));

    result += `<${html.tag} `;

    if(html.attrs){
        Object.keys(html.attrs).forEach(attribute =>{
            result += `${attribute}="${html.attrs[attribute]}" `;
        });
    };


    if(html.children && html.children.length > 0){
        result += `>`
        html.children.forEach(tag =>{
            if(typeof tag === "object"){
                result += "\n"
                result = `  ` + jsonToHtml(tag, result);
            }else{
                result += tag;
            }          
        })
        result += `</${html.tag} >`
    }else{
        result += `/>`
    }
    return result
}

console.log(jsonToHtml(obj))

module.exports = jsonToHtml