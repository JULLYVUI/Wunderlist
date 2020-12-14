var checkboxSVG = '<svg class="task-check" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;stroke: rgba(0,0,0,0.35);"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g> </svg>';
var starSVG = '<svg width="18px" class="task-star" id="task-star" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"> <g> <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path> </g> </svg>';
var starckSVG = '<svg width="22px" height="44px" class="star-dd" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path> </g> </svg>';
var checkdeSVG = '<svg class="checkdele" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path> <path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path> </g> </svg>';
// Xu ly User-tool when click
window.addEventListener('load', function() {
    document.getElementById("dropdown").addEventListener('click', function() {
        var user = document.getElementById('user-ck');
        if (user.style.display == 'block') {
            user.style.display = 'none';
        } else {
            user.style.display = 'block';
        }
    });
    document.getElementById("body").addEventListener('click', e => {
        var user = document.getElementById('user-ck');
        var usertool = document.getElementsByClassName('user-tool')[0];
        if (!user.contains(e.target) && (!usertool.contains(e.target))) {
            user.style.display = 'none';
        }
    })
});
//SEARCH TASKLIST TODO
// document.getElementById("defaultOpen").click();

var search = document.getElementById("searhTask");
search.addEventListener("keyup", Search);

function Search() {
    var valsearch, taskIt, valuItem, i, span;
    valsearch = search.value.toUpperCase();
    taskIt = document.getElementsByClassName("taskItem");
    for (i = 0; i < taskIt.length; i++) {
        span = taskIt[i].getElementsByTagName("span")[0];
        valuItem = span.innerText;
        if (valuItem.toUpperCase().indexOf(valsearch) > -1) {
            taskIt[i].style.display = "";
        } else {
            taskIt[i].style.display = "none";
            // document.getElementById("todo").innerHTML = "Nothing";

        }
    }

}

// CreateList


document.getElementById('CreateList').addEventListener('keydown', function(e) {
    var text = this.value;

    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
        if (text.trim().length > 0) {
            CreateList(text);
            console.log(text);
        }

    }
});
document.getElementById("btSaveList").addEventListener('click', CreateList);

function CreateList(text) {
    AddCreateList(text);
    document.getElementById('CreateList').value = '';
};

function AddCreateList() {
    if (document.getElementById('CreateList').value.trim().length > 0) {

        var li = document.createElement("li");
        li.className = "list";

        var a = document.createElement("a");
        a.insertAdjacentHTML('beforeend', `<span class="list-icon"><svg class="list rtl-flip" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g id="Web-svgs" stroke="none" stroke-width="1" fill-rule="evenodd"> <g id="list"> <path d="M3,7 C2.44,7 2,6.56 2,6 L2,5 C2,4.44 2.44,4 3,4 L4,4 C4.56,4 5,4.44 5,5 L5,6 C5,6.56 4.56,7 4,7 L3,7 Z M4,5 L3,5 L3,6 L4,6 L4,5 Z M7.5,6 C7.22,6 7,5.78 7,5.5 C7,5.22 7.22,5 7.5,5 L17.5,5 C17.78,5 18,5.22 18,5.5 C18,5.78 17.78,6 17.5,6 L7.5,6 Z M3,12 C2.44,12 2,11.56 2,11 L2,10 C2,9.44 2.44,9 3,9 L4,9 C4.56,9 5,9.44 5,10 L5,11 C5,11.56 4.56,12 4,12 L3,12 Z M4,10 L3,10 L3,11 L4,11 L4,10 Z M7.5,11 C7.22,11 7,10.78 7,10.5 C7,10.22 7.22,10 7.5,10 L17.5,10 C17.78,10 18,10.22 18,10.5 C18,10.78 17.78,11 17.5,11 L7.5,11 Z M3,17 C2.44,17 2,16.56 2,16 L2,15 C2,14.44 2.44,14 3,14 L4,14 C4.56,14 5,14.44 5,15 L5,16 C5,16.56 4.56,17 4,17 L3,17 Z M4,15 L3,15 L3,16 L4,16 L4,15 Z M7.5,16 C7.22,16 7,15.78 7,15.5 C7,15.22 7.22,15 7.5,15 L17.5,15 C17.78,15 18,15.22 18,15.5 C18,15.78 17.78,16 17.5,16 L7.5,16 Z" id="K"> </path> </g> </g> </svg></span>`);

        li.append(a);


        var span = document.createElement("span");
        span.className = 'title';

        span.innerText = document.getElementById('CreateList').value;
        a.appendChild(span);


        var ListCr = document.getElementById("ListCr");
        ListCr.appendChild(li);
        listop.style.width = "0px";
        listop.style.height = "0px";
        listop.style.zIndex = "unset";
        listop.style.display = 'none';
        li.addEventListener('click', onTabClick);
        li.addEventListener("contextmenu", ListCLRight);
        li.addEventListener('contextmenu', onContextMenuList)

    }




}











