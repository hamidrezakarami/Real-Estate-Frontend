import { Directive, OnDestroy } from "@angular/core";
import { SubscriptionLike } from "rxjs";

@Directive() 
export class SubscribeManager implements OnDestroy {
    public subscriptionList: { [id: string] : SubscriptionLike; } = {};

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

    public addSubscription$(methodName : string , subscription : SubscriptionLike) {
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
