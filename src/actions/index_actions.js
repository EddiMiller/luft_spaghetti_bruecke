
export function addListElement(title, desc){
    return {type: "LIST_ADD", title: title, desc: desc}
}

export function delListElement(id){
	return {type: "LIST_DEL", id: id}
}