function onTabClick(event) {

    let activeTab = document.querySelector(".activeTb");
    // activeTab.forEach(function(tab) {
    //     tab.className = tab.className.replace('activeTb', 'list');
    // });
    if (activeTab != null) {
        activeTab.classList.remove("activeTb");
    }
    this.classList.add("activeTb");
    // event.target.parentElement.classList = 'activeTb';
    // document.getElementById(event.target.href.split('#')[1]).className += 'active';
    document.getElementById('head-name').innerHTML = this.querySelector('.title').innerHTML;

}
const list = document.getElementsByClassName("list");
for (var i = 0; i < list.length; i++) {
    list[i].addEventListener('click', onTabClick)
};



// clickright listcontext

function onContextMenuList(event) {

    let activeTab = document.querySelector(".activeTb");
    // activeTab.forEach(function(tab) {
    //     tab.className = tab.className.replace('activeTb', 'list');
    // });
    if (activeTab != null) {
        activeTab.classList.remove("activeTb");
    }

    this.classList.add("activeTb");
    // document.getElementById(event.target.href.split('#')[1]).className += 'active';

}
for (var i = 0; i < list.length; i++) {
    list[i].addEventListener('contextmenu', onContextMenuList)
};



//ContextList thẹo tọa độ
var listcon = document.getElementsByClassName("list");
for (var i = 0; i < listcon.length; i++) {
    listcon[i].addEventListener("contextmenu", ListCLRight);


}

function ListCLRight(e) {
    e.stopPropagation();
    e.preventDefault();
    var posx = e.pageX + 'px';
    var posy = e.pageY + 'px';

    // var getbound = taskItem[0].getBoundingClientRect();
    document.getElementsByClassName("ContextList")[0].style.left = posx;
    document.getElementsByClassName("ContextList")[0].style.top = posy;
    // document.getElementById("Context-menu").innerHTML = 'x = ' + posx + ' y=' + posy;
    document.getElementsByClassName("ContextList")[0].style.display = "block";
    document.getElementsByClassName("Context-menu")[0].style.display = 'none';
    document.getElementById("user-ck").style.display = 'none';
    document.getElementsByClassName("Context-menudele")[0].style.display = "none";



}


// Click onmouse right hiển thị ContextList


var conlist = document.getElementsByClassName("ContextList")[0];
document.getElementById('body').onclick = function(ev) {
    if (ev.target.className != 'ContextList') {
        conlist.style.display = 'none';
    } else {
        conlist.style.display = 'block';
    }
};


// Cách hiển thị Context-menu theo tọa độ của chuột
var taskItem = document.getElementsByClassName("taskItem");
for (var i = 0; i < taskItem.length; i++) {
    taskItem[i].addEventListener("contextmenu", myItem);


}

function myItem(e) {
    e.preventDefault();
    var posx = e.pageX + 'px';
    var posy = e.pageY + 'px';
    var getbound = taskItem[0].getBoundingClientRect();
    document.getElementById("Context-menu").style.left = posx;
    document.getElementById("Context-menu").style.top = posy;
    // document.getElementById("Context-menu").innerHTML = 'x = ' + posx + ' y=' + posy;
    document.getElementById("Context-menu").style.display = "block";
    document.getElementsByClassName("ContextList")[0].style.display = 'none';
    document.getElementById("user-ck").style.display = 'none';
    document.getElementsByClassName("Context-menudele")[0].style.display = "none";



}



