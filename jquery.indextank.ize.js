(function($){
    if(!$.Indextank){
        $.Indextank = new Object();
    };
    
    $.Indextank.Ize = function(el, apikey, indexName, options){
        // To avoid scope issues, use 'base' instead of 'this'
        // to reference this class from internal events and functions.
        var base = this;
        
        // Access to jQuery and DOM versions of element
        base.$el = $(el);
        base.el = el;
        
        // Add a reverse reference to the DOM object
        base.$el.data("Indextank.Ize", base);
        
        base.init = function(){
            base.apikey = apikey;
            base.indexName = indexName;
            
            base.options = $.extend({},$.Indextank.Ize.defaultOptions, options);
            
            // Put your initialization code here
        };
        
        // Sample Function, Uncomment to use
        // base.functionName = function(paramaters){
        // 
        // };
        
        // Run initializer
        base.init();
    };
    
    $.Indextank.Ize.defaultOptions = {
    };
    
    $.fn.indextank_Ize = function(apikey, indexName, options){
        return this.each(function(){
            (new $.Indextank.Ize(this, apikey, indexName, options));
        });
    };
    
    // This function breaks the chain, but returns
    // the Indextank.Ize if it has been attached to the object.
    $.fn.getIndextank_Ize = function(){
        this.data("Indextank.Ize");
    };
    
})(jQuery);
