import { Directive, OnDestroy } from "@angular/core";
import { SubscriptionLike } from "rxjs";
import { ParamsHandler } from "../core/params-handler";
import { Assistant } from "../shared/Pipe/Assistant";


@Directive() 
export class Page implements OnDestroy, IPage {
    name: string;
    private subscriptionList: { [id: string]: SubscriptionLike; } = {};
    public viewState: any = {};

    constructor(public pageRoute: string, public messageOnNotify: (error: any, action?: any, className?: string) => void) {

    }

    ngOnDestroy(): void {
        this.unsubscribe();
    }

    public init(viewState: any) {
        this.name = this.constructor.name;
        this.viewState = viewState;
    }

    public refreshUrl(title: string = null) {
        window.history.pushState("", title, this.pageRoute + ParamsHandler.eup(this.viewState));
    }

    public parseResponse(response: any, ignoreMessage: boolean = false): any {
        if (response && ignoreMessage == false && response.Message != null && response.Message != "[]") {
            let style = 'default-snackbar';
            if (response.Data && response.Data.apiStatus == 0) {
                style = 'green-snackbar';
            }
            else if (response.Data && response.Data.apiStatus == 1) {
                style = 'yellow-snackbar';
            }
            if (response.Data && response.Data.apiStatus == 2) {
                style = 'red-snackbar';
            }
            if (Assistant.isJSON(response.Message)) {
                this.messageOnNotify(JSON.parse(response.Message), 'close', style);
            } else {
                this.messageOnNotify(response.Message, 'close', style);
            }
        }

        if (response != null) {
            if (response.Success)
                return response.Data;
            else
                return response.Data ? response.Data : null;
        }
    }

    public updateViewState(params: any): string | undefined{
        if (params != null) {
            for (let p in params) {
                this.viewState[p] = params[p];
            }
        }
        this.refreshUrl();
        return
    }

    public resetViewState(params: any): string | undefined{
        console.log('hi');
        console.log(params);
        
        if (this.viewState != null) {
            for (let p in this.viewState) {
                this.viewState[p] = null;
            }
        }

        if (params != null) {
            for (let p in params) {
                this.viewState[p] = params[p];
            }
        }
        return
    }

    private deleteSubscription(methodName: string) {
        if (this.subscriptionList[methodName] !== undefined) {
            this.subscriptionList[methodName].unsubscribe();
            delete this.subscriptionList[methodName];
        }
    }

    public unsubscribe(methodName: string = null) {
        if (methodName === null) {
            for (var i in this.subscriptionList) {
                if (this.subscriptionList[i] != null) {
                    this.deleteSubscription(i);
                }
            }
        } else {
            if (this.subscriptionList[methodName] != null)
                this.deleteSubscription(methodName);
            this.subscriptionList[methodName] = null;
            delete this.subscriptionList[methodName];
        }
    }

    public addSubscription(methodName: string, subscription: SubscriptionLike) {
        this.deleteSubscription(methodName);
        this.subscriptionList[methodName] = subscription;
    }
}

export interface IPage {
    name: string;
    viewState: any;
    messageOnNotify: (error: any, action?: any, className?: string) => void;
    parseResponse(response: any, ignoreMessage?: boolean): any;
    unsubscribe(methodName: string);
    addSubscription(methodName: string, subscription: SubscriptionLike);
}

