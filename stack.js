class stack()
{
	constructor()
	{
		this.item=[];
	}
	push(a)
	{
		this.item.push(a);
	}
	pop()
	{
		if(this.item.length == 0)
			return "underflow"
		return this.item.pop();
	}
	stackres()
	{
		var b = " ";
		for(var i = 0; i < this.item.length; i++)
			b += ths.item[i];
		return b;
	}
 var stack =new stack();
 stack.push(1);
 stack.push(2);
 console.log(stack.pop());