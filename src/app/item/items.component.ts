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

    girar(args:EventData){
        /*VALORES DOS ANGULOS
       585 item 7 azul piscina
       675 item 5 preto
       765 item 8 roxo
       855 item 6 verde
       450 item 1 amarelo
       360 item 4 laranja
       270 item 2 vermelho
       180 item 3 azul
      */
       const view = args.object as View;

       const page = view.page;
       const lbl = page.getViewById('estrutura') as View;
       
        
       let ale = parseInt(this.sortear(1,8).join(','));

       let deg,cor;
       switch(ale){
           case 1:
                deg=450;
                cor="30% de desconto !"
                break;
            case 2:
                deg=1350
                cor="3 rodadas grátis"
                break;
            case 3:
                deg=1260;
                cor="50% desconto"
                break;
            case 4:
                deg=360;
                cor="70% desconto"
                break;
            case 5:
                deg=675;
                cor="Preto"
                break;
            case 6:
                deg=855;
                cor="Copo do evento"
                break;
            case 7:
                deg=585;
                cor="Pulseira VIP"
                break;
            case 8:
                deg=765;
                cor="Rélogio"
                break;    
       }
    

       lbl.animate({rotate : deg, duration: 3000 });

       setTimeout(function(){
        alert("Parabéns você ganhou "+cor)
        lbl.animate({rotate : 0, duration: 3000 });

       },4000)
       
    }

    sortear(quantidade, maximo) {
        var numeros = [];
      
        console.time('Sorteando');
      
        // Preenche um array com os números de 1 ao maximo
        for (var numero = 1; numero <= maximo;  numero++) {
          numeros.push(numero);
        }
        
        numeros.sort(function randomizar(a, b) {
          return Math.random() * 2 - 1; // Ordena randomicamente
        });
      
        console.timeEnd('Sorteando');
        
        return numeros.splice(0, quantidade);
      }
      
}
