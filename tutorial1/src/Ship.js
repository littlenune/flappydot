var Ship = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'res/images/ship.png' );
        this.direction = Ship.DIR.UP;
    },
    update: function( dt ) {
	var pos = this.getPosition();
    if ( this.direction == Ship.DIR.UP){
	   if ( pos.y < screenHeight ) {
	    this.setPosition( new cc.Point( pos.x, pos.y + 5 ) );
	   } else {
	    this.setPosition( new cc.Point( pos.x, 0 ) );
	   }
    }
    else if ( this.direction == Ship.DIR.RIGHT) {
        if ( pos.x < screenWidth ) {
	       this.setPosition( new cc.Point( pos.x + 5 , pos.y ) );
	    } else {
	    this.setPosition( new cc.Point( 0, pos.y ) );
	   }
        }
    else if ( this.direction == Ship.DIR.DOWN) {
        if ( pos.y > 0 ){
            this.setPosition( new cc.Point(pos.x, pos.y-5));
        }
        else {
            this.setPosition( new cc.Point(pos.x, screenHeight));
        }
    }
    else if ( this.direction == Ship.DIR.LEFT) {
        if ( pos.x > 0  ){
            this.setPosition( new cc.Point(pos.x-5,pos.y));
        }
        else {
            this.setPosition(new cc.Point(screenWidth,pos.y));
        }
    }
    }
     ,
    switchDirection: function() {
	if ( this.direction == Ship.DIR.UP ) {
	    this.direction = Ship.DIR.RIGHT;
	    this.setRotation( 90 );
	} else if ( this.direction == Ship.DIR.RIGHT) {
	    this.direction = Ship.DIR.DOWN;
	    this.setRotation( 180 );
	} else if ( this.direction == Ship.DIR.DOWN) {
        this.direction = Ship.DIR.LEFT;
        this.setRotation( 90  );
    } else if ( this.direction == Ship.DIR.LEFT) {
        this.direction = Ship.DIR.UP;
        this.setRotation(180)
    }
}   
});
Ship.DIR = {
    UP: 1,
    RIGHT: 2,
    DOWN: 3,
    LEFT: 4,
};