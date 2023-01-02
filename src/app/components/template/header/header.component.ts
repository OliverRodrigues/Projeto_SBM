import { Component, ElementRef, ViewChild } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent {

  ativo:Boolean = false;

    abrirMenu(){



      let menu = (document.getElementById("menu") as HTMLInputElement);

      let conteudo = (document.getElementById("conteudo") as HTMLInputElement);



      if(!this.ativo){



          menu.style.width ='0px';

          conteudo.style.marginLeft = '0px';

          this.ativo = true;



        }else{

         this.fecharMenu();

        }



       menu.addEventListener('click',this.fecharMenu);

        }



        fecharMenu(){

          let menu = (document.getElementById("menu") as HTMLInputElement);

          let conteudo = (document.getElementById("conteudo") as HTMLInputElement);

          menu.style.width ='300px';

          conteudo.style.marginLeft = '300px';

          this.ativo = false;

        }

    }




