import { Injectable, NgModule } from '@angular/core';
import { HttpInterceptor, HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class ZomatoServiceInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const dupRequest = req.clone({
            headers : req.headers.set('user-key','3ee5a022ebfbd89d5645edeb213382a9')
        });
        return next.handle(dupRequest);
    }
};

@NgModule({
    providers : [
        {
            provide : HTTP_INTERCEPTORS,
            useClass : ZomatoServiceInterceptor,
            multi : true
        }
    ]
})
export class InterceptorModule{}