// Click onmouse right hiển thị Context-menu

window.onload = function() {
    var context = document.getElementById('Context-menu');
    document.getElementById('body').onclick = function(ev) {
        if (ev.target.id != 'Context-menu') {
            context.style.display = 'none';
        } else {
            context.style.display = 'block';
        }
    };

};




//Context-menudele


var deletask = document.getElementsByClassName("deletask");
for (var i = 0; i < deletask.length; i++) {


    deletask[i].addEventListener('click', myTaskDele);

    deletask[i].addEventListener("contextmenu", myTaskDele);


    deletask[i].addEventListener("contextmenu", ContextmenuDele);


}
// clickcolor taskItemDele

function myTaskDele(e) {


    var element = document.querySelector(".taskIt-active");

    if (element != null) {
        element.classList.remove("taskIt-active");

    }


    e.stopPropagation();
    // e.target.parentElement.classList.add('taskIt-active');
    // e.target.classList.add('taskIt-active');

    if (e.target.className != 'addtask') {
        this.classList.add("taskIt-active");

    }
    e.target.classList.remove("taskItem-active");


}

function ContextmenuDele(e) {
    var bien = document.getElementsByClassName("Context-menudele")[0];
    e.stopPropagation();
    e.preventDefault();
    var posx = e.pageX + 'px';
    var posy = e.pageY + 'px';


    // var getbound = taskItem[0].getBoundingClientRect();
    bien.style.left = posx;
    bien.style.top = posy;




    // document.getElementById("Context-menu").innerHTML = 'x = ' + posx + ' y=' + posy;
    document.getElementsByClassName("Context-menudele")[0].style.display = "block";
    document.getElementsByClassName("Context-menu")[0].style.display = 'none';
    document.getElementById("user-ck").style.display = 'none';
    document.getElementsByClassName("ContextList")[0].style.display = 'none';

    var rect = document.getElementsByClassName("Context-menudele")[0].getBoundingClientRect();
    x = rect.left;
    y = rect.top;
    w = rect.width;
    h = rect.height;
    var pos = e.clientY - rect.top;
    console.log(pos);
    console.log("Left: " + x + ", Top: " + y + ", Width: " + w + ", Height: " + h);
    if (h)
    // Dele contextmenu


        var dele2 = document.getElementById("delete2");
    dele2.addEventListener('click', Dele2);

    function Dele2() {
        // this[encodeURI].remove();
        var element = document.querySelector(".taskIt-active");
        element.remove();
        document.getElementsByClassName("Context-menudele")[0].style.display = "none";

    }

}

// Click onmouse right ẩn khi ấn body hiển thị Context-menudele


document.getElementById('body').onclick = function(ev) {
    if (ev.target.id != 'Context-menudele') {
        document.getElementsByClassName("Context-menudele")[0].style.display = 'none';
    } else {
        document.getElementsByClassName("Context-menudele")[0].style.display = 'block';
    }
};


