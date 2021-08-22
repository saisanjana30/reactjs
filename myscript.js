const react=document.getElementById("reactdigi");
const js=document.getElementById("jsdigi");
const render = () => {
    js.innerHTML=`<div class="split"> JStemplate <input/> <p>${new Date()}</p> </div>`;

    const divtorender = React.createElement('div',{class:"split"},
    "Rectjs ",React.createElement("input"),React.createElement("p",null,new Date().toString()));

     ReactDOM.render(divtorender,react);
}
setInterval(render,1000);


