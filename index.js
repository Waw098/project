const input = document.getElementById("input")
const convert = document.getElementById("convert")
const m2f = document.getElementById("m2f")
const l2g = document.getElementById("l2g")
const m2k = document.getElementById("m2k")
convert.addEventListener("click",function(){
    let inputdata = input.value
    m2f.textContent = `${inputdata} meters = ${(inputdata * 3.281).toFixed(3)} feet| ${inputdata} feet = ${(inputdata/3.281).toFixed(3)} meter`
    l2g.textContent = `${inputdata} liters = ${(inputdata * 0.264).toFixed(3)} gallons| ${inputdata} gallons = ${(inputdata/0.264).toFixed(3)} liters`
    m2k.textContent = `${inputdata} meters = ${(inputdata * 2.204).toFixed(3)} feet| ${inputdata} feet = ${(inputdata/2.204).toFixed(3)} meter`

    
})