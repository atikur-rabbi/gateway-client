import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GatewayServiceService {

  constructor(private http: HttpClient) { }

  public addGateway(gateway) {
      return this.http.post("https://gateway2.we2app.com/api/v1/gateway",gateway);
  }
  public getAllGateway(){
    return this.http.get("https://gateway2.we2app.com/api/v1/gateways");
  }

  public getDevicesByGatewayId(gatewayId: String) {
    return this.http.get("https://gateway2.we2app.com/api/v1/gateway/"+gatewayId+"/devices");
  }

  public deleteGateway(gatewayId: String) {
     return this.http.delete("https://gateway2.we2app.com/api/v1/gateway/"+gatewayId);
  }
}
