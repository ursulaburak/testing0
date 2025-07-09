import { describe, dexcribe } from "vitest";

describe("ErrorMessage", ()=>{
    console.log("Something 1")
    it ("prop yokken default error", ()=> {
        console.log("Something 2")
    })
    it ("diğer test", () =>{
        console.log("Something 3")
    })
    it ("diğer test 2", ()=>{
        console.log("Something 4")
    })

    describe("İç ErrorMessage", ()=>{
        console.log("İç Something 1")
        it ("iç prop yokken default error", ()=> {
            console.log("İç Something 2")
        })
        it ("iç diğer test", () =>{
            console.log("İç Something 3")
        })
        it ("iç diğer test 2", ()=>{
            console.log("İç Something 4")
        })
    })
})

describe("Dış ErrorMessage", ()=>{
    console.log("Dış Something 1")
    it ("dış prop yokken default error", ()=>{
        console.log("Dış Something 2")
    })
    it ("dış diğer test", () =>{
        console.log("Dış Something 3")
    })
    it ("dış diğer test 2", ()=>{
        console.log("Dış Something 4")
    })
})

