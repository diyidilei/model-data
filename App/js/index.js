// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"money")
                .setDirtyMark(false)
                .setLeft("12.5em")
                .setTop("10.833333333333334em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("价格")
                .setType("spin")
                .setForceFillZero(false)
                .setIncrement(10)
                .setMin(0)
                .setValue(0)
                .onChange([
                    {
                        "desc":"定义全局变量",
                        "type":"control",
                        "target":"money",
                        "args":[
                            "{page.money.getUIValue()}",
                            "global",
                            "money"
                        ],
                        "method":"getUIValue",
                        "redirection":"other:callback:call"
                    },
                    {
                        "desc":"计算",
                        "type":"control",
                        "target":"total",
                        "args":[
                            "{page.total.setUIValue()}",
                            "none",
                            "",
                            "(+{global.money})*(+{global.num})"
                        ],
                        "method":"setUIValue",
                        "redirection":"other:callback:call"
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"total")
                .setDirtyMark(false)
                .setLeft("12.5em")
                .setTop("17.5em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("总价")
                .setType("number")
                .setForceFillZero(false)
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput285")
                .setDirtyMark(false)
                .setLeft("12.5em")
                .setTop("14.166666666666666em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("数量")
                .setType("spin")
                .setForceFillZero(false)
                .setIncrement(10)
                .setMin(0)
                .setValue(0)
                .onChange([
                    {
                        "desc":"定义全局变量",
                        "type":"control",
                        "target":"money",
                        "args":[
                            "{page.money.getUIValue()}",
                            "global",
                            "num"
                        ],
                        "method":"getUIValue",
                        "redirection":"other:callback:call"
                    },
                    {
                        "desc":"计算",
                        "type":"control",
                        "target":"total",
                        "args":[
                            "{page.total.setUIValue()}",
                            "none",
                            "",
                            "(+{global.money})*(+{global.num})"
                        ],
                        "method":"setUIValue",
                        "redirection":"other:callback:call"
                    }
                ])
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        },
        events:{ }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});