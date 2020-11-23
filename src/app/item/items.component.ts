import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import {KeyframeAnimation} from "tns-core-modules/ui/animation/keyframe-animation";
import { View } from "tns-core-modules/ui/core/view";
import { getViewById } from "tns-core-modules/ui/core/view";

import { Item } from "./item";
import { ItemService } from "./item.service";
import { EventData } from "tns-core-modules/data/observable";
import { Color } from "tns-core-modules/color";


@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
    styleUrls: ["./items.component.css"]
})
export class ItemsComponent implements OnInit {
    

    // This pattern makes use of Angular’s dependency injection implementation to
    // inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule,
    // defined in app.module.ts.
    constructor(private itemService: ItemService) { 
        
    }

    ngOnInit(): void {
        
    }

    onLoaded(event) {
        //Conserto Bug Indicador
        const layout = event.object;
        if (layout.android) {
          layout.android.getParent().setClipChildren(false);
        }
      }

    girar(args:EventData){
        /*VALORES DOS ANGULOS
        PADRÃO = 70 raus
        ITEM 1 = 790 graus
        ITEM 2 = 1330 graus
        ITEM 3 = 910 graus
        ITEM 4 = 1090 graus
        ITEM 5 = 670 graus
        ITEM 6 = 850 graus

      */
       const view = args.object as View;

       const page = view.page;
       const lbl = page.getViewById('estrutura') as View;
       
        
       let ale = parseInt(this.sortear(1,6).join(','));

       let deg,premio;
       switch(ale){
           case 1:
                deg=790;
                premio="30% de desconto !"
                break;
            case 2:
                deg=1330
                premio="3 rodadas grátis"
                break;
            case 3:
                deg=910;
                premio="Cerveja Grátis"
                break;
            case 4:
                deg=1090;
                premio="Relógio Evento"
                break;
            case 5:
                deg=670;
                premio="Pulseira VIP"
                break;
            case 6:
                deg=850;
                premio="Copo Evento"
                break;
       }
    
      //Duration como duração da animação em milisegundos
       lbl.animate({rotate : deg, duration: 3000 });

       setTimeout(function(){
        alert("N:"+ale+" Parabéns você ganhou "+premio)
        lbl.animate({rotate : 70, duration: 3000 });

       },4000)       
    }

    sortear(quantidade, maximo) {
        var numeros = [];
      
        console.time('Sorteando');
      
        for (var numero = 1; numero <= maximo;  numero++) {
          numeros.push(numero);
        }
        
        numeros.sort(function randomizar(a, b) {
          return Math.random() * 2 - 1; 
        });
      
        
        
        return numeros.splice(0, quantidade);
      }
      
}
