({
    doInit : function(component, event, helper) {
        var action=component.get("c.getAcc");
        action.setCallback(this,response=>{
            var state=response.getState();
            if(state==="SUCCESS"){
                var res=response.getReturnValue();
                component.set("v.acc",res);
                component.set("v.flag",true);
            }else{
                console.log("something wrong!!");
            }
        })
        $A.enqueueAction(action);
    },
    changeSelect:function(component,event,helper){
        var accId=component.get("v.accId");
        var action=component.get("c.getCont");
        action.setParams({"accId":accId});
        action.setCallback(this,response=>{
            var state=response.getState();
            if(state==="SUCCESS"){
                var res=response.getReturnValue();
                component.set("v.cont",res);
                component.set("v.contFlag",true);
                  
            }else{
                console.log("something wrong!!");
            }
        })
        $A.enqueueAction(action);
    },
    changeSelectContact:function(component,event,helper){
        var contId=component.get("v.contId")
        var action=component.get("c.getContDetail");
        action.setParams({"contId":contId});
        action.setCallback(this,response=>{
            if(response.getState()==="SUCCESS"){
                var res=response.getReturnValue();
                component.set("v.contDetail",res);
                component.set("v.contDetailFlag",true);  
            }else{
                console.log("somethign went wrong!!!");
            }

        });
        $A.enqueueAction(action);
    }

})
