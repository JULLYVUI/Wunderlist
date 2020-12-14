$(document).ready(function() {
    // To Do List(TaskList )
    var starSVG = '<svg width="18px" class="task-star" id="task-star" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"> <g> <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path> </g> </svg>';
    var starckSVG = '<svg width="22px" height="44px" class="star-dd" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path> </g> </svg>';

    var starTrang =
        `<div class="startrang">
        <svg width="18px" class="task-star" id="task-star" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"> <g> <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path> </g> </svg>
    </div>`;
    var starDo =
        `<div class="stardo">
        <svg width="22px" height="44px" class="star-dd" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path> </g> </svg>
    </div>`;

    var boxCompleteSVG = `<svg class="checkdele" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path> <path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path> </g> </svg>`;
    var boxActiveSVG = `<svg class="task-check" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;stroke: rgba(0,0,0,0.35);"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g> </svg>`;
    // Create List

    $('#sidebarAction').click(function(e) {
        e.stopPropagation();
        $("#listOp").animate({
                marginTop: '80px',
                height: 'toggle'
            })
            // $("#listOp").fadeIn();
        $("#bgSet").css({ "background-color": " rgba(0, 0, 0, .6)", "width": "100%", "height": "100%", "position": "absolute", "zIndex": 1 });
    })

    // clickright listcontext
    const list = $(".list");
    for (var i = 0; i < list.length; i++) {
        list[i].addEventListener('contextmenu', show);
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



    //Close
    $('.close').click(closeRight);
   function closeRight() {
        var mainright = $('#main-right');
        mainright.hide();
        mainright.slideToggle('slow');

        function Responsive(x) {
            if (x.matches) {
                $(".main-center").first().css({ right: '367px' });

            } else {
                $(".main-center").first().css({ right: '0px' });
                mainright.hide();
            }
        }
        var x = matchMedia("(max-width:1000px)");
        Responsive(x);
        x.addListener(Responsive);


    }

    // CLICK STARR
    $(".addtask-starred").click(function() {
        var d = $("#D");
        if (d.css('opacity') != 1) {
            d.css('opacity', '1');
            $(".addtask-starred").css("opacity", "unset");

        } else {
            d.css('opacity', '0');
            $(".addtask-starred").css("opacity", "0.7");
        }

    })


    // Cance list
    document.getElementById("Cance").addEventListener('click', Cance);

    function Cance() {
        $("#listOp").hide();
        $("#listOp").css({
            'zIndex': 'unset',
            "margin-top": "0px"
        });
        $("#bgSet").css({ "zIndex": "unset", "height": "0%" })
    }

    function HienRight() {

        $("#main-right").show();

        //  Responsive home to use Js
        function Responsive(x) {
            if (x.matches) {

                $(".main-center").first().css('right', '0px');
            } else {
                $(".main-center").first().css('right', '367px');
            }
        }
        var x = matchMedia("(max-width:1000px)");
        Responsive(x);
        x.addListener(Responsive);
    };
    //Context Color List And Lay Theo Toa Do

    function ColClient(e) {
        e.preventDefault();
        // e.stopPropagation();
        var rect = e.target.getBoundingClientRect();
        if (e.target.className != 'taskIt-active ') {
            $('.taskItem').removeClass('taskIt-active');
            $(this).addClass('taskIt-active ');
        }
        var posx = e.clientX+ 'px';
        var posy = e.clientY + 'px';
        $('.Context-menu').css({ left: posx, top: posy }).show();
        $("#user-ck").hide();
        $(".Context-menudele").hide();
    }

    // Hide ContextList When Click Body !CotextList

    $('#body').click(function(ev) {
        var conlist = $(".ContextList");
        if (ev.target.className != 'ContextList') {
            conlist.hide();
        } else {
            conlist.show();
        }
    })
//Search task
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
    
            }
        }
    
    }

    // Click Color TaskItem
    $('.taskItem').click(ColTask);

    function ColTask(e) {

        $(this).addClass('taskIt-active ');
        if (e.target.className != 'taskIt-active ') {
            $('.taskItem').removeClass('taskIt-active');
            $(this).addClass('taskIt-active ');
        }
        // Laays gia tri cho header-mainright
        $('#detail-checkBox').html(boxActiveSVG);
        $('.display-view').html($(this).find('span').text());
        $('#starhead').html($(this).find('button:last-child').html());
        $(this).dblclick(HienRight);

    }
  

    // Doi Trang Thai Star
    $(document).on('click', '.star', doiStar);
    function doiStar() {
        var star_name = $(this).children().attr('class');
        var name = $(this).prev().text();
        console.log(star_name);
        var star_db = star_name=='stardo'? 'trang' : 'do';
        var id = $(this).parent().attr('id');

        $.ajax({
            type: "post",
            dataType: "JSON",
            url: '../Ajax/updateTask',
            data: {
                'task_id': id,
                'task_name': name,
                'star':star_db, 
            }
           
        })

        if (star_name == 'stardo') {
            $(this).empty().append(`<div class="startrang">` + starSVG + `</div>`);

        } else {
            $(this).parent().remove();
            $(this).empty().append(`<div class="stardo">` + starckSVG + `</div>`);
            setTimeout(() => {
                $('.taskList').prepend($(this).parent());
            }, 300);
        }
        $(this).parent().click(ColTask);
    }
 // Check note phải dùng $(document) mới thực hiện đc cho tất cả những cái mới tạo ra
    //Viet trigger tu dong update count list active when task change(add ,delete,complete)
    $(document).on("click", ".taskList .box", checkBoxCl);
  
  
    function checkBoxCl() {
        var item = this.parentNode;
        var tenStar = item.children[2].children[0].className;
        var value = item.innerText;
        var star = tenStar == 'startrang' ? starTrang : starDo;
        var id = $(this).parent().attr('id');
        var count_task_ac = parseInt($(".activeTb").find(".listItem-count").text())-1 ;
        $(".activeTb .listItem-count").text(count_task_ac);
        $.ajax({
            type: "post",
            dataType: "JSON",
            url: '../Ajax/markTaskComplete',
            data: {
                'task_id': id
            },
          
        })

        var taskItem =
            `<div draggable="true" class="taskItem">
                <button class="box"><svg class="checkdele" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path> <path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path> </g> </svg></button>
                <div class="item-wrapper">
                    <span>${value} </span>
                    <div class="taskItem-info">6 minutes ago by Vui Tran Thi</div>
                </div>
                <button class="star">${star}</button>
            </div>`;
        item.remove();
        $(".tasks").append(taskItem);
       

        
    }
    // Check comple
    $(document).on("click", ".tasks .box", checkBoxKP);
    function checkBoxKP() {

        var item = this.parentNode;
        var tenStar = item.children[2].children[0].className;
        var value = item.children[1].children[0].innerText;
        var star = tenStar == 'startrang' ? starTrang : starDo;
        var id = $(this).parent().attr('id');
        var count_task_ac = parseInt($(".activeTb").find(".listItem-count").text())+1 ;
        $(".activeTb .listItem-count").text(count_task_ac);
       
        $.ajax({
            type: "post",
            dataType: "JSON",
            url: '../Ajax/markTaskNotComplete',
            data: {
                'task_id': id,
            }
          
        })

        var taskItem =
            `<div draggable="true" class="taskItem">
                <button class="box"><svg class="task-check" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;stroke: rgba(0,0,0,0.35);"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g> </svg></button>
                <div class="item-wrapper">
                    <span> ${value} </span> 
                </div>
                <button class="star">${star}</button>
            </div>`;
        item.remove();
        $(".taskList").append(taskItem);

      
    }


    /**
     * Ajax show task by list of user 
     */
    function show(e) {
        // mau sac 
        if (e.target.className != 'activeTb ') {
            $('.list').removeClass('activeTb');
            $(this).addClass('activeTb ');
            $('#head-name').html($(this).find(".title").html());
          
        }
        // an mainright
        // closeRight();
         // Làm rỗng nội dung bên trong của taskList
         $('.taskList').empty();
         $('.tasks').empty();
         var id = $(this).attr('id');
         $.ajax({
             type: "get",
             dataType: 'JSON',
             url: '../Ajax/showTasks',
             data: {
                 'list_id': id
                     // list_id: JSON.stringify(id)
             },
             success: function (data) {
                 setTimeout(function () {
                   var len = data.length;
                 for (var i = 0; i < len; i++) {
                     var task_name = data[i].name;
                     var task_id = data[i].task_id;
                     var status_star = data[i].star;
                     var status = data[i].status;
                     var due_date=data[i].due_date;
                     var info = `<div class="taskItem-info">${due_date}</div>`;
                     var star = status_star == 'trang' ? starTrang : starDo;
                     var box = status == 'active' ? boxActiveSVG : boxCompleteSVG;
                     var taskInfo = status == 'active' ? '' : info;
                     var task_list =
                         `<div draggable="true" class="taskItem" id=${task_id}>
                                <button class="box">${box}</button>
                                <div class="item-wrapper">
                                        <span>${task_name}</span>
                                        ${taskInfo}
                                </div>
                             <button class="star">${star}</button>    
                         </div>`
                     var list = (completed) ? document.getElementById('completed') : document.getElementById('todo');
                     if (status == 'active') {
                         $('#todo').prepend(task_list);
                     } else {
                         $('.tasks').append(task_list);
 
                     }
                     $(document).on("dblclick", ".taskItem", HienRight);
                     $(document).on("contextmenu", ".taskItem", ColClient);
                     $(document).on("click", ".taskItem", ColTask);
                   
 
                 }
             
                
                 $(".taskList .box").click(checkBoxCl);
                 $(".tasks .box").click(checkBoxKP);  
                 },100)
                 
               
              
               
             },
           
 
         })
    }
    $('.list').click(show);
   

    /**
     * Delete List
     */



    $("#delete3").click(function DeleList() {
        var id = $(".activeTb").attr('id');
                $curr = $(".activeTb").prev();
                $(".activeTb").remove();
                $curr.addClass("activeTb");
                $(this).click(show);
        $.ajax({
            type: "post",
            url: '../Ajax/deleList',
            data: {
                'list_id': id
            },
            success: function (data) {
                
                $(".ContextList").hide();
                $('.taskList').empty();
                $('.tasks').empty();

            }
        })
    })
