import { Observable } from "rxjs";
import { LocalData } from "./local-data";
import { RemoteData } from "./remote-data";
import { LocalDataFactory } from "./local-data-factory";
import { RemoteDataFactory } from "./remote-data-factory";
export declare class CompleterService {
    private localDataFactory;
    private remoteDataFactory;
    constructor(localDataFactory: LocalDataFactory, // Using any instead of () => LocalData because of AoT errors
    remoteDataFactory: RemoteDataFactory);
    local(data: any[] | Observable<any>, searchFields?: string | null, titleField?: string | null): LocalData;
    remote(url: string | null, searchFields?: string | null, titleField?: string | null): RemoteData;
}
