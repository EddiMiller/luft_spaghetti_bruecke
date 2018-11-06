
export function addListElement(title, desc, start, end){
    return {type: "LIST_ADD", title: title, desc: desc, start: start, end: end}
}

export function delListElement(id){
	return {type: "LIST_DEL", id: id}
}