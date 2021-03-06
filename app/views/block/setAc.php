<div id="bgSet"></div>
<div id="setAccount">
        <div class="dialog">
            <div class="content">
                <div class="top">
                    <div class="tabs">
                        <ul style="list-style-type: none;" class="tabs">
                            <li class="tablinks active" data-tab="setting-general">


                                <span class="icon general"></span>
                                <span class="label">General</span>

                            </li>
                            <li class="tablinks" data-tab="setting-shortcut">


                                <span class="icon account"></span>
                                <span class="label">Account</span>

                            </li>

                            <li class="tablinks" data-tab="setting">


                                <span class="icon shortcut"></span>
                                <span class="label">Shortcuts</span>

                            </li>

                            <a>
                                <li>

                                    <span class="icon smartlist"></span>
                                    <span class="label">Smart Lists</span>

                                </li>
                            </a>
                            <a href="">
                                <li>

                                    <span class="icon notification"></span>
                                    <span class="label">Notification</span>

                                </li>
                            </a>
                            <a href="">
                                <li>

                                    <span class="icon about"></span>
                                    <span class="label">About</div>
                       </li>
                    </a>
            </ul>
          
        </div>

        <div id="setting-general" class="tab current">
    <div class="separator">
        <div class="cols">
            <text>Language</text>
            <span class="select">
                <select name="" id="language">
                <option value="">English</option>
                    <option value="">Dansk</option>
                </select>
                </span>
                    </div>

                    <div class="cols">
                        <text>Date Format</text>
                        <span class="select">
                <select name="" id="date">
                    <option value="">DD.MM.YYYY</option>
                    <option value="">MM/DD/YYYY</option>
                    <option value="">DD/MM/YYYY</option>
                    <option value="">YYYY/MM/DD</option>
                    <option value="">YYYY-MM-DD</option>
                </select>
                 </span>
                    </div>
                    <div class="cols">
                        <input type="radio" name="" id="radio"><text>12 Hour</text>
                        <input type="radio" name="" id="radio"><text>24 Hour</text>
                    </div>
                    <div class="cols">
                        <text>Start of the Week</text>
                        <span class="select">
                <select name="" id="week">
                    <option value="">Sunday</option>
                    <option value="">Saturday</option>
                    <option value="">Monday</option>
                </select>
                </span>
                    </div>
                </div>
            </div>


            <div id="setting-shortcut" class="tab">
                <div class="separator">
                    <div class="cols">
                        <text>Add a New To-do</text>
                        <input type="text" value="CTRL + O">
                    </div>
                    <div class="cols">
                        <text>Add a New List</text>
                        <input type="text" value="CTRL + SHIFT + L">
                    </div>
                    <div class="cols">
                        <text>Mark Selected To-dos as 'Completed'</text>
                        <input type="text" value="CTRL + D">
                    </div>
                    <div class="cols">
                        <text>Mark Selected To-dos as 'Starred'</text>
                        <input type="text" value="CTRL + S">
                    </div>
                    <div class="cols">
                        <text>Select All To-dos</text>
                        <input type="text" value="CTRL + A">
                    </div>
                    <div class="cols">
                        <text>Delete Selected List or To-do</text>
                        <input type="text" value="CTRL + BACKSPACE">
                    </div>
                </div>
                <div class="separator">
                    <div class="cols">
                        <text>Copy Selected  To-do</text>
                        <input type="text" value="CTRL + C">
                    </div>
                    <div class="cols">
                        <text>Paste To-do</text>
                        <input type="text" value="CTRL + V">
                    </div>
                </div>
                <div class="separator">
                    <div class="cols">
                        <text>Search</text>
                        <input type="text" value="CTRL + F">
                    </div>
                </div>
                <div class="separator">
                    <div class="cols">
                        <text>Sync</text>
                        <input type="text" value=" R">
                    </div>
                </div>

                <div class="buttom">
                    <button>Reset to Defaults</button>
                    <button>Show More</button>

                </div>

            </div>





            <div id="setting" class="tab">
                <div class="avatar-frame">
                    <div class="avatar">
                        <a href=""> <img src="../public/img/user.png" alt=""></a>
                    </div>
                </div>
                <div class="acount-setting">
                    <div class="cols">
                        <div class="label">
                            <text>Name</text>
                        </div>
                        <div class="input">
                            <input type="text" value="Vui Trần Thị" class="user">
                        </div>
                    </div>
                    <div class="cols">
                        <div class="label">
                            <text>Email</text>
                        </div>
                        <div class="input">
                            <input type="email" value="vuitrannb@gmail.com" class="email">
                        </div>
                        <div class="buttom">
                            <button class="changeEmail">Change Email</button>
                        </div>
                    </div>
                    <p class="setting_account_email">
                        <a href="">
                            <text>Add or manage your email addresses</text>
                        </a>
                    </p>
                    <div class="cols">
                        <div class="label">
                            <text>Password</text>
                        </div>
                        <div class="buttom">
                            <button class="changePass">Change Password...</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="bottom">
            <div class="done" id="doneAc">
                <button type="submit" class="btn">Done</button>
            </div>
        </div>
    </div>


    </div>

    <!-- Create list --> 
    
    <!-- <div class="option">
      
        <div class="listoption">-->
            <div class="content" style="position: absolute;width: 100%;z-index: 1;"> 
                <form action="create_list" method="POST" id="listOp">
                    <div class="content-header">
                        <h3 class="center">
                            <text>Create New List</text>
                        </h3>
                        <div class="NameList">
                            <input type="text" placeholder="List Name" id="CreateList" name="list_name">
                        </div>
                        <div class=" list">
                            <ul>
                                <li><a href="">LIST MEMBERS</a></li>
                                <li><a href="">LIST OPTIONS</a></li>
                            </ul>
                        </div>

                        <div class="NameList ">

                            <input type="text"  placeholder="Name or email address" name="m">
                            <svg class="share rtl-flip" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g stroke="none" stroke-width="1" fill-rule="evenodd"> <g id="share"> <path d="M11.5025,12 C13.7825,12 15.5025,8.84 15.5025,6 C15.5025,3.8 13.7025,2 11.5025,2 C9.3025,2 7.5025,3.8 7.5025,6 C7.5025,8.5 9.0225,12 11.5025,12 L11.5025,12 Z M11.5025,3 C13.1625,3 14.5025,4.34 14.5025,6 C14.5025,8.26 13.1225,11 11.5025,11 C9.8425,11 8.5025,8.26 8.5025,6 C8.5025,4.34 9.8425,3 11.5025,3 L11.5025,3 Z M4.5025,10 L6.0025,10 C6.2825,10 6.5025,9.78 6.5025,9.5 C6.5025,9.22 6.2825,9 6.0025,9 L4.5025,9 L4.5025,7.5 C4.5025,7.22 4.2825,7 4.0025,7 C3.7225,7 3.5025,7.22 3.5025,7.5 L3.5025,9 L2.0025,9 C1.7225,9 1.5025,9.22 1.5025,9.5 C1.5025,9.78 1.7225,10 2.0025,10 L3.5025,10 L3.5025,11.5 C3.5025,11.78 3.7225,12 4.0025,12 C4.2825,12 4.5025,11.78 4.5025,11.5 L4.5025,10 Z M18.2625,14.88 C18.0625,14 17.4025,13.28 16.5225,13.04 L14.2225,12.36 C14.0825,12.32 13.9625,12.26 13.8625,12.14 C13.6625,11.96 13.3425,11.96 13.1625,12.16 C12.9625,12.34 12.9625,12.66 13.1625,12.86 C13.3825,13.08 13.6425,13.24 13.9425,13.32 L16.2425,14 C16.7625,14.14 17.1625,14.58 17.2825,15.1 L17.4425,15.8 C16.9025,16.16 15.2025,17 11.5025,17 C7.7825,17 6.1025,16.14 5.5625,15.8 L5.7225,15.04 C5.8425,14.5 6.2625,14.06 6.8025,13.92 L9.0425,13.32 C9.3425,13.24 9.6225,13.08 9.8625,12.86 C10.0425,12.66 10.0425,12.34 9.8625,12.14 C9.6625,11.96 9.3425,11.96 9.1425,12.14 C9.0425,12.24 8.9225,12.32 8.7825,12.36 L6.5425,12.96 C5.6425,13.2 4.9625,13.92 4.7425,14.82 L4.5225,15.9 C4.4825,16.06 4.5225,16.24 4.6425,16.36 C4.7225,16.42 6.3625,18 11.5025,18 C16.6425,18 18.2825,16.42 18.3625,16.36 C18.4825,16.24 18.5225,16.06 18.4825,15.9 L18.2625,14.88 Z" id="W"></path> </g> </g> </svg>
                        </div>
                    </div>

                    <div class="user member">
                        <div class="content-inner members">

                            <div class="avatar" title="avatar" class="user-tool">
                                <span><img src="../public/img/user.png"></span>
                            </div>
                            <div class="content-people-meta">
                                <div class="content-people-name">
                                    <span class="content-people-name-label">Vui Trần Thị</span>
                                    <div class="content-people-name-badgde">
                                        <span class="badge blue">Owner</span>
                                    </div>
                                </div>
                                <div class="content-people-email">vuitrannb@gmail.com</div>
                            </div>

                        </div>
                    </div>
                    <div class="user"></div>
                    <div class="content-footer">

                    
                    <div class="conright">
                            <button type="submit" class="btn" id="btSaveList" name="t">Save</button>
                            <button type="button" class="btn-cance" id="Cance">Cance</button>
                        </div>
                    


                    </div>
                </form> 
            <!-- </div> 
       
        </div>  -->
   
    </div>

