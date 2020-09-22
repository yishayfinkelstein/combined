const maxCharacters = 1000;
const url = 'http://api.voicerss.org/';
const apiKey = '213bed4e0a224b8cb4c4347661f28889';

const tooLongError = 'Text excodeds 1000 charachter maximum.';
const whitespaceError = 'Text must contain text characters other than white empty spaces.';

const buildUrl = (str) => `${url}?key=${apiKey}&src=${str}&f=48khz_16bit_stereo`;
const tooLong = (str) => str.length >= maxCharacters
const emptyString = (str) => str.split('').every(_char => _char === '' || _char ==='\n');
 
 const playBtn = () => document.getElementById('play-btn');
 const textInput = () => document.getElementById ('text-input');
 const appContainer = () => document.getElementById ('app-container');
 const errorContainer = () => document.getElementById ('error-message');
 
 const listenerFn = ($event) => {
	 if($event.target.value || $event.type === 'paste')
	     playBtn().disabled = false;
	 else
		 playBtn().disabled = true;
		 
	 
 };
 
 playBtn().addEventListener('click', ()=>{
	// clearErrors();
    if(!emptyString(textInput().value) && !tooLong(textInput().value))
	 new Audio(buildUrl(textInput().value)).play();
    else
		console.log('we have an error');
       //displayErrorMsg(textInput().value);	
          
    
 });
 
 
 document.addEventListener('DOMContentLoaded',() => {
	 const containerHeight = appContainer().clientHeight;
	 const docHeight = window.innerHeight;
	 appContainer().style.marginTop = `${docHeight/2 - containerHeight/2 -25}px`;
	 
	 textInput().addEventListener('keyup', listenerFn);
	 textInput().addEventListener('paste', listenerFn);
	 
 });