// Xử lý main-center
window.onload = function() {

    // Replace icon star when click on taskList

    var taskIt = document.querySelector(".taskItem");
    //Drag
    function dragStart(e) {
        this.style.opacity = '0.7';
        this.style.background = "#e1f2fe";

        dragBg = this;

        e.dataTransfer.setData('text/html', this.innerHTML);
    };

    function dragEnd(e) {
        this.style.opacity = '1';
        this.style.background = "#ffff";

    };

    function dragOver(e) {
        e.preventDefault();

    };


    function dragDrop(e) {
        if (dragBg != this) {
            dragBg.innerHTML = this.innerHTML;
            this.innerHTML = e.dataTransfer.getData('text/html');
        }
        return false;
    };

    function addEventsDragAndDrop(el) {
        el.addEventListener('dragstart', dragStart, false);
        // el.addEventListener('dragenter', dragEnter, false);
        el.addEventListener('dragover', dragOver, false);
        // el.addEventListener('dragleave', dragLeave, false);
        el.addEventListener('drop', dragDrop, false);
        el.addEventListener('dragend', dragEnd, false);
    }

    var listItens = document.querySelectorAll('.taskItem');
    listItens.forEach.call(listItens, function(item) {
        addEventsDragAndDrop(item);
    });
    // Add TaskList



    document.getElementById('inputTask').addEventListener('keydown', function(e) {
        var text = this.value;


        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            if (text.trim().length > 0) {
                addItem(text);
                // console.log(text);
            }

        }
    });

    function addItem(text) {
        AddTask(text);
        document.getElementById('inputTask').value = '';
    };




    function AddTask(text, completed) {



        var list = (completed) ? document.getElementById('completed') : document.getElementById('todo');

        var div = document.createElement("div");
        var atribute = document.createAttribute("draggable");
        div.setAttributeNode(atribute);
        atribute.value = "true";
        div.className = "taskItem";

        //Remove
        var complete = document.createElement('button');
        complete.classList.add('box');
        complete.innerHTML = checkboxSVG;
        complete.addEventListener('click', BoxCR);

        // CHECK BOX CLICK DELE

        // box.addEventListener('click', CheckBoxKP);
        div.append(complete);



        complete.addEventListener('click', CheckBoxCl);
        // console.log(complete);



        var divItem = document.createElement("div");
        var span = document.createElement("span");
        divItem.className = "item-wrapper";
        divItem.appendChild(span);
        div.appendChild(divItem);
        span.innerText = text;
        // console.log(span.innerText);
        div.appendChild.innerHTML = starSVG;
        var task = document.getElementsByClassName("taskItem");

        //star
        var star = document.createElement("button");
        const d = document.getElementById("D");
        if (d.style.opacity != '1') {

            star.className = 'star';
            star.innerHTML = starSVG;
            div.appendChild(star);

        } else {
            d.style.opacity = '0';

            star.className = 'star';
            star.innerHTML = starckSVG;
            div.appendChild(star);
        }


        list.insertBefore(div, list.childNodes[0]);
        star.addEventListener('click', StarCk);
        div.addEventListener('click', myTaskItem);
        div.addEventListener('click', ValueTask);
        div.addEventListener('dblclick', HienRight);
        div.addEventListener("contextmenu", myTaskItem);
        div.addEventListener("contextmenu", myItem);
        addEventsDragAndDrop(div);




    }






    // Check dele
    const checkbox = document.getElementsByClassName("box");
    for (var i = 0; i < checkbox.length; i++) {
        checkbox[i].addEventListener('click', CheckBoxCl);
        checkbox[i].addEventListener('click', BoxCR);


    }


    function CheckBoxCl() {
        var item = this.parentNode;
        var parent = item.parentNode;
        // var valuItem = this.currentTarget;
        var valuStar = item.children[2];
        var value = item.innerText;
        // var id = parent.id;

        // console.log(item);


        parent.removeChild(item);
        var ul = document.querySelector('.tasks');
        var li = document.createElement("LI");

        li.className = "deletask";
        // li.addEventListener('click', ValueTask);
        li.addEventListener('click', myTaskItem);
        li.addEventListener('dblclick', HienRight);


        li.addEventListener('click', myTaskDele);

        li.addEventListener("contextmenu", myTaskDele);


        li.addEventListener("contextmenu", ContextmenuDele);


       

        const div = document.createElement("div");
        // var ul = document.querySelector('.tasks');
        var atribute = document.createAttribute("draggable");
        div.setAttributeNode(atribute);
        atribute.value = "true";
        div.className = "taskItem-dele";
        var box = document.createElement('button');
        box.className = "box";
        box.innerHTML = checkdeSVG;
        box.addEventListener('click', CheckBoxKP);
        div.append(box);


        var divItem = document.createElement("div");
        divItem.className = "item-wrapper";
        var span = document.createElement("span");
        // console.log(this.getElementsByTagName("span")[0].innerHTML);
        var textnode = document.createTextNode(value);

        span.appendChild(textnode);
        divItem.append(span);

        // div.append(gt);

        var Info = document.createElement("div");
        Info.className = "taskItem-info";
        Info.innerHTML = "6 minutes ago by Vui Tran Thi";
        divItem.append(Info);

        div.append(divItem);
        div.append(valuStar);

        // gia tri star xem là trang hay do



        // div.append(kq);
        var dele = document.getElementsByClassName("deletask");

        li.append(div);
        ul.insertBefore(li, dele[0]);







    }

    // Check comple
    const boxkp = document.getElementsByClassName("box1");
    for (var i = 0; i < boxkp.length; i++) {
        boxkp[i].addEventListener('click', CheckBoxKP);

    }

    function CheckBoxKP() {

        var item = this.parentNode;
        var parent = item.parentNode;
        var valuStar = item.children[2];
        var value = item.children[1].children[0].innerText;
        var id = parent.id;


        this.parentNode.parentNode.remove();
        var taskList = document.querySelector(".taskList");
        var div = document.createElement("div");
        div.addEventListener('click', myTaskItem);
        div.addEventListener('click', ValueTask);
        div.addEventListener('dblclick', HienRight);
        div.addEventListener("contextmenu", myItem);
        div.addEventListener("contextmenu", myTaskItem);



        div.className = "taskItem";
        var atribute = document.createAttribute("draggable");
        div.setAttributeNode(atribute);
        atribute.value = "true";

        var box = document.createElement('button');
        box.classList.add('box');
        box.innerHTML = checkboxSVG;
        box.addEventListener('click', CheckBoxCl);
        box.addEventListener('click', BoxCR);
        div.append(box);



        var divItem = document.createElement("div");
        divItem.className = "item-wrapper";
        var span = document.createElement("span");
        var textnode = document.createTextNode(value);

        span.appendChild(textnode);
        divItem.append(span);

        div.append(divItem);
        div.append(valuStar);
        // var target = (id === 'todo') ? document.getElementById('completed') : document.getElementById('todo');
        // target.insertBefore(div, target.childNodes[0]);
        taskList.append(div);

    }






    // CLICK STARR

    document.getElementsByClassName("addtask-starred")[0].addEventListener('click', myStar);

    function myStar() {
        const d = document.getElementById("D");
        var addTaskstar = document.getElementsByClassName("addtask-starred")[0];

        if (d.style.opacity != '1') {
            d.style.opacity = '1';
            addTaskstar.style.opacity = 'unset';
        } else {
            d.style.opacity = '0';
            addTaskstar.style.opacity = '0.7';
        }

    }



    var taskItem = document.getElementsByClassName("taskItem");
    var tkDele = document.getElementsByClassName("deletask");
    // console.log(tkDele);


    // code  chuyen star
    var star = document.getElementsByClassName("star");


    for (var i = 0; i < star.length; i++) {



        star[i].addEventListener('click', StarCk);


    }

    function StarCk(e) {

        if (e.currentTarget.children[e.currentTarget.children.length - 1].className == 'startrang') {
            // console.log(e.target.parentElement.parentElement.parentElement.innerHTML);

            e.currentTarget.children[e.currentTarget.children.length - 1].remove();
            // console.log("trang");

            this.insertAdjacentHTML('beforeend', `
              <div class="stardo"> 
                  <svg width="22px" height="44px" class="star-dd" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path> </g> </svg>
              </div>
              `);
            if (this.parentNode.parentElement.id == "todo") {

                document.getElementById("todo").insertBefore(this.parentElement, taskItem[0]);
            };

            if (this.parentElement.parentElement.parentElement.id == "completed") {
                // console.log(this.parentElement.parentElement);
                document.getElementsByClassName("tasks")[0].insertBefore(this.parentElement.parentElement, tkDele[0]);

            }


        } else {
            e.currentTarget.children[e.currentTarget.children.length - 1].remove();
            this.insertAdjacentHTML('beforeend', `
                                <div class="startrang">
                                <svg width="18px" class="task-star" id="task-star" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"> <g> <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path> </g> </svg>

                            </div>

              `);

        }



    }




    for (var i = 0; i < checkbox.length; i++) {
        checkbox[i].addEventListener('click', BoxCR);

    }

    function BoxCR(e) {
        e.stopPropagation();
        var disview = document.querySelector(".display-view").children;
        // distitle
        var titlehead = document.querySelector(".title-head");
        // starhead
        var starhead = document.getElementById("starhead");

        var deltailcheck = document.getElementById("detail-checkBox");

        deltailcheck.innerHTML = checkdeSVG;
        disview[0].innerHTML = this.parentElement.children[1].innerHTML;



    }

    // laays gia tri main-center sang dau cho main-right

    for (var i = 0; i < taskItem.length; i++) {

        // lay gia tri
        var disview = document.querySelector(".display-view").children;
        // distitle
        var titlehead = document.querySelector(".title-head");
        // starhead
        var starhead = document.getElementById("starhead");
        //checkbox

        taskItem[i].addEventListener("click", ValueTask);


        function ValueTask(e) {

            e.preventDefault();
            e.stopPropagation();

            var boxright = document.getElementById("detail-checkBox");
            // boxright.innerHTML = checkboxSVG;

            var gt = this.getElementsByTagName("span")[0].innerHTML;



            var deltailcheck = document.getElementById("detail-checkBox");


            deltailcheck.innerHTML = this.children[0].innerHTML;

            disview[0].innerHTML = this.getElementsByTagName("span")[0].innerHTML;

            // console.log(this.getElementsByClassName("star")[0].innerHTML);
            starhead.innerHTML = this.children[2].innerHTML;
        }



        //Hien Right

        taskItem[i].addEventListener('dblclick', HienRight);

        function HienRight() {

            document.getElementById("main-right").style.display = 'block';
        };



        // clickcolor taskItem
        taskItem[i].addEventListener('click', myTaskItem);


        function myTaskItem(e) {


            var element = document.querySelector(".taskIt-active");

            if (element != null) {
                element.classList.remove("taskIt-active");

            }


            e.stopPropagation();
            // e.target.parentElement.classList.add('taskIt-active');
            // e.target.classList.add('taskIt-active');

            if (e.target.className != 'addtask') {
                this.classList.add("taskIt-active");

            }
            e.target.classList.remove("taskItem-active");


        }




        // contextmenucolor taskItem
        taskItem[i].addEventListener('contextmenu', myTaskItem);


        function myTaskItem(e) {


            var element = document.querySelector(".taskIt-active");

            if (element != null) {
                element.classList.remove("taskIt-active");

            }


            e.stopPropagation();
            // e.target.parentElement.classList.add('taskIt-active');
            // e.target.classList.add('taskIt-active');

            if (e.target.className != 'addtask') {
                this.classList.add("taskIt-active");

            }
            e.target.classList.remove("taskItem-active");


        }









    }


    // delete

    taskItdele = document.getElementsByClassName("taskItem-dele");

    for (var i = 0; i < taskItdele.length; i++) {
        taskItdele[i].addEventListener("click", ValueTaskDele);

        function ValueTaskDele() {
            // console.log(this.getElementsByTagName("span")[0].innerHTML);
            disview[0].innerHTML = this.getElementsByTagName("span")[0].innerHTML;

        }
        taskItdele[i].ondblclick = function() {

            document.getElementById("main-right").style.display = 'block';

            //  Responsive home to use Js
            function Responsive(x) {
                if (x.matches) {
                    document.getElementsByClassName("main-center")[0].style.right = "0px";
                } else {
                    document.getElementsByClassName("main-center")[0].style.right = "367px";
                }
            }
            var x = matchMedia("(max-width:1000px)");
            Responsive(x);
            x.addListener(Responsive);
        };


    }



    // Ânr Context-menu khi nhấn vào vị trí bất kì 

    var context = document.getElementById('Context-menu');
    document.onclick = function(event) {


        if (event.target.id !== "Context-menu") {
            context.style.display = 'none';
        }
    };


    // Âns showcom thì hiện ra taskItem-dele
    document.getElementsByClassName("showcom")[0].addEventListener('click', Task);

    function Task() {
        var taskdele1 = document.getElementsByClassName("tasks");

        if (taskdele1[0].style.display == 'none') { taskdele1[0].style.display = 'block'; } else {
            taskdele1[0].style.display = 'none';

        }

    };


    // Xử lý display-view
    $('.display-view').keyup(getValueToMain);

    function getValueToMain() {
        console.log($(this).html());
        $('.taskIt-active').find('.item-wrapper span').html($(this).html());
    }

    // DeleTodo Clik Right
    document.getElementById("deletodo").addEventListener('click', DeleTodo);

    function DeleTodo() {
        var element = document.querySelector(".taskIt-active");
        element.remove();
        // console.log(element.innerHTML);


        var list = document.getElementById('completed');

        var div = document.createElement("div");
        div.className = "taskItem-dele";
        div.append(element.innerHTML);

        list.insertBefore(div, list.childNodes[0]);



    }



    window.onclick = function(e) {
        var add = document.getElementsByClassName("addtask")[0];
        if ((!add.contains(e.target))) {

            document.getElementById("plus-small").style.visibility = 'inherit';
            var hidden = document.getElementsByClassName("hidden");
            for (var i = 0; i < hidden.length; i++) {
                hidden[i].style.visibility = 'hidden';
            }

        } else {

            document.getElementById("plus-small").style.visibility = 'hidden';
            var hidden = document.getElementsByClassName("hidden");
            for (var i = 0; i < hidden.length; i++) {
                hidden[i].style.visibility = 'inherit';
            }
        }
    }








}

