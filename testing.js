"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
//No guarda el ultimo valor emitido
var subjectNormal = new rxjs_1.Subject();
//Guarda el ultimo valor emitido y necesita setearle uno inicial
var behaviourSubject = new rxjs_1.BehaviorSubject(null);
//Guarda todos los emitidos
var replaySubject = new rxjs_1.ReplaySubject();
function init() {
    console.log("--REPLAY--");
    replaySubject.next(+new Date());
    replaySubject.next(+new Date());
    var suscripcionReplay = replaySubject.subscribe(function (data) {
        //Nos devuelve los 2 datos emitidos
        console.log(data);
    }, function (error) { }, function () {
        suscripcionReplay.unsubscribe();
    });
    console.log("--SUBJECT--");
    subjectNormal.next("Vamos a meternos");
    subjectNormal.next("Unos buenos zumos de");
    var suscripcionSubjectNormal = subjectNormal.subscribe(function (data) {
        //Nos devuelve los 2 datos emitidos
        console.log(data);
    }, function (error) { }, function () {
        suscripcionSubjectNormal.unsubscribe();
    });
    subjectNormal.next("Crock");
    console.log("--BEHAVIOUR--");
    behaviourSubject.next("Y si en vez de meternos crock");
    behaviourSubject.next("Vamos al sotano a fabricar más?");
    var suscripcionBehaviour = behaviourSubject.subscribe(function (data) {
        console.log(data);
    }, function (error) { }, function () {
        suscripcionBehaviour.unsubscribe();
    });
}
init();
