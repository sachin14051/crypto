import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>>{
    let reqClone = req.clone({
      setHeaders:{
        "content-type":"application/json",
        "auth":"jwt token"
      }
    })
    return  next.handle(reqClone)
  }
}