// main-right hidden

window.addEventListener('load', function() {




    // Close 
    var close = document.querySelector(".close");
    close.addEventListener('click', function() {


        document.getElementById("main-right").style.display = 'none';
        document.getElementById("main-right").style.transition = '0.4' + 's';



        function Responsive(x) {
            if (x.matches) {

                document.getElementsByClassName("main-center")[0].style.right = "0px";
            } else {
                document.getElementsByClassName("main-center")[0].style.right = "0px";
            }
        }
        var x = matchMedia("(max-width:1000px)");
        Responsive(x);
        x.addListener(Responsive);




    });



    document.getElementById('txtcomment').addEventListener('keydown', function(e) {
        var text = this.value;

        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            if (text.trim().length > 0) {
                addComment(text);
                // console.log(text);
            }

        }
    });

    function addComment(text) {
        ADDCOM(text);
        document.getElementById('txtcomment').value = '';
    };

    function ADDCOM(text) {

        var div = document.createElement("div");
        div.id = "com";
        div.classList = "content-inner members ";
        //Avatar
        var divava = document.createElement("div");
        divava.className = "avatar";
        divava.insertAdjacentHTML('beforeend', `
        <span><img src="https://storage.live.com/mydata/myprofile/expressionprofile/profilephoto:UserTileStatic,UserTileSmall/MeControlMediumUserTile?ck=1&ex=24&fofoff=1&sc=1598580818789"></span>

              `);
        //Content peope meta
        var divmeta = document.createElement("div");
        divmeta.className = "content-people-meta";
        divmeta.insertAdjacentHTML('beforeend', `<span class="content-people-name-label">Vui Trần Thị</span>`);
        var valuNote = document.createElement("div");
        valuNote.className = "valuenote";
        valuNote.innerText = text;
        divmeta.appendChild(valuNote);

        //dele
        var delecom = document.createElement("div");
        delecom.insertAdjacentHTML('beforeend', `<div class="section-delete delecom" title="Delete">
        <svg class="delete" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g stroke="none" stroke-width="1" fill-rule="evenodd"> <g id="delete"> <path d="M10.72,9.9975 L13.86,6.8575 C14.04,6.6575 14.04,6.3375 13.86,6.1375 C13.66,5.9575 13.34,5.9575 13.14,6.1375 L10,9.2775 L6.86,6.1375 C6.66,5.9575 6.34,5.9575 6.14,6.1375 C5.96,6.3375 5.96,6.6575 6.14,6.8575 L9.28,9.9975 L6.14,13.1375 C5.96,13.3375 5.96,13.6575 6.14,13.8575 C6.24,13.9575 6.38,13.9975 6.5,13.9975 C6.62,13.9975 6.76,13.9575 6.86,13.8575 L10,10.7175 L13.14,13.8575 C13.24,13.9575 13.38,13.9975 13.5,13.9975 C13.62,13.9975 13.76,13.9575 13.86,13.8575 C14.04,13.6575 14.04,13.3375 13.86,13.1375 L10.72,9.9975 Z" id="4"></path> </g> </g> </svg>
        

    </div>`);
        //
        div.append(divava);
        div.append(divmeta);
        div.appendChild(delecom);
        var note = document.getElementsByClassName("note");
        note[0].appendChild(div);
        delecom.addEventListener('click', DeleCom);


    }

    //fdele comment
    var cmde = document.getElementsByClassName("delecom");
    for (var i = 0; i < cmde.length; i++) {
        cmde[i].addEventListener('click', DeleCom);
    }

    function DeleCom() {
        var sure = confirm("Are you sure?");
        if (sure == true) {
            this.parentNode.remove();
        }
    }


});
// List-Toogle click

