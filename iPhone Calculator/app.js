function btn(e){
    document.getElementById('inp').value += e
}
function equal(){
    let a =  document.getElementById('inp')
    a.value = eval(a.value)

}
function delall(){
    let b = document.getElementById('inp')
    b.value = ''
}
function del(){
    let c = document.getElementById('inp')
    c.value = c.value.slice(0, -1)
}