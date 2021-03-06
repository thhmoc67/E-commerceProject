/* Noel Delgado | @pixelia_me
 *
 * *** full attribution ***
 * Most of the code was taken from legomushroom's post
 * http://blog.legomushroom.com/2014/03/defining-advanced-animation-path/
 */

var path = document.getElementById('path');
var totalPathLen = ~~(path.getTotalLength());
var skull = document.getElementById('skull');
var objs = [].slice.call(skull.getElementsByTagName('path'), 0);
var objsLen = objs.length;
var bonesData = [];
var DURATION = 7 * 1000;
var atan = Math.atan;
var PI = Math.PI;
var tween = new TWEEN.Tween({length: 0});

objs.forEach(function(o, i) {
    var w, h, scale;
    w = o.getBBox().width;
    h = o.getBBox().height;
    scale = 1 - 100 * i / 3000;
  
    // ¯\_(ツ)_/¯
    if (i > 0) w += 30;
    else w = (w / 2 - 10);

    bonesData.push({ w : ~~w, h : ~~h, wHalf : ~~(w / 2), hHalf : ~~(h / 2), scale: scale });
});

function onUpdate() {
    var i, boneData, shift, scale, point, x, y, prevPoint, x1, x2, angle, attr;

    for (i = 0; i < objsLen; i++) {
        boneData = bonesData[i];
        shift = i * boneData.w;
        scale = boneData.scale;
        point = path.getPointAtLength(this.length - shift);
        x = ~~(point.x - boneData.wHalf);
        y = ~~(point.y - boneData.hHalf);
        prevPoint = path.getPointAtLength(this.length - shift - 1);
        x1 = point.y - prevPoint.y;
        x2 = point.x - prevPoint.x;
        angle = atan(x1/x2)*(180/PI);

        if (point.x - prevPoint.x < 0) {
            angle = 180 + angle;
        }

        attr = 'translate(' + x + ', ' + y + ') scale(' + scale + ') rotate(' + (angle || 0) + ',' + boneData.wHalf + ',' + boneData.hHalf + ')';
        objs[i].setAttribute('transform', attr);
    }
}

tween.to({length: totalPathLen}, DURATION)
    .onUpdate(onUpdate)
    .repeat(Infinity)
    .start();

var animate = function() {
  requestAnimationFrame(animate);
  TWEEN.update();
};

animate();