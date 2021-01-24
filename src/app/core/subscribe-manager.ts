import { OnDestroy } from "../../../node_modules/@angular/core";
import { ISubscription } from "../../../node_modules/rxjs/Subscription";

export class SubscribeManager implements OnDestroy {
    public subscriptionList: { [id: string] : ISubscription; } = {};

    public unsubscribe(methodName : string=null){
        if(methodName===null){
            for(var i in this.subscriptionList){
                if(this.subscriptionList[i] != null){
                    this.deleteSubscription(i);
                }
            }
        }else{
            if(this.subscriptionList[methodName] != null)
                this.deleteSubscription(methodName);
            this.subscriptionList[methodName] = null;
            delete this.subscriptionList[methodName];
        }
    }

    private deleteSubscription(methodName : string){
        this.subscriptionList[methodName].unsubscribe();
        delete this.subscriptionList[methodName];
    }

    public addSubscription$(methodName : string , subscription : ISubscription) {
        if(this.subscriptionList[methodName] !== undefined) {
            this.subscriptionList[methodName].unsubscribe();
            delete this.subscriptionList[methodName];
        }
        this.subscriptionList[methodName] = subscription;
    }

    ngOnDestroy(): void {
        this.unsubscribe();
    }

    public constructor() {

    }

}
