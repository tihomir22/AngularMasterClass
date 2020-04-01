import { Subject, interval, BehaviorSubject, ReplaySubject } from "rxjs";
//No guarda el ultimo valor emitido
var subjectNormal: Subject<any> = new Subject();
//Guarda el ultimo valor emitido y necesita setearle uno inicial
var behaviourSubject: BehaviorSubject<any> = new BehaviorSubject(null);
//Guarda todos los emitidos
var replaySubject: ReplaySubject<any> = new ReplaySubject();

function init() {
  console.log("--REPLAY--");
  replaySubject.next(+new Date());
  replaySubject.next(+new Date());
  var suscripcionReplay = replaySubject.subscribe(
    (data: any) => {
      //Nos devuelve los 2 datos emitidos
      console.log(data);
    },
    (error: any) => {},
    () => {
      suscripcionReplay.unsubscribe();
    }
  );
  console.log("--SUBJECT--");
  subjectNormal.next("Vamos a meternos");
  subjectNormal.next("Unos buenos zumos de");
  var suscripcionSubjectNormal = subjectNormal.subscribe(
    (data: any) => {
      //Nos devuelve los 2 datos emitidos
      console.log(data);
    },
    (error: any) => {},
    () => {
      suscripcionSubjectNormal.unsubscribe();
    }
  );
  subjectNormal.next("Crock");
  console.log("--BEHAVIOUR--");
  behaviourSubject.next("Y si en vez de meternos crock");
  behaviourSubject.next("Vamos al sotano a fabricar más?");
  var suscripcionBehaviour = behaviourSubject.subscribe(
    (data: any) => {
      console.log(data);
    },
    (error: any) => {},
    () => {
      suscripcionBehaviour.unsubscribe();
    }
  );
}

init();
