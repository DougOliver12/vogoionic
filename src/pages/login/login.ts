import { Component } from '@angular/core';
import { IonicPage, NavController,AlertController, NavParams  } from 'ionic-angular';


import { AuthProvider } from '../../providers/auth/auth';
import { TabsPage } from '../tabs/tabs';



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


  email:string = '';
  password:string = '';

  errorMsg:string;



  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public authService: AuthProvider ,
   
    public alertCtrl: AlertController ,
  
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  errorFunc(message){
    let alert = this.alertCtrl.create({
      title: 'Atencao!',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }




  myLogIn(){
 
    if (this.email.trim() !==''    ) {    
      
      console.log(this.email.trim() + "   " + this.password.trim() )
       
      if (this.password.trim()  === '') {
        this.errorFunc('Por favor insira sua senha')
 
      }else{
 
        let credentials = {
          email: this.email,
            password: this.password
        };
 
        
         this.authService.login(credentials).then((result) => {
            console.log(result);
            this.navCtrl.setRoot(TabsPage);
           
        }, (err) => {
     
            console.log(err);
            this. errorFunc('Credencial errada ! Tente novamente')
            console.log("credenciais: "+JSON.stringify(credentials))
            
        });
 
      }
      
   }
   else{
    
    this. errorFunc('Insira uma senha valida ! ex:(123456)')
   
    }
 
 

}





myLogOut(){
  this.authService.logout();
}










}
