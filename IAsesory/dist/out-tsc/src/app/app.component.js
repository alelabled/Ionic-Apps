import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.selectedIndex = 0;
        this.appPages = [
            {
                title: "Mi Armario",
                url: "/folder/Armario",
                icon: "body"
            },
            {
                title: "Tu Asesor",
                url: "/folder/Asesor",
                icon: "paper-plane"
            },
            {
                title: "Tendencias para mi",
                url: "/folder/Tendencias",
                icon: "heart"
            }
        ];
        this.labels = [];
        this.initializeApp();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
    ngOnInit() {
        const path = window.location.pathname.split("folder/")[1];
        if (path !== undefined) {
            this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
        }
    }
};
AppComponent = tslib_1.__decorate([
    Component({
        selector: "app-root",
        templateUrl: "app.component.html",
        styleUrls: ["app.component.scss"]
    }),
    tslib_1.__metadata("design:paramtypes", [Platform,
        SplashScreen,
        StatusBar])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map