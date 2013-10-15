/**
 * @mixin
 * @name Events
 * @example
 * var Basket=function(){
 *      var that=Object.create(Events());
 *      that.addItem=function(id){
 *          that.publish("basket:item:add",{id:id});
 *      };
 *      that.removeItem=function(id){
 *          that.publish("basket:item:remove",{id:id});
 *      };
 * 
 * 
 *      return that;
 *      
 * };
 * var myBasket=Basket();
 * myBasket.subscribe("basket:item:add",function(data){alert("A new Item has been added to your basket.");});
 * myBasket.subscribe("basket:item:remove",function(data){alert("the item referenced by"+id+"has been removed from your basket.");});
 */
 
function Events(){
    
    return{
        /**
         * @memberOf Events
         * @param {string} event
         * @param {object} [data={}]
         */ 
        publish:function(event, data){
            
        },
        /**
         * @memberOf Events
         * @param {string} event
         * @param {function}
         */ 
        subscribe:function(event,fn){
            
        },
        /**
         * @memberOf Events
         * @param {(function|array)} handler -The array returned by subscribe or the function given previously to it. 
         */ 
        unsubscribe:function(handler){
            
        }
    };
}