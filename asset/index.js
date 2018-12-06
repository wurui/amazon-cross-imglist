define([],function(){
  return {
    init:function($mod){
    	//this.checkScroll($mod);
    	var _this=this;
    	var currentIndex=0;
    	setInterval(function(){
    		//var $items=$('ul.logos>li',$mod);
    		//$('ul.logos>li:last-child',$mod).prependTo($('ul.logos'))
    		_this.scroll($mod,++currentIndex);

    	},3000)
    },
    scroll:function($mod,currentIndex){

    	var $items=$('ul.J_player>li',$mod);
    	var count=$items.length;
    	var total_layer=Math.ceil(count/2);

    	currentIndex=currentIndex%count;

    	$items.each(function(idx,n){
    		var i=(idx + count - currentIndex)%count;
    		
    		var direction=i<total_layer?1:-1,
    		layer=i<total_layer?i:(count - i);

    		//console.log('i=',i,' layer=',layer)

    		//translateX({(2 div ( 2+ $layer ) ) * $layer * $direction * 40 }%) scale({2 div ( 2+ $layer )});z-index:{$count - $layer};
    		var $this=$(this).css({
    			//translateX({(2 div ( 2+ $layer ) ) * $layer * $direction * 40 }%) scale({2 div ( 2+ $layer )});z-index:{$total_layer - $layer}
    			transform: 'translateX('+(2/(2+layer) * layer * direction *40)+'%) scale('+(2/(2+layer))+');z-index:'+(total_layer - layer)
    		});
    		if(layer==0){
    			$this.addClass('selected')
    		}else{
    			$this.removeClass('selected')
    		}
    	});
    }
  }
})
