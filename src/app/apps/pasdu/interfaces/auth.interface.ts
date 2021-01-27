interface HttpResponse{
    err: string;
}

export interface HttpResponseCreateUser extends HttpResponse{
    done: boolean;
    redirect: string;
    queryparams: {};
}

export interface LoginHttpResponse extends HttpResponse{
    token: string;
    username: string; 
}