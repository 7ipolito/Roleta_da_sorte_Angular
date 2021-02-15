# Roleta da sorte - Cliente
<img src="https://user-images.githubusercontent.com/45522944/107975052-43e83100-6f96-11eb-83d8-5438f0855a5e.jpg" width=250 height=250>

# Código de elementos da roda

            <AbsoluteLayout class="item" >
                    <Image src="~/assets/images/desconto.png" loadMode="async" stretch="aspectFit" class="icon"></Image>    
                    <label class="textoElemento" text="30% desconto"></label>

            </AbsoluteLayout>

            <AbsoluteLayout class="item2">
                <Image src="~/assets/images/beer-outline.png" loadMode="async" stretch="aspectFit" class="icon2"></Image>

                <label class="textoElemento2" text="3 rodadas gratis"></label>
            
            </AbsoluteLayout>

            <AbsoluteLayout class="item3">
                <Image src="~/assets/images/beer-outline.png" loadMode="async" stretch="aspectFit" class="icon3"></Image>
                <label class="textoElemento3" text="Cerveja Gratis"></label>
            </AbsoluteLayout>

            <AbsoluteLayout class="item4">
                <Image src="~/assets/images/clock.png" loadMode="async" stretch="aspectFit" class="icon4"></Image>
                <label class="textoElemento4" text="Relogio evento"></label>
            
            </AbsoluteLayout>

            <AbsoluteLayout class="item5">
                <Image src="~/assets/images/vip.png" loadMode="async" stretch="aspectFit" class="icon5"></Image>
                <label class="textoElemento5" text="Pulseira VIP"></label> 

            </AbsoluteLayout>

            <AbsoluteLayout class="item6">
                <Image src="~/assets/images/glass.png" loadMode="async" stretch="aspectFit" class="icon6"></Image>
                <label class="textoElemento6" text="Copo Evento"></label>

            </AbsoluteLayout>

            
            



#  Código de sorteio da roda

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

## Link do funcionamento no youtube
[Funcionamento da Roleta](https://youtu.be/9Q7RqZ74syc)
