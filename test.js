"use strict"
console.log('Hello! Call the function:')

function isEven(a) {
	if (a==0) {
		return true;
	} 
	if (a==1) {
		return false;
	}
	return isEven(a-2);
}

function countBs(a) {
	var l=0;
	for (var i=0; i<a.length; i++) {
		if (a.charAt(i)=="B") {
			l+=1;
		}
	}
	return l;
}

function countChar(a,b) {
	var l=0;
	for (var i=0; i<a.length; i++) {
		if (a.charAt(i)==b) {
			l+=1;
		}
	}
	return l;
}

function range(a,b,step=1) {
	var res=[],k=0;
	if (step>0) {
		for (var i=a; i<=b; i+=step) {
			res[k]=i;
			k++;
		}
	} else {
		for (var i=a; i>=b; i+=step) {
			res[k]=i;
			k++;
		}
	}
	return res;
}

function sum(a) {
	var s=0;
	for (var i=0; i<a.length; i++) {
		s+=a[i];
	}
	return s;
}

function reverseArray(a) {
	var res=[],k=0;
	for (var i=a.length-1; i>=0; i--) {
		res[k]=a[i];
		k++;
	}
	return res;
}

function reverseArrayInPlace(a) {
	var k=a.length-1,  c=Math.floor(a.length/2),  m;
	for (var i=0; i<=c; i++) {
		m=a[i];
		a[i]=a[k];
		a[k]=m;
		k--;
	}
	return a;
}

function arrayToList(a=[1,2,3]) {
	var res={rest: null};
	for (var i=a.length-1; i>=0; i--) {
		res=prepend(a[i],res);
	}
	return res;
}

function listToArray(a={value:1, rest:{value:2, rest:{value:3, rest:null}}}) {

}

function nth(a,b,i=1){
	if (i==b) {
		return a.value; 
	}
	nth(a.rest,b,++i);
}

function prepend(a,b) {
	return {value:a, rest:b};
}

function deepEqual(a,b) {
	if ((a==null)&&(b==null)) {
		console.log('Oba objekta pustyje');
		return false;
	} else {
	if ((typeof(a)=='object')&&(typeof(b)=='object')) {
		var flag=true;
		for (var i in a,b) {
			if (a[i]!=b[i]) {flag=false;}
		}
		return flag;
	} else {return (a===b) ? true : false;}
}
}


