var Gold = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'res/images/gold.png' );
    },
    randomPosition: function() {
        var x,y;
        x = (Math.random()*800)+5;
        y = (Math.random()*600)+5;
        return this.setPosition( new cc.Point( x, y ) );
    },
    closeTo: function( obj ) {
	var myPos = this.getPosition();
	var oPos = obj.getPosition();
  	return ( ( Math.abs( myPos.x - oPos.x ) <= 16 ) &&
		 ( Math.abs( myPos.y - oPos.y ) <= 16 ) );
    }
});