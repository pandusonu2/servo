// DO NOT EDIT! This test has been generated by /offscreen-canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.text.measure.baselines
// Description:Testing baselines for OffscreenCanvas
// Note:

importScripts("/resources/testharness.js");
importScripts("/2dcontext/resources/canvas-tests.js");

var t = async_test("Testing baselines for OffscreenCanvas");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

var f = new FontFace("CanvasTest", "url('/fonts/CanvasTest.ttf')");
let fonts = (self.fonts ? self.fonts : document.fonts);
f.load();
fonts.add(f);
fonts.ready.then(function() {
   ctx.font = '50px CanvasTest';
   ctx.direction = 'ltr';
   ctx.align = 'left'
   _assertSame(Math.abs(ctx.measureText('A').getBaselines().alphabetic), 0, "Math.abs(ctx.measureText('A').getBaselines().alphabetic)", "0");
   _assertSame(ctx.measureText('A').getBaselines().ideographic, -39, "ctx.measureText('A').getBaselines().ideographic", "-39");
   _assertSame(ctx.measureText('A').getBaselines().hanging, 68, "ctx.measureText('A').getBaselines().hanging", "68");

   _assertSame(Math.abs(ctx.measureText('ABCD').getBaselines().alphabetic), 0, "Math.abs(ctx.measureText('ABCD').getBaselines().alphabetic)", "0");
   _assertSame(ctx.measureText('ABCD').getBaselines().ideographic, -39, "ctx.measureText('ABCD').getBaselines().ideographic", "-39");
   _assertSame(ctx.measureText('ABCD').getBaselines().hanging, 68, "ctx.measureText('ABCD').getBaselines().hanging", "68");
}).then(t_pass, t_fail);

});
done();
