const selectPlan =(planNumber) => {
    const ostatni= document.querySelector("#plan1")
    ostatni.classList.remove("plan--selected")

    const ostatni2= document.querySelector("#plan2")
    ostatni2.classList.remove("plan--selected")

    const ostatni3 = document.querySelector("#plan3")
    ostatni3.classList.remove("plan--selected")

    
    const prvek= document.querySelector(`#plan${planNumber}`)
    prvek.className="plan--selected"

}

selectPlan (1)

