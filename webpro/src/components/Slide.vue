<template>
	<div class="slide" v-slider="imgs.length">
		<div class="slide_cont" :style="{width:(imgs.length * 100)+'%'}">
			<div class="slide_item" v-for="item in imgs" :style="{width:(100 / imgs.length)+'%'}">
				<img :src="item" alt="" >
			</div>
		</div>
	</div>
</template>

<script>
    export default{
        name: '',
        data(){
            return {
                imgs:[
                    'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-665333.jpg',
                    'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-665333.jpg',
                    'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-665333.jpg'
                ]
            }
        },
        directives:{
            slider:{
                inserted:function (el,binding) {
                    let startEvent,
                        moveEvent,
                        endEvent;
                    if("ontouchstart" in window){//判断是否支持touch事件
                        startEvent = 'touchstart';
                        moveEvent = 'touchmove';
                        endEvent = 'touchend';
                    }else{
                        startEvent = 'mousedown';
                        moveEvent = 'mousemove';
                        endEvent = 'mouseup';
                    }
                    let startX = 0;
                    let startY = 0;
                    let moveX = 0;
                    let moveY = 0;
                    let cont = el.childNodes[0];
                    let ind = 0;
                    el.addEventListener(startEvent,function (e) {
                        e.preventDefault();
                        if(e.targetTouches){
                            startX = e.targetTouches[0].pageX;
                            startY = e.targetTouches[0].pageY;
                        }
                    });
                    el.addEventListener(moveEvent,function (e) {
                        e.preventDefault();
                        if(e.targetTouches){
                            moveX = startX - e.targetTouches[0].pageX  ;
                            moveY = startY - e.targetTouches[0].pageY  ;

                            cont.style.transition = 'none';
                            cont.style.transform = 'translateX('+((window.innerWidth * (-ind))-moveX)+'px)';
                        }
                    });
                    el.addEventListener(endEvent,function (e) {
                        e.preventDefault();
                        if(e.targetTouches){
                            cont.style.transition = 'all .5s';
                            if(moveX > 100){
                                ind ++;
                            }else if(moveX < -100){
                                ind --;
                            }
                            if(ind < 0 ){
                                ind = 0;
                            }else if(ind > binding.value-1){
                                ind = binding.value-1;
                            }
                            cont.style.transform = 'translateX('+(window.innerWidth * (-ind))+'px)';
                            console.log(ind)
                        }
                    })
                }
            }
        }
    }
</script>

<style scoped>
.slide_cont{
	width:100%;
	min-height:20vh;
	background-color: #f5f5f5;
	display:flex;
}
	.slide_item{
		width:100%;
		height:100%;
	}
	.slide_item img{
		width:100%;
	}
</style>