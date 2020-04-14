"use strict";var documentClasses=document.documentElement.className;var supportsObjectFit=documentClasses.indexOf(" object-fit")!==-1;var noObjectFit=documentClasses.indexOf("no-object-fit")!==-1;if(!supportsObjectFit&&!noObjectFit){console.warn("Modernizr is missing the “object-fit” test");}var BackgroundPicture=function(config){var backgroundPicture={initialize:function(config){if(supportsObjectFit){return false;}var self=this;Object.assign(this,config);this.debug=false;this.img=this.el.getElementsByTagName("img")[0];this.isModern=typeof this.img.currentSrc!=="undefined";this.img.onload=function(){self.update("onload");};if(this.isModern&&this.img.currentSrc.length){this.update("init");}else if(this.img.src.length){this.update("old init");}},update:function(msg){this.debug&&console.log(msg,"currentSrc: "+this.img.currentSrc,"src: "+this.img.src);var source=this.isModern?this.img.currentSrc:this.img.src;if(!source.length){this.el.style.backgroundImage="";}else{this.el.style.backgroundImage="url('"+source+"')";}}};backgroundPicture.initialize(config);return backgroundPicture;};if(!supportsObjectFit){var els=document.querySelectorAll(".js-background-image");for(var i=0,len=els.length;i<len;i++){new BackgroundPicture({el:els[i]});}}