document.getElementById("ltToogle").addEventListener('click', ListToogle);

function ListToogle(e) {
    e.preventDefault();

    if (document.getElementById("slide").style.width == "280px") {

        function HienListToogle(x) {
            if (x.matches) {
                document.getElementById("slide").style.width = "280px";
            } else {
                document.getElementById("slide").style.width = "45px";
                document.getElementsByClassName("main-center")[0].style.left = "45px";
                document.getElementById("sidebarAction").style.width = "45px";
                document.getElementById("usTool").style.display = "none";
                document.getElementsByClassName("user-arrow")[0].style.display = "none";

                document.getElementById("title").style.visibility = "hidden";
                var title = document.querySelectorAll(".title");
                for (i = 0; i <= title.length; i++) {
                    title[i].style.visibility = "hidden";
                }

            }
        }
        var x = matchMedia("(max-width:500px)");
        HienListToogle(x);
        x.addListener(HienListToogle);
    } else {

        document.getElementById("slide").style.width = "280px";
        document.getElementsByClassName("main-center")[0].style.left = "280px";
        document.getElementById("sidebarAction").style.width = "280px";
        document.getElementById("usTool").style.display = "block";
        document.getElementsByClassName("user-arrow")[0].style.display = "block";

        document.getElementById("title").style.visibility = "hidden";
        var title = document.getElementsByClassName("title");
        for (i = 0; i <= title.length; i++) {
            title[i].style.visibility = "unset";
        }

    }
}
document.getElementsByClassName("display-view")[0].contentEditable = "true";
document.getElementsByClassName("add")[0].contentEditable = "true";



// Account setting 

document.getElementsByClassName("acount-se")[0].addEventListener("click", AccountSe);

function AccountSe(e) {
    e.preventDefault();
    var setAc = document.getElementById("setAccount");
    setAc.style.display = 'block';
    setAc.style.zIndex = 1;
    document.getElementById("user-ck").style.display = "none";

    // document.getElementById("body").addEventListener('click', e => {
    //     var setAc = document.getElementById("setAccount");

    //     if (!setAc.contains(e.target)) {
    //         setAc.style.display = 'none';
    //         setAc.style.zIndex = 'unset';
    //     }
    // })

}


document.getElementById("doneAc").addEventListener("click", HiddenAc);

function HiddenAc() {
    var setAc = document.getElementById("setAccount");
    setAc.style.display = 'none';
    setAc.style.zIndex = 'unset ';


};





function openTab(event, tabName) {
    var i, tab, tablinks;
    tab = document.getElementsByClassName("tab");
    for (i = 0; i < tab.length; i++) {
        tab[i].style.display = 'none';
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = 'block';
    event.currentTarget.className += " active";

}