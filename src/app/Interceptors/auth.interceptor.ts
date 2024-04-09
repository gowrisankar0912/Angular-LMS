import { Observable, catchError, finalize, retry, throwError } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse} from "@angular/common/http";
import { AuthService } from "../services/auth-service/auth-service";


@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService){}
  public intercept(request: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer "Gowri Sankar"`,
          customheader: `Bearer "LMS using Angular"`
        }
      });
    return new Observable(observer => {
      next.handle(request).pipe(
        retry(2),
        catchError((error: HttpErrorResponse) => {
          alert(`HTTP Error: ${request.url}`);
          return throwError(error);
        }),
        finalize(() => {
          const monMessage = `${request.method} "${request.urlWithParams}"`;
          console.log(monMessage);
        })
      )
      .subscribe(event => {
        if(event instanceof HttpResponse) {
          observer.next(event);
        }        
      });
    });
  }
}