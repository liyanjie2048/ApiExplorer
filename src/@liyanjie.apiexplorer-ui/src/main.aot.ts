import { enableProdMode } from "@angular/core";
import { platformBrowser } from "@angular/platform-browser";
import { ModuleNgFactory } from "../aot/src/app/module.ngfactory";

enableProdMode();
platformBrowser()
    .bootstrapModuleFactory(ModuleNgFactory)
    .catch(err => console.log(err));