window.onload = setup;
var r=20;
var lod=document.querySelector('.loader');

function setup()
{
    
    setInterval(spin,50);
}

function spin()
{
    lod.style.transform=`rotate(${r}deg)`;
    r+=5;
}


var nam = document.querySelector("#uName");
var dpImg = document.querySelector('#dp');

var search = function ()
{
    var name = nam.value;
    var link = "https://www.instagram.com/";
    if (name.indexOf("https://www.instagram.com/") == -1)
    {
        name = link + name;
    }
    $.ajax(
        {
            type: 'GET',

            url: name,

            success: function (data) 
            {
                data = JSON.parse(data.split("window._sharedData = ")[1].split(';')[0]).entry_data.ProfilePage[0];
                usr_id = data.graphql.user["id"];
                $.getJSON("https://i.instagram.com/api/v1/users/" + usr_id + "/info/", function (info)
                {
                    dpImg.style.display = "block";
                    dpImg.src = info.user.hd_profile_pic_url_info["url"];
                    lod.style.display="none";  

                });
            }
        }
    );
}

document.getElementById('submit').onclick = search;


var lij=document.getElementById('submit');

lij.addEventListener('click',lizzy);

function lizzy()
{
    
    lod.style.display="block";  
}


  





