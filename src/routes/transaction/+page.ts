import { writable } from "svelte/store";
let selectedPerson = writable({})


const selectPerson =(person: any)=>{
    selectedPerson.set(person)
}

export {selectedPerson,selectPerson }