/**
 * Rename List
 */
    $("#rename-list").click(function () {
        $(".ContextList").toggle();
    })
    
    /**
     * New Task
     */


    $('#inputTask').click(function() {
        $(".addtask-icon").css("visibility", "inherit");
    })
    $('#inputTask').keypress(function(event) {

        var text = $('#inputTask').val();

        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            $(".addtask-icon").css("visibility", "collapse");
            if (text.trim().length > 0) {
                document.getElementById('inputTask').value = '';
                var id = $(".activeTb").attr('id');
                var count_task_ac = parseInt($(".activeTb").find(".listItem-count").text())+1 ;
                $(".activeTb .listItem-count").text(count_task_ac);
                $.ajax({
                    type: "post",
                    url: '../Ajax/addTask',
                    data: {
                        'list_id': id,
                        'task_name': text
                    },
                    success: function(data) {
                        var taskItem =
                            `<div draggable="true" class="taskItem">
                                <button class="box "><svg class="task-check" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;stroke: rgba(0,0,0,0.35);"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g> </svg></button>
                                <div class="item-wrapper">
                                    <span>` + text +
                            `</span>
                                </div>
                                <button class="star"><div class="startrang">
                                    <svg width="18px" class="task-star" id="task-star" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"> <g> <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path> </g> </svg>
                                </button>
                            </div>`;
                        $('#todo').prepend(taskItem);

                    }

                });

            }

        }
    })

    /**
     * Dele task
     */
    $(document).on('click', '#deletodo', deleTask);
    function deleTask() {
        var id = $('.taskIt-active').attr('id');
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: '../Ajax/deleTask',
            data: {
                task_id:id
            }    
        })
        $('.taskIt-active').remove();
        $('.Context-menu').hide();
    }
 
    // Âns showcom thì hiện ra taskItem-dele
    $('.showcom').click(function() {
        $('.tasks').toggle();
    })

    // Change text task on mainright
    $('.display-view').keyup(getValueToMain);
    function getValueToMain() {
        var id = $('.taskIt-active').attr('id');
        var name = $('.display-view').text();
        var star_db = $('.title-head').find('.star').children().attr('class');
        console.log(star_db);
        $.ajax({
            type: 'POST',
            dataType: 'json',
            // url: '../Ajax/updateTask',
            data: {
                'task_id': id,
                'task_name': name,
                'star':star_db, 
            }
        })
        $('.taskIt-active').find('.item-wrapper span').html($(this).html());
    }


})