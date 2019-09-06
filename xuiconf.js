


// [[Gobal Code
(function(){
//    //xui.stringify(new Date) => "2017-10-21T12:53:43.522+0800"
//    xui.setDateFormat('gmt');

}());
// ]]Gobal Code

// [[Page Appearance
xui.ini.$PageAppearance = {
    "theme":"default"
};
// ]]Page Appearance
// To set Font Icons CDN

// [[Font Icons CDN
xui.ini.$FontIconsCDN = {
    "fontawesome":{
        "href":"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
        "integrity":"sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN",
        "disabled":true
    }
};
// ]]Font Icons CDN
// To set default prop to all xui.UI instances
// [[Default Prop
xui.ini.$DefaultProp={
    "dirtyMark": false,
    "xui.UI.Dialog":{
        "minBtn": false
    }
};
// ]]Default Prop

// [[Global Functions
xui.$cache.functions = {
    "addNum":{
        "desc":"",
        "params":[
            {
                "id":"num1",
                "type":"String",
                "desc":""
            },
            {
                "id":"num2",
                "type":"String",
                "desc":""
            }
        ],
        "actions":[
            {
                "desc":"动作 1",
                "type":"other",
                "target":"msg",
                "args":[
                    "计算",
                    "{args[0]} + {args[1]}"
                ],
                "method":"pop"
            },
            function(num1, num2){
                return(+num1)*(+num2);
            }
        ]
    }
};
// ]]Global Functions
// [[Global Data
xui.$cache.data = {
    "$DATE_FORMAT":"gmt"
};
// ]]Global Data


// [[Constant Data
xui.constant = {
};
// ]]Constant Data

// [[Develop Env Setting
xui.ini.$DevEnv = {
    "designViewConf":{
        "width":800,
        "height":600
    }
};
// ]]Develop Env Setting
