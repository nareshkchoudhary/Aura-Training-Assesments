({
    avg:function(component,event,helper){
        alert('heyyy')
    },
    sum : function(component, event, helper) {
       $A.enqueueAction(component.get('c.avg()'));
    },
    
})
